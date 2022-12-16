import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/contacts',
                element: <Contact />
            },
        ]
    }
]);

export default routes;