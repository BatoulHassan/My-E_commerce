import { Typography, Button, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material';
import { Box } from '@mui/system';
import { deletFromCart } from '../../rtk/slices/cartSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
import IncDec from './incDec';
import { Colors } from '../../styles/theme';

function CartItem({item}) {

const dispatch = useDispatch();
  return (
    <>
    <ListItem> 
        <ListItemAvatar  sx={{display: {xs: 'none', sm: 'block', md: 'block', lg: 'block'}}}>
            <Avatar src={item.image} alt={item.category} />
        </ListItemAvatar>
        <ListItemText primary={item.category} secondary={`Quantity: ${item.quantity}`} />
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} sx={{marginBottom: '15px'}}>
            <Typography variant='subtitle1' sx={{ marginRight: '20px', fontWeight: '600'}}>{item.price} $</Typography>
            <IncDec item={item} />
            <Button variant='contained' onClick={() => dispatch(deletFromCart(item))}>Delete</Button>
        </Box>
    </ListItem> 
    <Divider sx={{ borderColor: Colors.border}} />
    </>
  )
}

export default CartItem;
