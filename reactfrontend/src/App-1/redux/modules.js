const initialState = {
    items: [],
    num: "ab",
}

export const UPDATE_ITEMS = 'APP1/TODO/UPDATE_ITEMS';



export const updateItems = (newItems) => {
    return {
        type: UPDATE_ITEMS,
        newItems
    }
}

const todoReducer = (data = initialState, action) => {
    switch (action.type) {

        case UPDATE_ITEMS: {
            const { newItems } = action;
            return  { ...data, items: newItems };
        }

        default:
            return data;
    }
}


export default todoReducer;