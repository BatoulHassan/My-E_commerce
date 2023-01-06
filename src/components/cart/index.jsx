import React from 'react'
import { Box, Typography, Button, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Colors } from '../../styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '../../rtk/slices/cartSlice';
import { Link } from 'react-router-dom';
import CartItem from './cartItem';

function Cart() {

  const cart = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();

  const totalPrice =  cart.reduce((acc, product) => {
    acc += product.price * product.quantity
    return acc
  }, 0)

  const isEmpty = !cart.length;

  const EmptyCart = () => (
    <>
      <Typography variant='subtitle1' gutterBottom sx={{ marginTop: '15px'}}>
        You have no items in your shopping cart, 
      </Typography>
      <Link to='/'  style={{textDecoration: 'none'}} >
        <Button variant='contained' >start adding some!</Button>
      </Link>
    </>  
  );

  const FilledCart = () => (
    <>
      <Box sx={{
             width: {lg: '70%', md: '90%'},
             margin: "auto",
             marginTop: '20px',
               //padding: '30px'
              }}
               >
        <Paper elevation={3} sx={{ padding: '20px'}}>
          <Typography variant='h6'>Order Summary</Typography>
          <Divider sx={{ borderColor: Colors.border}}/>
          <List>
             {cart.map((item) => (
               <CartItem key={item.id} item={item} />
             ))}
             <ListItem>
              <ListItemText primary={`Total Price: ${totalPrice.toFixed(2)} $`} />
             </ListItem>
          </List>
          <Box  sx={{ paddingLeft: '16px' }} >
           <Button variant='contained' onClick={() => dispatch(clear())}>Clear Cart</Button>
          </Box>
        </Paper>
      </Box> 
    </>
  )

  return (
    <>
      <Box 
        sx={{
         background: Colors.secondary,
         padding: '10px',
      }}
 
      >
         <Typography variant="h6">My Cart</Typography>
     </Box> 
     { isEmpty ? <EmptyCart /> : <FilledCart /> }
  </>
  )
}

export default Cart;
