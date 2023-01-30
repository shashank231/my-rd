const ADD_TO_CART="ADD_TO_CART"
const EMPTY_CART="EMPTY_CART"
const REMOVE_FROM_CART="REMOVE_FROM_CART"

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART condition ", action)
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            console.warn("REMOVE_FROM_CART condition ", action);
            // data.length= data.length? data.length-1:[]
            const remainingItems= data.filter((item)=>item.id!==action.data)
            return [...remainingItems]
            case EMPTY_CART:
                console.warn("EMPTY CART condition ", action);
                data =[]
                return [...data]
        default:
            return data
    }
}



const PRODUCT_LIST="PRODUCT_LIST"
const SET_PRODUCT_LIST="SET_PRODUCT_LIST"


export const productData = (data = [], action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            console.warn("PRODUCT_LIST condition ", action)
            return [...action.data]
        default:
            return data
    }
}