import "./App.css";
import { lightTheme, darkTheme } from "./utils/themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { useEffect, useState } from "react";
import AuthCheck from "./AuthCheck";
import { UserContext } from "./context";
import { store } from "./redux/store/store";
import Routee from "./route/Routes";
import Nav from "./components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

function App() {
  const [mode, setMode] = useState(darkTheme);
  let users = useSelector((state) => state.users);
  const [userData, setUserData] = useState(users);
  function handleToggle(e) {
    mode === darkTheme ? setMode(lightTheme) : setMode(darkTheme);
    e.target.innerHTML = e.target.innerHTML == "☾" ? "☼" : "☾";
  }
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <Toaster data-testid="toast" />
      <div className="container-fluid p-0" id="container">
        <UserContext.Provider value={users}>
          <AuthCheck>
            <Nav />
            <Routee />
          </AuthCheck>
        </UserContext.Provider>
        <button
          className="btn btn-light toggle"
          onClick={(e) => {
            handleToggle(e);
          }}
        >
          ☼
        </button>
      </div>
    </ThemeProvider>
  );
}

export default App;
