import { Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material"
import { styled } from "@mui/system"
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/appbar";
import CloseIcon from '@mui/icons-material/Close';
import { Colors } from "../../styles/theme";

const MiddleDivider = styled((props) => (
    <Divider variant='middle' {...props} />
))``;
 

function AppDrawer() {
  const {drawerOpen, setDrawerOpen} = useUIContext()
    return(
        <>
        {
            drawerOpen && (
              <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                  <CloseIcon
                     sx= {{
                       fontSize: "2.5rem",
                       color: Colors.white,
                      }} />
              </DrawerCloseButton>
            )
          }
        <Drawer open={drawerOpen}>
           
            <List>
                <ListItemButton>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
                <MiddleDivider />
                <ListItemButton>
                    <ListItemText>Categories</ListItemText>
                </ListItemButton>
                <MiddleDivider />
                <ListItemButton>
                    <ListItemText>Products</ListItemText>
                </ListItemButton>
                <MiddleDivider />
                <ListItemButton>
                    <ListItemText>About us</ListItemText>
                </ListItemButton>
                <MiddleDivider />
                <ListItemButton>
                    <ListItemText>Contact us</ListItemText>
                </ListItemButton>
                <MiddleDivider />
            </List>
        </Drawer>
        </>
    )
}

export default AppDrawer