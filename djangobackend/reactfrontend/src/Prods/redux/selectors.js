
import { createSelector } from 'reselect';
const prodsSelector = (state) => state.prods;

export const productsSelector = createSelector(
    prodsSelector,
    ({ products }) => products 
);

