import React from "react";
import { connect } from "react-redux";
import { listProducts } from "../redux/modules";
import Button from '@mui/material/Button';
import styles from "./Products.module.scss";
import { ProductsList } from "./ProductsList";
import { useState } from "react";



function ProductsComponent(props){
  const {
        listProducts,
    } = props;

  const [ btnProductShow, setBtnProductShow ] = useState(true);

  const handleClick = () => {
    setBtnProductShow(!btnProductShow);
    listProducts();
  };
  
  const Button1 = (
    <Button 
      variant="contained"
      onClick={handleClick}
      disableElevation
    >
      {btnProductShow ? "Show Products" : "Hide Products" }
    </Button>
  )

  return (
      <React.Fragment>
        <div className={styles.btn1}>
          {Button1}
          {btnProductShow ? '' : <ProductsList />}
        </div>
      </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
});


export const Products = connect(mapStateToProps, {
    listProducts,
})(ProductsComponent);

