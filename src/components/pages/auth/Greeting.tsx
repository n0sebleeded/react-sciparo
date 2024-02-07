import {popup, rotate} from "./Anims.ts";
import {motion} from "framer-motion";

const Greeting = ({login}:{login:boolean}) => {
    return (
        <>
            <motion.p className="phrase-emoji" variants={popup}
                      initial="initial"
                      animate="animate"
                      exit={{opacity: 0}}
            >
                {login
                    ?   <>
                            Welcome back,<br/>
                            <span className="highlighted-text">user</span>!
                        </>
                    :   <>
                            Let us know&nbsp;<span className="highlighted-text">you</span>!
                        </>
                }
                <motion.span className="emoji-hand" variants={rotate}
                             initial="initial"
                             animate="animate"
                >
                    &#128075;
                </motion.span>
            </motion.p>
        </>
    );
};

export default Greeting;