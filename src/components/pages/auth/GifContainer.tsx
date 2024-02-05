import {leftout, rightout} from "./Anims.ts";
import {motion} from "framer-motion";
import React from "react";

const GifContainer = ({login, setClicked, isClicked} : {login: boolean, setClicked: React.Dispatch<React.SetStateAction<boolean>>, isClicked:boolean}) => {
    return (
        <motion.div className="gif-container"
                    variants={login ? leftout : rightout}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration: 0.3, ease: "circIn"}}
        >
            <video className="gif" src="../../../../src/assets/RPS.mp4" autoPlay muted loop/>
            <div className="video-text-container">
                {login &&
                    <>
                        <p className="video-text">Don't have account yet?</p>
                        <button onClick={() => {
                            setClicked(!isClicked)
                        }}
                                className="btn-sec btn-g btn-animate">Register
                        </button>
                    </>
                }
                {!login &&
                    <>
                        <p className="video-text">Already have an account?</p>
                        <button onClick={() => {
                            setClicked(!isClicked)
                        }}
                                className="btn-sec btn-g btn-animate">Log in
                        </button>
                    </>
                }
            </div>
        </motion.div>
    );
};

export default GifContainer;