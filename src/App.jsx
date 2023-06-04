import { lazy } from "react";
import Navigation from "./components/Navigation";
import React from "react";
import { BrowserRouter } from "react-router-dom";
// const Navigation = lazy(() => import("@/components/Navigation"));

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <p className="text-3xl font-bold underline bg-red-200 p-10">
          Hello world!
        </p>
        <Navigation />
      </BrowserRouter>
    </React.StrictMode>
  );
};
export default App;
