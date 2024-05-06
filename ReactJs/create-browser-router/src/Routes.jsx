import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";
import Login from "./Login";
import Signup from "./Signup";
import Contact from "./Contact";
import GithubData from "./GithubData";
import Details from "./Details";

export let routes=createBrowserRouter([
    {
        path:"/home",
        element:<Home/>,
        children:[
            {
                path:"/home/login",
                element:<Login/>
            },
            {
              path:"/home/signup",
              element:<Signup/>
            },
            {
              path:"/home/contact",
              element:<Contact/>
            },
            {
                path:"/home",
                element:<GithubData/>
            }
        ]
    },
    {
        path:"/",
        element:<Landing/>
    },
    {
        path:"/details/:id",
        element:<Details/>
    }
]);