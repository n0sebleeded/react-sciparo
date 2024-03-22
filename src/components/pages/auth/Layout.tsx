import Notification from "../../Notification.tsx";
import {AnimatePresence} from "framer-motion";
import {useState} from "react";
import {INotification} from "../../../specs/interfaces.tsx";
import Register from "./Register.tsx";
import Login from "./Login.tsx";
import {popup} from "./Anims.ts";
import {v4 as uuid} from "uuid";
import {useSelector} from "react-redux";
import {IRootStateLogin} from "../../../redux/actionTypes.ts";
import AnimatedDiv from "../../AnimatedDiv.tsx";

const Layout = () => {
    const [showNotification, setShowNotification] = useState<INotification>({
        state: false,
        success: false
    });
    const login = useSelector((state:IRootStateLogin) => state.LogIn.login);
    //FIXME: rotate hand-emoji
    //FIXME: rerender on button submit
    return (
        <>
            {showNotification.state &&
                <Notification success={showNotification.success} />
            }
            <AnimatedDiv className="login-container" variant={popup} transition={{duration: 0.5, type:"spring"}}>
                <AnimatePresence mode="wait">
                    {login
                        ? <Login key={uuid()} setShowNotification={setShowNotification} />
                        : <Register key={uuid()} setShowNotification={setShowNotification} />
                    }
                </AnimatePresence>
            </AnimatedDiv>
        </>
    );
};

export default Layout;