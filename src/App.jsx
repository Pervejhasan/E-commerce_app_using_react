import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import Rout from "./components/Rout.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
