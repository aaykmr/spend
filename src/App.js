import "./App.css";
import { lightTheme, darkTheme } from "./utils/themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { useState, createContext } from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/SignUp";

export const Theme = createContext();
function App() {
  const [mode, setMode] = useState(lightTheme);
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <Theme.Provider value={mode}>
        <div className="container">
          <Login />
          <Signup />
        </div>
      </Theme.Provider>
    </ThemeProvider>
  );
}

export default App;
