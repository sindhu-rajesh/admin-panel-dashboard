// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import createRoot
import { Provider } from "react-redux";
import store from "./store/store"; // ✅ Ensure you import your Redux store
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Ensure Bootstrap is imported

// ✅ Use createRoot() instead of render()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
