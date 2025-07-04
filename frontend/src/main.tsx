import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./vitrine/pages";
import Landing from "./vitrine/pages/Landing";
import Workshop from "@/vitrine/pages/Workshop.tsx";
import Media from "@/vitrine/pages/News.tsx";
import News from "@/vitrine/pages/News.tsx";
import {Contact} from "lucide-react";
import Gallery from "@/vitrine/pages/Gallery.tsx";
import Shop from "@/vitrine/pages/Shop.tsx";
import About from "@/vitrine/pages/About.tsx";



const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            { index: true, element: <Landing /> },
            { path: "about", element: <About /> },
            { path: "workshop", element: <Workshop /> },
            { path: "gallery", element: <Gallery /> },
            { path: "media", element: <Media /> },
            { path: "news", element: <News /> },
            { path: "contact", element: <Contact /> },
            { path: "shop", element: <Shop /> }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
