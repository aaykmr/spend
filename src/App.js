import "./App.css";
import { lightTheme, darkTheme } from "./utils/themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { useState, createContext } from "react";
import AuthCheck from "./AuthCheck";
import { UserContext } from "./context";
import Home from "./components/Home";
import axios from "axios";
import users from "./users.json";
function App() {
  console.log(users);
  const [mode, setMode] = useState(darkTheme);
  const [userData, setUserData] = useState(users[0]);
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <div className="container">
        <UserContext.Provider value={userData}>
          <AuthCheck>
            <Home name={userData.name} />
          </AuthCheck>
        </UserContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
