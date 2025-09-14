# 🌿 Paradise Nursery Shopping Application

A modern React-based e-commerce application for a plant nursery, built with Redux for state management and featuring a beautiful, responsive UI.

> **Standalone Project**: This is a complete, self-contained React application ready for deployment.

## ✨ Features

- **Plant Catalog**: Browse plants by categories (Air Purifying, Aromatic, Insect Repellent, Medicinal, Low Maintenance)
- **Shopping Cart**: Add, remove, and manage items with real-time updates
- **Redux State Management**: Centralized state management for cart operations
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Real-time Calculations**: Dynamic pricing and quantity calculations
- **Interactive UI**: Smooth animations and hover effects

## 🛠️ Tech Stack

- **Frontend**: React 18
- **State Management**: Redux Toolkit
- **Styling**: CSS3 with modern features
- **Build Tool**: Vite
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/paradise-nursery-app.git
cd paradise-nursery-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── CartItem.jsx          # Shopping cart component
│   ├── ProductList.jsx       # Product listing component
│   └── App.jsx              # Main application component
├── store/
│   ├── store.js             # Redux store configuration
│   └── CartSlice.jsx        # Cart state management
├── styles/
│   ├── App.css              # Global styles
│   ├── CartItem.css         # Cart component styles
│   └── ProductList.css      # Product list styles
└── main.jsx                 # Application entry point
```

## 🛒 Features Overview

### Shopping Cart
- Add items to cart with quantity management
- Real-time total calculations
- Increment/decrement item quantities
- Remove items completely
- Continue shopping functionality

### Product Management
- Categorized plant listings
- Detailed product information
- High-quality plant images
- Price display and calculations

### State Management
- Redux store for centralized state
- Actions for cart operations (add, remove, update)
- Real-time UI updates
- Persistent cart state

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface
- **Responsive Layout**: Adapts to all screen sizes
- **Interactive Elements**: Hover effects and smooth transitions
- **User Feedback**: Visual indicators for cart actions
- **Accessibility**: Semantic HTML and keyboard navigation

## 🚀 Deployment

This project is configured for easy deployment to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Run `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created with ❤️ for plant lovers and gardening enthusiasts.

## 🌱 Live Demo

[View Live Demo](https://paradise-nursery-app.vercel.app) - *Replace with your actual deployment URL*

---

**Happy Shopping for Plants! 🌿✨**