const ADD_TO_CART="ADD_TO_CART"
const REMOVE_FROM_CART="REMOVE_FROM_CART"
const EMPTY_CART="EMPTY_CART"

export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    console.warn("action emptyCart",)
    return {
        type: EMPTY_CART,
    }
}

const PRODUCT_LIST="PRODUCT_LIST"
const SEARCH_PRODUCT="SEARCH_PRODUCT"

export const productList = () => {
  
    return {
        type: PRODUCT_LIST,
    }
}

export const productSearch = (query) => {
  
    return {
        type: SEARCH_PRODUCT,
        query
    }
}