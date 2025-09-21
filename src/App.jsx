import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ecommerce from "./components/ecommerce/Ecommerce";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Orders from "./components/order/Orders";
import Layout from "./components/layout/Layout";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Ecommerce /> },
        { path: "orders", element: <Orders /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);

  return (
    <div className={theme ? "dark" : ""}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
