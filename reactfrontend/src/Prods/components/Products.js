import React from "react";
import { connect, useSelector } from "react-redux";
import { productsSelector } from "../redux/selectors";
import { listProducts } from "../redux/modules";
import Button from 'react-bootstrap/Button';


function ProductsComponent(props){
  const {
        listProducts,
        products,
    } = props;

  const productsList = products.map((prod, index) => {
    return <h1 key={index}>{prod.name}</h1>
  });

  return (
      <React.Fragment>
        <Button 
          variant="warning"
          type='submit'
          onClick={listProducts}
        >
          Show Products
        </Button>
        
        {productsList}

      </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
    products: productsSelector(state),
});


export const Products = connect(mapStateToProps, {
    listProducts,
})(ProductsComponent);

