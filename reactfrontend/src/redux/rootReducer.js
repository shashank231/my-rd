import { combineReducers } from 'redux'
import { cartData } from './reducer'
import { productData } from './reducer'
import todo from '../App-1/redux/modules';
import prods from '../Prods/redux/modules';

export default combineReducers({
    cartData,
    todo,
    prods,
    productData,
})