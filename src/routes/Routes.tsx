import { createBrowserRouter } from "react-router-dom";
import HomeWrapper from "../layout/home/HomeWrapper";
import Homepage from "../pages/Homepage";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";

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
]);

export default Routes;
