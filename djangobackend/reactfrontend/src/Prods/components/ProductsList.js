import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as React from 'react';
import { productsSelector } from "../redux/selectors";
import { connect } from "react-redux";
import styles from "./ProductsList.module.scss";


function ProductsListComponent(props) {
  const {
      products,
  } = props;

  const productsList = products.map((prod, index) => {
      return (
        <div className={styles.card}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.prod_pc ? prod.prod_pc : "http://127.0.0.1:8000/images/default_product_pic.png"} className={styles.card_pic}/>
            <Card.Body>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Text>
                Price : {prod.price}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      );
    });

    return (
      <React.Fragment>
        <div className={styles.cardParent}>
          {productsList}
        </div>
      </React.Fragment>
  );
}


const mapStateToProps = (state) => ({
  products: productsSelector(state),
});


export const ProductsList = connect(mapStateToProps, {})(ProductsListComponent);





















// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import { productsSelector } from "../redux/selectors";
// import { connect } from "react-redux";



// function ProductsListComponent(props) {
//     const {
//         products,
//     } = props;

//     // <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={index}></List>


//     const productsList = products.map((prod, index) => {
//         return (
//           <div>
//             <ListItem alignItems="flex-start" key={index}>
//               <ListItemAvatar>
//                 <Avatar alt={prod.name} src="/static/images/avatar/1.jpg" />
//               </ListItemAvatar>
//               <ListItemText
//                 primary={prod.name}
//                 secondary={
//                   <React.Fragment>
//                     <Typography
//                       sx={{ display: 'inline' }}
//                       component="span"
//                       variant="body2"
//                       color="text.primary"
//                     >
//                       Price : 
//                     </Typography>
//                     {prod.price}
//                   </React.Fragment>
//                 }
//               />
//             </ListItem>
//             <Divider variant="inset" component="li" />
//           </div>  
//         );
//       });

//       return (
//         <React.Fragment>
//           <List
//             sx={{
//               width: '100%',
//               maxWidth: 450,
//               bgcolor: 'background.paper',
//               position: 'relative',
//               overflow: 'auto',
//               maxHeight: 400,
//               '& ul': { padding: 0 },
//             }}
//             subheader={<li />}
//           >
//           {productsList}
//           </List>
//         </React.Fragment>
//     );
// }


// const mapStateToProps = (state) => ({
//     products: productsSelector(state),
// });


// export const ProductsList = connect(mapStateToProps, {})(ProductsListComponent);

