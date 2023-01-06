import { styled } from "@mui/system";
import { Box, Button, IconButton } from "@mui/material";
import { Colors } from '../theme/index';
import { slideInBottom, slideInRight } from "../../animation";

export const Product = styled(Box) (({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
        position: 'relative',
    }
}));

export const ProductImage = styled('img') (({src, theme}) => ({
     src: `url(${src})`,
     width: '250px',
     height: '300px',
     border: `2px solid ${Colors.secondary}`,
     padding: '30px',
     [theme.breakpoints.down("lg")]: {
        width: '200px',
        height: '250px',
        padding: '24px',
     },
     [theme.breakpoints.down("sm")]: {
        width: '100px',
        height: '130px',
        padding: '24px',
     }
}))

export const ProductMetaWrapper = styled(Box) (({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    [theme.breakpoints.down("md")]: {
        padding: "10px 10px 2px 10px",
    }
}));

export const ProductActionsWrapper = styled(Box) (({theme, show}) => ({
    display: show  ? 'visible' : 'none',
    [theme.breakpoints.up('md')]: {
     position: 'absolute',
     right: 0,
     top: '20%',
     animation: `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    }
 }));

 export const ProductActionButton = styled(IconButton) (({theme}) => ({
    background: Colors.white,
    margin: 4,
    [theme.breakpoints.down("md")]: {
        margin: 1,
    }
 }))

 export const ProductFavButton = styled(ProductActionButton) (({isfav, theme}) => ({
    color: isfav ? Colors.primary : Colors.light,
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        right: 0,
        top: 0,
       }
 }))

 export const ProductAddToCart = styled(Button) (({theme}) => ({
     background: Colors.secondary,
     width: '120px',
     fontSize: '12px',
     color: Colors.white,
     opacity: 0.9,
     [theme.breakpoints.up("md")]: {
        width: '250px',
        animation:
         `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
     }
 }))