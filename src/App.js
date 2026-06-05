import React, {lazy, Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Error from "./components/Error";
import Menu from "./components/Menu";
// import Grocery from "./components/Grocery";
//Chunking, codesplitting, lazy loading, dynamic bundling, on demand loading
const Grocery = lazy(()=> import("./components/Grocery"));

// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <span>❤️</span>
      <a href="" target="_blank">
        Soniya Lankalapalli
      </a>
      <span>&copy;</span>
      {year}
      <strong>
        Food <span>Express</span>
      </strong>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1 style={{"padding":"150px"}}>Loading...</h1>}><Grocery /></ Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<Menu />
      }
    ],
    errorElement: <Error />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);