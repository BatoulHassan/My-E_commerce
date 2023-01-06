import React, {useState} from 'react';
import { Stack } from "@mui/material"
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/product"
import ProductMeta from "./productMeta"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../rtk/slices/cartSlice';
function SingleProductDesktop({matches, product}) {
     
     const [showOptions, setShowOptions] = useState(false);

     const handleMouseEnter = () => {
        setShowOptions(true)
     }

     const handleMouseLeave = () => {
        setShowOptions(false)
     }
     const dispatch = useDispatch();
     return(
        <>
          <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={product.image} />
            <ProductFavButton isfav={0}>
                <FavoriteIcon />
            </ProductFavButton>
            {
                showOptions &&
                    <ProductAddToCart onClick={() => dispatch(addToCart(product))} show={showOptions} variant="contained">Add To Cart</ProductAddToCart>
            }
             <ProductActionsWrapper  show={showOptions}>
                <Stack direction='column'>
                    <ProductActionButton>
                        <ShareIcon color="primary" />
                    </ProductActionButton>
                    <ProductActionButton>
                        <FitScreenIcon color="primary" />
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
         </Product>
         <ProductMeta product={product} matches={matches} />
        </>
     )
}

export default SingleProductDesktop
