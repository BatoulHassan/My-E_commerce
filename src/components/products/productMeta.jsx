import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/product";


function ProductMeta({product, matches}) {

   return (
    <ProductMetaWrapper>
        <Typography variant={matches ? 'subtitle2' : 'h5'} >{product.category}</Typography>
        <Typography variant={matches ? 'caption' : 'body1'}>${product.price}</Typography>
    </ProductMetaWrapper>
   )
}

export default ProductMeta;