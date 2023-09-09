import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </>
  );
}

export default App;
