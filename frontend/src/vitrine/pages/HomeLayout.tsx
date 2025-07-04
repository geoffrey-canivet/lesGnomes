import {Outlet} from "react-router-dom";
import { Footer, Header, Navbar } from "@/components";

const HomeLayout = () => {
    return <>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>

        </>
}
export default HomeLayout;
