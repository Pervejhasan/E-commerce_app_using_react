import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-smjddm1rysd6qy76.us.auth0.com"
    clientId="dK1JDrudNw7j0XfRG4jSRaTZM8ZggBbY"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
