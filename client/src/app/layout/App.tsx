import Catalog from "../../features/Catalog";
import { Container, CssBaseline, createTheme } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";


function App() {
  const [darkMode,setDarkMode] = useState(false);
  const paletteType=darkMode ? 'dark':'light';
  const theme = createTheme({
    palette:{
      mode: paletteType,
      background:{
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })
  function toggleDarkMode(){
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Container>
        <Catalog/>
      </Container>
    </ThemeProvider>
  )
}

export default App