
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalrates: 0,
      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalrates: prevState.totalrates + 1
        }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalrates: prevState.totalrates + 1
        }));
      }
    };
  }

  handleLike = () => {
    this.setState({ likes: this.state.likes + 1 });
  }
  render() {
    return (
     <>
     <div className='content-rating'></div>
     <p>{this.state.totalrates}</p>
     <div className='rating_buttons'>
        <button className='like_button'  onClick={this.state.handleLike}>
          Like ({this.state.likes})
        </button>
          <button className='dislike_button' onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
     </div>
     </>
    );
  }
}

export default ContentRating;