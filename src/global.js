import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  .post{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem 2rem;
    background-color: transparent;
    box-shadow: 0 0 10px 2px ${({ theme }) => theme.boxShadow};
    border-radius: 10px;
    margin: 2rem;
    min-height: 20rem;
    min-width: 20rem;
}
input{
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
    background: transparent;
    outline: none;
    width: 100%;
}


  `;
