import { takeEvery, put } from 'redux-saga/effects'
import { actions, actionTypes } from "./modules";


const {
    listProductsSucess,
} = actions;


const {
    LIST_PRODUCTS,
} = actionTypes;


function* listProductsSaga() {
    let data = yield fetch('http://127.0.0.1:8000/api/products');
    data = yield data.json();
    yield put(listProductsSucess(data));
}

function* productsSaga() {
    yield takeEvery(LIST_PRODUCTS, listProductsSaga)
}

export default productsSaga;
































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