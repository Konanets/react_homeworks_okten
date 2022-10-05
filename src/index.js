import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {postsReducer, usersReducer,commentsReducer} from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));

const reducer=combineReducers({usersReducer,postsReducer,commentsReducer})

const store=createStore(reducer)

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

