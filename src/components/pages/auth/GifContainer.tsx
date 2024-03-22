import {bottomout, leftout, rightout, topout} from "./Anims.ts";
import {useDispatch, useSelector} from "react-redux";
import {IRootStateLogin} from "../../../redux/actionTypes.ts";
import {setLogin} from "../../../redux/reducers/loginSlice.ts";
import AnimatedDiv from "../../AnimatedDiv.tsx";
import {useEffect, useState} from "react";

const GifContainer = () => {
    const login = useSelector((state:IRootStateLogin) => state.LogIn.login);
    const dispatch = useDispatch();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const varChose = () => {
        if (login) {
            if (windowWidth <= 860) return topout
            else return rightout
        } else {
            if (windowWidth <= 860) return bottomout
            else return leftout
        }
    }

    return (
        <AnimatedDiv className="gif-container" variant={varChose()} transition={{duration: 0.3, ease: "circIn"}}>
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
        </AnimatedDiv>
    );
};

export default GifContainer;