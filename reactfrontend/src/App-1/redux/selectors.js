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

