import Notification from "../../Notification.tsx";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import {INotification} from "../../../specs/interfaces.tsx";
import Register from "./Register.tsx";
import Login from "./Login.tsx";
import {popup} from "./Anims.ts";
import {v4 as uuid} from "uuid";
import {useSelector} from "react-redux";
import {IRootStateLogin} from "../../../redux/actionTypes.ts";

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
            <motion.div className="login-container" variants={popup}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{duration: 0.5, type:"spring"}}
            >
                <AnimatePresence mode="wait">
                    {login
                        ? <Login key={uuid()} setShowNotification={setShowNotification} />
                        : <Register key={uuid()} setShowNotification={setShowNotification} />
                    }
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default Layout;