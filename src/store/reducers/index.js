import {combineReducers} from 'redux';
import App from './App';
import Sidebar from './Sidebar';

const allReducers = combineReducers({
    App, 
    Sidebar
});

export default allReducers;