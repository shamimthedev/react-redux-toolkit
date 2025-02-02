import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './features/posts/Post.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)


// import ReactDOM from "react-dom";
// import App from "./App";
// import store from "./redux/store";
// import { Provider } from "react-redux";

// ReactDOM.render(
//   <Provider store={store}>
//       <App />
//   </Provider>,
//   document.getElementById("root")
// );