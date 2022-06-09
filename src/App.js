import "./App.css";
import { lightTheme, darkTheme } from "./utils/themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { useState, createContext } from "react";
import AuthCheck from "./AuthCheck";
import { UserContext } from "./context";
import users from "./users.json";
import Routee from "./route/Routes";
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
            <Routee />
          </AuthCheck>
        </UserContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
