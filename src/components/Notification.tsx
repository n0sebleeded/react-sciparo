import { motion } from 'framer-motion';
import '../../src/components/componentsStyles/notification.css'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ClearIcon from '@mui/icons-material/Clear';


const Notification = ({success}: {success: boolean}) => {
    return (
        <motion.div className={success ? "notification-container" : "notification-container-b"}
            initial={{opacity:0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity:0, scale: 0}}
            transition={{duration: 1, type: "spring"}}
        >
            <div className="notification-icon-container">
                {success &&
                    <DoneAllIcon sx={{fontSize: 40}} />
                }
                {!success &&
                    <ClearIcon sx={{fontSize: 40}}/>
                }
            </div>
            <div className="notification-text-container">
                {success &&
                    <p className="notification-text">You are successfully<br/>registered</p>
                }
                {!success &&
                    <p className="notification-text">Something went wrong try<br/>register later</p>
                }
            </div>
        </motion.div>
    );
};

export default Notification;