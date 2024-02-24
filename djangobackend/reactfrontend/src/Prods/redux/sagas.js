import { takeEvery, put, call } from 'redux-saga/effects'
import { actions, actionTypes } from "./modules";
import axios from 'axios';

const {
    listProductsSucess,
} = actions;

const {
    LIST_PRODUCTS,
} = actionTypes;

function* listProductsSaga(request, action) {
    const { obj1 } = action;
    const {
        companyName,
        priceLowest,
        priceHighest
    } = obj1;
    const endpoint = `http://127.0.0.1:8000/api/products/?company=${companyName}&price_greater_than=${priceLowest}&price_lower_than=${priceHighest}`
    const resp = yield call(axios.get, endpoint);
    yield put(listProductsSucess(resp.data));
}

function* productsSaga(request) {
    yield takeEvery(LIST_PRODUCTS, 
          listProductsSaga,
          request,
        );
}

export default [productsSaga];
































// function* searchProducts(data) {
//     console.log("aya");
//     console.log(data);
//     console.log(`http://localhost:3500/products?q=${data.query}`);

//     let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
//     console.log(result);

//     result = yield result.json();
//     console.log(result);

//     console.warn("action is called", result)
//     yield put({type: SET_PRODUCT_LIST, data:result})
// }