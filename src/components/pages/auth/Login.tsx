import React from 'react';
import '../../components-styles/login-register.css'
import '../../components-styles/btn.css'
import {motion} from 'framer-motion';
import {popup, rotate} from "./Anims.ts";
import GifContainer from "./GifContainer.tsx";

// ... (imports and styles)

const Login = ({ setClicked, isClicked }: {setClicked: React.Dispatch<React.SetStateAction<boolean>>, isClicked:boolean}) => {
    //TODO: FIX ANIM
    return (
        <motion.div className="gif-and-login-box">
            <form className="login-box">
                <div className="form">
                    <div className="scale-changer">
                        <div className="welcome">
                            <motion.p className="phrase-emoji" variants={popup}
                                      initial="initial"
                                      animate="animate"
                                      exit={{opacity: 0}}
                            >
                                Welcome back,<br />
                                <span className="highlighted-text">user</span>!
                                <motion.span className="emoji-hand" variants={rotate}
                                             initial="initial"
                                             animate="animate"
                                >
                                    &#128075;
                                </motion.span>
                            </motion.p>
                        </div>
                        <div className="login-field">
                            <p>Username</p>
                            <input className="inp-format" type="text" id="username-login"/>
                        </div>
                        <div className="password-field">
                            <p>Password</p>
                            <input className="inp-format" type="text" id="passwordText-login"/>
                        </div>
                    </div>
                    <div className="button-field">
                        <button type="submit" className="btn btn-white btn-animate">Login</button>
                    </div>
                </div>
            </form>
            <GifContainer login={true} setClicked={setClicked} isClicked={isClicked} />
        </motion.div>
    );
};

export default Login;