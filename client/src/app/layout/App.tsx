import { Container, CssBaseline, createTheme } from "@mui/material";
import Header from "./Header";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Outlet } from "react-router-dom";
import 'react-toastify/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useStoreContext } from "../context/StoreContext";
import agent from "../api/agent";
import { getCookie } from "../utils/utils";
import LoadingComponent from "./LoadingComponent";


function App() {
  const {setBasket} = useStoreContext();
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const buyerId=getCookie('buyerId');
    if(buyerId){
      agent.Basket.get()
      .then(basket => setBasket(basket))
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))
    }
    else{
      setLoading(false);
    }
  },[setBasket]);

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
  if(loading) return <LoadingComponent message="Initializing app..."/>;

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
      <CssBaseline />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Container>
        <Outlet/>
      </Container>
    </ThemeProvider>
  )
}

export default App
