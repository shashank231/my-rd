import { takeEvery, put } from 'redux-saga/effects'
import { actions, actionTypes } from "./modules";

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
    const url1 = `http://127.0.0.1:8000/api/products/?company=${companyName}&price_greater_than=${priceLowest}&price_lower_than=${priceHighest}`
    let data = yield fetch(url1);
    data = yield data.json();
    yield put(listProductsSucess(data));
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