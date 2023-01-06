import { Stack } from "@mui/material"
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/product"
import ProductMeta from "./productMeta"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/cartSlice";

function SingleProduct({matches, product}) {

    const dispatch = useDispatch();

     return(
        <>
          <Product>
            <ProductImage src={product.image} />
            <ProductMeta product={product} matches={matches} />
            <ProductActionsWrapper show='true'>
                <Stack direction='row'>
                    <ProductFavButton isfav={0}>
                        <FavoriteIcon sx={{ fontSize: "20px"}}/>
                    </ProductFavButton>
                    <ProductActionButton>
                        <ShareIcon color="primary" sx={{ fontSize: "20px"}}/>
                    </ProductActionButton>
                    <ProductActionButton>
                        <FitScreenIcon color="primary" sx={{ fontSize: "20px"}}/>
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
         </Product>
         <ProductAddToCart variant="contained" onClick={() => dispatch(addToCart(product))}>Add To Cart</ProductAddToCart>
        </>
     )
}

export default SingleProduct