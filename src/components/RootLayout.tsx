import { Outlet } from "react-router-dom";
import '../components/componentsStyles/rootLayout.css';

const RootLayout = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-item-set">
                    <div className="logo-img-container">
                        <img className="logo-img" src="../../src/assets/card_rock.svg" alt="rock"/>
                        <img className="logo-img" src="../../src/assets/card_paper.svg" alt="paper"/>
                        <img className="logo-img" src="../../src/assets/card_scissor.svg" alt="scissor"/>
                    </div>
                </div>
                <div className="navbar-item-set">
                    <a className="navbar-item" href="#">Used technologies</a>
                    <a className="navbar-item" href="#">What's idea?</a>
                </div>
                <div className="navbar-item-set">
                    <a className="navbar-item" href="#">About us</a>
                    <a className="navbar-item" href="#">Login/register</a>
                </div>
            </div>
            <div className="outlet-container">
                <Outlet/>
            </div>
        </>
    );
};

export default RootLayout;