import Notification from "../../Notification.tsx";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import {INotification} from "../../../specs/interfaces.tsx";
import Register from "./Register.tsx";
import Login from "./Login.tsx";
import {popup} from "./Anims.ts";
import {v4 as uuidv4} from "uuid";

const Layout = () => {
    const [showNotification, setShowNotification] = useState<INotification>({
        state: false,
        success: false
    });
    const [isClicked, setClicked] = useState(false);
    //FIXME: rotate hand-emoji
    return (
        <>
            {showNotification.state &&
                <Notification success={showNotification.success} />
            }
            <motion.div className="login-container" variants={popup}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{duration: 1, type:"spring"}}
            >
                <AnimatePresence mode="wait">
                    {!isClicked &&
                        <Register key={uuidv4()} setShowNotification={setShowNotification} setClicked={setClicked} isClicked={isClicked}></Register>
                    }
                    {isClicked &&
                        <Login key={uuidv4()} setClicked={setClicked} isClicked={isClicked}></Login>
                    }
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default Layout;