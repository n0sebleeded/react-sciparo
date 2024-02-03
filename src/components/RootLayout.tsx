import { Outlet } from "react-router-dom";
import '../components/componentsStyles/rootLayout.css';

const RootLayout = () => {
    return (
        <>
            <div className="outlet-container">
                <Outlet/>
            </div>
        </>
    );
};

export default RootLayout;