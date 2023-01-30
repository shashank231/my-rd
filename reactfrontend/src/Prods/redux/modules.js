
const initialState = {
    products: [],
}

export const LIST_PRODUCTS = 'PRODS/LIST_PRODUCTS';
export const LIST_PRODUCTS_SUCCESS = 'PRODS/LIST_PRODUCTS_SUCCESS';

export const listProducts = () => {
    return {
        type: LIST_PRODUCTS,
    }
}

export const listProductsSucess = (products) => {
    return {
        type: LIST_PRODUCTS_SUCCESS,
        products
    }
}

const prodsReducer = (data = initialState, action) => {
    switch (action.type) {
        case LIST_PRODUCTS_SUCCESS: {
            const { products } = action;
            return {
                ...data,
                products,
            };
        }
        default:
            return data;
    }
}

export const actions = {
    listProducts,
    listProductsSucess
};

export const actionTypes = {
    LIST_PRODUCTS,
    LIST_PRODUCTS_SUCCESS,
};


export default prodsReducer;