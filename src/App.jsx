import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Rout from "./components/Rout.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
      </BrowserRouter>
    </>
  );
}

export default App;
