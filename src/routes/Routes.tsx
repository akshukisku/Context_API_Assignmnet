import { createBrowserRouter } from "react-router-dom";
import HomeWrapper from "../layout/home/HomeWrapper";
import Homepage from "../pages/Homepage";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import NotFound from "../components/NotFound";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"profile",
        element:<Profile/>
      }
    ],
  },
  {
    path:"*",
    element:<NotFound/>

  }
]);

export default Routes;
