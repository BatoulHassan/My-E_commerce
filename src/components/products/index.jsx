import React from "react";
import { Box, Typography, Grid, Container, useMediaQuery } from "@mui/material"; 
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../rtk/slices/productsSlice";
import { useTheme } from '@mui/material/styles';
import SingleProduct from "./singleProduct";
import SingleProductDesktop from "./singleProductDesktop";

function Products() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const products = useSelector((state) => state.products);
    console.log("products is: ", products);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const renderProducts = products.map((product) => (
        <Grid item xs={2} sm={4} md={4}
              key={product.id}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              >
                {matches ?
                 (<SingleProduct matches={matches} product={product} />) 
                :
                (<SingleProductDesktop matches={matches} product={product} />)
                }
        </Grid>
        
    ));

    return(
        <Container>
          <Box display={'flex'} justifyContent='center' sx={{ p:4 }}>
             <Typography variant='h4'>Products</Typography>
          </Box>
          <Grid container spacing={{xs: 5, sm: 4, md: 2, lg:1}}
                justifyContent={'center'}
                columns={{ xs:4, sm:8, md:12 }}
                sx={{
                   marginBottom: '20px'
                }}
            >
                {renderProducts}
           </Grid>
        </Container>
    )
}

export default Products;