import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
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
    min-height: 17rem;
    min-width: 20rem;
    width: 80%;
}
input{
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
    background: transparent;
    outline: none;
    width: 100%;
    color: ${({ theme }) => theme.text};
}
.navbar{
  border-radius: 0  0 10px 10px;
}
.toggle{
  position: fixed;
  background: ${({ theme }) => theme.text};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  right: 10px;
  bottom: 10px;
  font-size: 22px;
  color: ${({ theme }) => theme.body};
}
.toggle:hover{
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
}

.toggle:focus{
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  outline: none;
}
.tlist{
  width: 45%;
}
.add{
  width:75%;
}
@media only screen and (max-width: 766px) {
  .tlist{
    width: 100%;
  }
  .add{
    width:100%;
  }
  .column{
    flex-direction: column;
  }
}
@media only screen and (max-width: 500px) {
  .navigation{
    flex-direction: column;
  }
}  
`;
