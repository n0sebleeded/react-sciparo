import {leftout, rightout} from "./Anims.ts";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {IRootStateLogin} from "../../../redux/actionTypes.ts";
import {setLogin} from "../../../redux/reducers/loginSlice.ts";

const GifContainer = () => {
    const login = useSelector((state:IRootStateLogin) => state.LogIn.login);
    const dispatch = useDispatch();

    return (
        <motion.div className="gif-container"
                    variants={login ? rightout : leftout}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration: 0.3, ease: "circIn"}}
        >
            <video className="gif" src="../../../../src/assets/RPS.mp4" autoPlay muted loop/>
            <div className="video-text-container">
                {login
                    ?   <>
                            <p className="video-text">Don't have account yet?</p>
                            <button onClick={() => {
                                const tempLogin = !login;
                                dispatch(setLogin({tempLogin}));
                            }}
                                    className="btn-sec btn-g btn-animate">Register
                            </button>
                        </>
                    :   <>
                            <p className="video-text">Already have an account?</p>
                            <button onClick={() => {
                                const tempLogin = !login;
                                dispatch(setLogin({tempLogin}));
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