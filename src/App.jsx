import "./App.css";
import styled from "styled-components";
import { MyRouter } from "./components/router/MyRouter";

function App() {
  return (
    <>
      <MyRouter />
      <SFooter>
        <p>amondealwis@gmail.com</p>
      </SFooter>
    </>
  );
}

export default App;

const SFooter = styled.div`
  width: 100%;
  padding-top: 10px;
  margin-bottom: 0;
  padding-bottom: 50px;
  margin-top: 10px;
  background-color: #b2b0b0;
`;
