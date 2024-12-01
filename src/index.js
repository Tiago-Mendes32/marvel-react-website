import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Character from "./routes/Characters";
import Comics from "./routes/Comics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // A aplicação principal
    children: [
      {
        path: "/",
        element: <Character />, // Rota para o componente de personagens
      },
      {
        path: "/comics",
        element: <Comics />, // Adicione o conteúdo da página de comics
      },
      {
        path: "/stories",
        element: <div>Stories Page</div>, // Adicione o conteúdo da página de stories
      },
      {
        path: "/events",
        element: <div>Events Page</div>, // Adicione o conteúdo da página de events
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
