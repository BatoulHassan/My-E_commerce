import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";
import '@fontsource/montez';


export const PromotionsContainer = styled(Box) (({theme}) => ({
    [theme.breakpoints.up('md')]: {
        padding: '30px  0',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: Colors.secondary,
    padding: '20px 0',
}))

export const MessageText = styled(Typography) (({theme}) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '3em',
    },
    fontFamily: 'Montez, cursive',
    fontSize: '1.5em',
    color: Colors.white,
}))