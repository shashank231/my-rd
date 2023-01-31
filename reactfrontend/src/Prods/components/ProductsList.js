import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { productsSelector } from "../redux/selectors";
import { connect } from "react-redux";




function ProductsListComponent(props) {
    const {
        products,
    } = props;
    const productsList = products.map((prod, index) => {
        return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={index}>
        
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={prod.name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={prod.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Price : 
                      </Typography>
                      {prod.price}
                    </React.Fragment>
                  }
                />
              </ListItem>
        
              <Divider variant="inset" component="li" />
            </List>
          );
      });
      return (
        <React.Fragment>
          {productsList}
        </React.Fragment>
    );
}


const mapStateToProps = (state) => ({
    products: productsSelector(state),
});


export const ProductsList = connect(mapStateToProps, {})(ProductsListComponent);

