import { Box, IconButton, Typography } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux";
import { addToCart, deletOneItem } from "../../rtk/slices/cartSlice";


function IncDec({item}) {

  const dispatch = useDispatch();

    return(
        <Box 
          display= 'flex'
           sx={{ 
              marginRight : 2
          }} 
        >
            <IconButton onClick={() => dispatch(deletOneItem(item))}>
                <RemoveIcon />
            </IconButton>
            <Typography variant="h6" sx={{ p: 2 }}> {item.quantity}</Typography>
            <IconButton onClick={() => dispatch(addToCart(item))}>
                <AddIcon />
            </IconButton>
        </Box>
    )
}

export default IncDec