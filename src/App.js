import "./App.css";
import { lightTheme, darkTheme } from "./utils/themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(darkTheme);

  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
