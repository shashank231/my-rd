import { createSelector } from 'reselect';

const todoSelector = (state) => state.todo;

export const itemsSelector = createSelector(
    todoSelector,
    ({ items }) => items 
);


export const numSelector = createSelector(
    todoSelector,
    ({ num }) => num 
);

export function getCurrentDate(separator=''){
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}
  