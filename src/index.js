import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style/main.scss';
import store from "./store/store.js";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector("#root")
);