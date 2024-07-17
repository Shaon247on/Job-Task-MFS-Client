import { Outlet } from "react-router-dom";
import SideNav from "../Shared/SideNav/SideNav";
import Footer from "../Shared/Footer/Footer";

const Dashboard = () => {
    return (
        <div className="">
            <div className="">
                <SideNav></SideNav>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Dashboard;