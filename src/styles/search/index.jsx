import { Box, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";

export const SearchBoxContainer = styled(Box) (() => ({
    background: Colors.primary,
    opacity: 0.9,
    width: "100vw",
    height: "100vh",
    position: 'absolute',
    zIndex:99,
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const SearchField = styled(TextField) (({theme}) => ({
    ".MuiInputLabel-root": {
        color: Colors.secondary,
      },
    ".MuiInput-root": {
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
        color: Colors.secondary,
    },
   ".MuiInput-root::before": {
            borderBottom: `1px solid ${Colors.secondary}`,
  },
  padding: "0 0 0 40px" ,
   
  }
))