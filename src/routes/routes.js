import Dashboard from "../layout/Dashboard/Dashboard";
import AddProduct from "../pages/Dashboard/AddProduct";
import ProductList from "../pages/Dashboard/ProductList";
import ReadingHistory from "../pages/Main/ReadingHistory";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main/Main");
const { default: Home } = require("../pages/Main/Home");

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/readingHistory",
                element: <ReadingHistory />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "/dashboard",
                        element: <ProductList />,
                    },
                    {
                        path: "addProduct",
                        element: <AddProduct />
                    },
                ],
            },
        ],
    },
]);

export default routes;