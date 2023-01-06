import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar/index';
import Actions from './actions';
import { useUIContext } from '../../context/ui';

function AppbarDesktop({matches}) {

  const { setShowSearchBox } = useUIContext();

   return(
       <AppbarContainer >
          <AppbarHeader>My Bags</AppbarHeader>
          <MyList type='row'>
                 <ListItemButton>
                     <ListItemText primary="Home" />
                  </ListItemButton>
                  <ListItemButton>
                     <ListItemText primary="Categories" />
                  </ListItemButton>
                  <ListItemButton>
                     <ListItemText primary="Products" />
                  </ListItemButton>
                  <ListItemButton>
                     <ListItemText primary="Contact us" />
                  </ListItemButton>
                  <ListItemButton>
                     <ListItemIcon onClick={() => setShowSearchBox(true)}>
                       <SearchIcon />
                     </ListItemIcon>
                  </ListItemButton>
          </MyList>
          <Actions matches={matches} />
       </AppbarContainer>
   )
}

export default AppbarDesktop