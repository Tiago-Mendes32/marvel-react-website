import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Character from "./routes/Characters";
import Comics from "./routes/Comics";
import CharacterDetails from "./routes/CharacterDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Character />,
      },
      {
        path: "/character/:id",
        element: <CharacterDetails />,
      },
      {
        path: "/comics",
        element: <Comics />,
      },
      {
        path: "/stories",
        element: <div>Stories Page</div>,
      },
      {
        path: "/events",
        element: <div>Events Page</div>,
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
