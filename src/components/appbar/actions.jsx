import { MyList } from "../../styles/appbar"
import { ListItemButton, ListItemIcon, Divider, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ActionIconsContainerDesktop, ActionIconsContainerMobile } from "../../styles/appbar";
import { Colors } from "../../styles/theme";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Actions({matches}) {

    const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;
    const cart = useSelector((state) => state.cart);
    //console.log("cart is: ", cart);

    return (
        <Component>
          <MyList type='row'>
             <ListItemButton>
                      <ListItemIcon 
                         sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          color: matches && Colors.secondary,
                         }}
                      >
                         <Link to='/cart'>
                          <Badge badgeContent={cart && cart.length} color="secondary" > 
                            <ShoppingCartIcon sx={{color :Colors.dim_grey}} />
                          </Badge> 
                         </Link>
                      </ListItemIcon>
                   </ListItemButton>
                   <Divider orientation="vertical" flexItem />
                   <ListItemButton>
                      <ListItemIcon
                         sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary,
                           }}
                      >
                        <FavoriteIcon />
                      </ListItemIcon>
                   </ListItemButton>
                   <Divider orientation="vertical" flexItem />
                   <ListItemButton>
                      <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary,
                           }}
                      >
                        <PersonIcon />
                      </ListItemIcon>
                   </ListItemButton>
                   <Divider orientation="vertical" flexItem />
          </MyList>
        </Component>
    )
}

export default Actions