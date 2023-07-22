import Home from "./pages/home/home"
import Products from "./pages/Products/Products"
import Users from "./pages/users/Users"
import Errorpage from "./pages/ErrorPage/Errorpage";
import {createBrowserRouter,RouterProvider,Route,Outlet,} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import { Children } from "react";
import Login from "./components/login/Login";


function App () {
  const Layout =() =>{
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menu-container">
            <Menu/>
          </div>
          <div className="content-container">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element:  <Home/>,
          
        },
        {
          path: "users",
          element: <Users/>,
        },
        {
          path: "products",
          element: <Products/>,
        },
        {
          path: "*",
          element: <Errorpage/>,
        },
      ]
    },
    {
      path:"login",
      element: <Login/>
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
} 

export default App
