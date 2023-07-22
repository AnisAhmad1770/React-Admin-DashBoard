import Home from "./pages/home/home"
import Products from "./pages/Products/Products"
import Users from "./pages/users/Users"
import Errorpage from "./pages/ErrorPage/Errorpage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function App () {
  const router = createBrowserRouter([
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
  ]);
  return (
    <RouterProvider router={router} />
  );
} 

export default App
