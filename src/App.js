import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from './scenes/global/TopBar';
import SideBar from './scenes/global/SideBar'
import { Route, Routes } from "react-router-dom";
import DashBoard from "./scenes/dashboard/Dashboard";


function App() {

  const [theme, colorMode] = useMode();

  return (

    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className = "content">
            <TopBar />
            <Routes>
              <Route path ="/" element = {<DashBoard />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
