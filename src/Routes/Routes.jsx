import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";
import Register from "../Pages/Login/Register";
import NotFound from "../Pages/NotFound/NotFound";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";
import PrivateRoutes from "./PrivateRoutes";

import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to={"/home"}></Navigate>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/chef/:id",
                element: (
                    <PrivateRoutes>
                        <ChefDetails></ChefDetails>
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://foodie-frenzy-server-axuvo27-gmailcom.vercel.app/chef/${params.id}`
                    ),
            },
            {
                path: "/recipe/:id",
                element: (
                    <PrivateRoutes>
                        <RecipeDetails></RecipeDetails>
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://foodie-frenzy-server-axuvo27-gmailcom.vercel.app/recipe/${params.id}`
                    ),
            },
            {
                path: "/blog",
                element: <Blogs></Blogs>,
            },

            {
                path: "/*",
                element: <NotFound></NotFound>,
            },
        ],
    },
]);

export default router;
