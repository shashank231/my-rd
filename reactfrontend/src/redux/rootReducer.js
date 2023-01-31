import { combineReducers } from 'redux'
import todo from '../App-1/redux/modules';
import prods from '../Prods/redux/modules';

export default combineReducers({
    todo,
    prods,
})