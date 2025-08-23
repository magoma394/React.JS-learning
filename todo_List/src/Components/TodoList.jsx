import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInput, setListInput] = useState("");
  const [listInputs, setListInputs] = useState([]);

  const handleAddTodo = () => {
    if(headingInput.trim() !== ""){
      setTodos([...todos, {heading: headingInput, lists: []}]);
      setHeadingInput("");
      setListInput("");
      setListInputs([...listInputs, ""]);
    }
  }

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    const newListInputs = listInputs.filter((_, i) => i !== index);
    setListInputs(newListInputs);
  }

  const handleListInputChange = (index, value) => {
    const newListInputs = [...listInputs];
    newListInputs[index] = value;
    setListInputs(newListInputs);
  }

  const handleAddList = (index) => {
    if(listInputs[index] && listInputs[index].trim() !== "") {
      const newTodos = [...todos];
      newTodos[index].lists.push(listInputs[index]);
      setTodos(newTodos);
      
      const newListInputs = [...listInputs];
      newListInputs[index] = "";
      setListInputs(newListInputs);
    }
  }

  const handleDeleteListItem = (todoIndex, listItemIndex) => {
    const newTodos = [...todos];
    newTodos[todoIndex].lists.splice(listItemIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}}
          />
          <button className="add-list-button" onClick={handleAddTodo} >Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className={"todo-card"}>
            <div className="heading_todo">
              <h3>{todo.heading}</h3>
              <button className='delete' onClick={() => handleDeleteTodo(index)}>Delete Heading</button>

              <div className='add_list'>
                {/* Input field for adding a new item under a specific heading */}
                <input
                  type="text"
                  className="list-input"
                  placeholder="Add List"
                  value={listInputs[index] || ''}
                  onChange={(e) => handleListInputChange(index, e.target.value)}/>
                {/* Button to add the list item to the corresponding heading */}
                <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
              </div>

              {/* Display the list items for this heading */}
              <div className="list-items">
                {todo.lists && todo.lists.map((listItem, listIndex) => (
                  <div key={listIndex} className="list-item">
                    <span>{listItem}</span>
                    <button 
                      className="delete-list-item" 
                      onClick={() => handleDeleteListItem(index, listIndex)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
