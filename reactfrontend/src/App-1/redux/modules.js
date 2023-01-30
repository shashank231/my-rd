const initialState = {
    items: [],
    num: "ab",
}

export const ADD_ITEM = 'APP1/TODO/ADD_ITEM';
export const REMOVE_ITEM = 'APP1/TODO/REMOVE_ITEM';
export const REMOVE_ALL_ITEMS = 'APP1/TODO/REMOVE_ALL_ITEM';
export const CHANGE_NUM = 'APP1/TODO/CHANGE_NUM';


export const addItem = (element) => {
    return {
        type: ADD_ITEM,
        element
    }
}

export const changeNum = (num) => {
    return {
        type: CHANGE_NUM,
        num
    }
}

export const removeItem = (id) => {
    console.log("removeItem action is called param -", id);
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const removeAllItems = () => {
    console.log("removeAllItem action is called param -");
    return {
        type: REMOVE_ALL_ITEMS,
    }
}


const todoReducer = (data = initialState, action) => {
    switch (action.type) {
        case CHANGE_NUM: {
            const { num } = action;
            console.log("changenum reducer called = ", num);
            return  {
                ...data,
                num: num,
            };
        }
        case ADD_ITEM: {
            // const { element } = action;
            // let { items } = data;
            // items.push(element);
            // console.log("add item reducer called = ", items);
            const { element } = action;
            console.log("add item reducer called = ", element);

            return  {
                ...data,
                items: element,
            };
        }
        case REMOVE_ITEM: {
            const { id } = action;
            const { items } = data;
            const newItems = items.filter(item => item.id != id);
            console.log("add item reducer called = ", newItems);
            return {
                ...data,
                items: newItems,
            };
        }
        case REMOVE_ALL_ITEMS: {
            return {
                ...data,
                items: [],
            };
        }
        default:
            return data;
    }
}


export default todoReducer;