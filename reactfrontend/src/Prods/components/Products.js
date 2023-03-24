import React from "react";
import { connect } from "react-redux";
import { listProducts } from "../redux/modules";
import Button from '@mui/material/Button';
import styles from "./Products.module.scss";
import { ProductsList } from "./ProductsList";
import { useState } from "react";
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

function ProductsComponent(props){
  const {
      listProducts,
    } = props;

  const handleClick = () => {
    const obj1 = {
      companyName,
      priceLowest,
      priceHighest
    };
    listProducts(obj1);
  }

  const [ companyName, setCompanyName ] = useState('');
  const [ priceLowest, setPriceLowest ] = useState('');
  const [ priceHighest, setPriceHighest ] = useState('');

  const Button1 = (
    <Button 
      variant="contained"
      onClick={handleClick}
      disableElevation
    >
      {"Search"}
    </Button>
  )

  return (
      <React.Fragment>
        <div className={styles.productName}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Input placeholder="Company" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          <Input placeholder="Price lowest" value={priceLowest} onChange={(e) => setPriceLowest(e.target.value)} />
          <Input placeholder="Price highest" value={priceHighest} onChange={(e) => setPriceHighest(e.target.value)} />
        </Box>

        {Button1}
        <ProductsList />
   
        </div>





        {/* <div className={styles.div1}>
          {Button1}
          {btnProductShow ? '' : <ProductsList />}
        </div> */}
        {/* <div className={styles.form1} >
          <OldYoutubeForm />
        </div> */}
      </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
});


export const Products = connect(mapStateToProps, {
    listProducts,
})(ProductsComponent);

