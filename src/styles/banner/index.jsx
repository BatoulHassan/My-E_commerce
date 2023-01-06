import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import { Colors } from "../theme";

export const BannerContainer = styled(Box) (({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    background: Colors.light_gray,
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
    }
}))

export const BannerImage = styled('img') (({src, theme}) => ({
   src: `url(${src})`,
   width: '400px',
   [theme.breakpoints.down('md')]: {
    width: '350px',
    height: '300px',
},
   [theme.breakpoints.down('sm')]: {
        width: '320px',
        height: '300px',
}
}))

export const BannerContent = styled(Box) (({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 420,
     padding: '20px',
     [theme.breakpoints.down('md')]: {
       padding: '10px'
},
    [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
}
}))

export const BannerTitle = styled(Typography) (({theme}) => ({
    fontSize: '72px',
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
        fontSize: '42px',
}
}))

export const BannerDescription = styled(Typography) (({theme}) => ({
    lineHeight: 1.25,
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        marginBottom: '10px',
}
}))

export const BannerButton = styled(Button) (({theme}) => ({
    padding: '20px 0',
    fontSize: '16px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        padding: '10px 5px',
        fontSize: '14px',
    }
}))