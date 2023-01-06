import { Box, IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/system";
import "@fontsource/montez";
import { Colors } from '../theme/index';

export const AppbarContainer = styled(Box) (() => ({
    padding: '2px 8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4px',
}))

export const AppbarHeader = styled(Typography) (({theme}) => ({
    color: Colors.secondary,
    fontFamily: 'Montez, cursive',
    fontSize: '2em',
    flexGrow: 1,
    [theme.breakpoints.only("md")]: {
        fontSize: '1.5em',
    }
}))

export const MyList = styled(List) (({type}) => ({
    display: type === "row" ? 'flex' : 'block',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 3,
}))

export const ActionIconsContainerDesktop = styled(Box) (() => ({
    flexGrow: 0,
}))

export const ActionIconsContainerMobile = styled(Box) (() => ({
    display: 'flex',
    alignItems: 'center',
    flexGrow: 3,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '60px',
    zIndex: 99,
    background: Colors.shaft,
    borderTop: `1px solid ${Colors.border}`,
}))

export const DrawerCloseButton = styled(IconButton) (() => ({
    position: 'absolute',
    top: 10,
    zIndex: 1999,
    left: 250,
}))


