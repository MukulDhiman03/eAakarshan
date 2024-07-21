import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Mens from "../components/Header/Mens";
import Womens from "../components/Header/Womens";
import Body from "../components/Body/Body";
import Cart from "../components/Cart/Cart";
import useMediaQuery from "@mui/material/useMediaQuery";
import Jwellery from "../components/Header/Jwellery";
import Electronics from "../components/Header/Electronics";
import { Provider } from "react-redux";
import store from "../Redux/Store";
import SmallHeader from "../components/Header/SmallHeader";
import Order from "../components/Order/Order";
import Error from "../components/Error/Error";
const AppLayout = () => {
  const isPhone = useMediaQuery("(max-width:600px)");
  return (
    <Provider store={store}>
      {isPhone && <SmallHeader /> ? <SmallHeader /> : <Header />}
      <Outlet />
    </Provider>
  );
};

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/jwellery",
        element: <Jwellery />,
      },
      {
        path: "/mens",
        element: <Mens />,
      },
      {
        path: "/womens",
        element: <Womens />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },
]);
