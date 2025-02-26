import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//using Lazy Loading
//Chunking or Code Splitting

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () =>{
    return(
      <div className="app">
        <Header />
        {/* <Body /> */}
        <Outlet />
      </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path:"/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId", //adding dynamic path id(:/id)
        element: <RestaurantMenu />
      },
      {
        path: "/grocery", //adding dynamic path id(:/id)
        element: <Suspense fallback={<h1>Slow n/w, loading data</h1>}><Grocery /></Suspense>
      },
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//initially we were passing AppLayout Component directly but now since we have router provider we will
//use that as it helps to route to specific endpoints. Here we will pass appRouter variable to provider
//as they have all the path and element details

// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter}/>)