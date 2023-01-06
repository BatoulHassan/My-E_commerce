import React from "react";
import { ThemeProvider } from "@mui/system";
import { Container } from "@mui/material";
import theme from './styles/theme/index';
import { UIProvider } from "./context/ui";
import  Routers from './routers/index';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container 
           maxWidth='xl'
           sx={{
           background:'#fff',
           position: 'relative',
           }}>
        <UIProvider>
          <Routers />
        </UIProvider>    
      </Container>
    </ThemeProvider>
  );
}

export default App;