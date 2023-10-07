import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CardDetails from "../components/cardDetails/cardDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/data/:id',
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },{
                path: '/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;