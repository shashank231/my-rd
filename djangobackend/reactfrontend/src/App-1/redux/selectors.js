import { createSelector } from 'reselect';

const todoSelector = (state) => state.todo;

const itemsSelector = createSelector(
    todoSelector,
    ({ items }) => items 
);

const isThereAnyitemsSelector = createSelector(
    todoSelector,
    () => {
        // return items.length ? true : false;
        return true;
    } 
);

function getCurrentDate(separator=''){
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear(); 
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

export {
    itemsSelector,
    isThereAnyitemsSelector,
    getCurrentDate,
};