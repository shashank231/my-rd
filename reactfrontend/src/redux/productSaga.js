import { takeEvery, put } from 'redux-saga/effects'

const PRODUCT_LIST="PRODUCT_LIST"
const SET_PRODUCT_LIST="SET_PRODUCT_LIST"
const SEARCH_PRODUCT="SEARCH_PRODUCT"


function* getProducts() {
    let data = yield fetch('http://localhost:3500/products');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data})
}

function* searchProducts(data) {
    console.log("aya");
    console.log(data);
    console.log(`http://localhost:3500/products?q=${data.query}`);

    let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
    console.log(result);

    result = yield result.json();
    console.log(result);

    console.warn("action is called", result)
    yield put({type: SET_PRODUCT_LIST, data:result})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)

}

export default productSaga;