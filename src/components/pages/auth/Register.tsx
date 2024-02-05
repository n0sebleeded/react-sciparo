import '../../components-styles/login.css'
import '../../components-styles/btn.css'
import {useForm} from "react-hook-form";
import {IFormData, INotification} from "../../../specs/interfaces.tsx";
import {AnimatePresence, motion} from 'framer-motion';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Notification from "../../Notification.tsx";
import {useState} from "react";
// ... (imports and styles)

const Register = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<IFormData>();
    const nav = useNavigate();
    const [showNotification, setShowNotification] = useState<INotification>({
        state: false,
        success: false
    });
    const [isClicked, setClicked] = useState(false);

    const popup = {
        initial: { opacity: 0, scale:0.4 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale:0.4 },
    }

    const rotate = {
        initial: { opacity: 1, rotate: 45 },
        animate: { opacity: 1, rotate: 0, transition: {duration: 0.5, delay: 1, type: "spring"} },
    }

    const onSubmit = (data:IFormData) => {
        axios.post(
                'http://192.168.0.103:8080/players/create',
                data,
                { headers: { 'Content-Type': 'application/json' }}
            )
            .then((response: {data: IFormData}) => {
                console.log(response.data)
                setShowNotification({
                    state: true,
                    success: true
                });
                console.log("successTest")
                setTimeout(() => {
                    nav("/");
                }, 1500);
            })
            .catch((error: {data: IFormData}) => {
                console.log(error.data)
                console.log("errorTest")
                setShowNotification({
                    state:true,
                    success:false
                });
            });
    };
    //TODO: FIX ANIM
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
                <div className="gif-and-login-box">
                    <div className="gif-container">
                        <video className="gif" src="../../../../src/assets/RPS.mp4" autoPlay muted loop/>
                        <div className="video-text-container">
                            <p className="video-text">Already have an account?</p>
                            <button onClick={() => {setClicked(!isClicked)}}
                                    className="btn-sec btn-g btn-animate">Log in</button>
                        </div>
                    </div>
                    <form className="login-box" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form">
                            <div className="scale-changer">
                                <AnimatePresence mode="wait">
                                    <div className="welcome">
                                        {!isClicked &&
                                            <motion.p className="phrase-emoji" variants={popup}
                                                      initial="initial"
                                                      animate="animate"
                                                      exit={{opacity: 0}}
                                            >
                                                Let us know&nbsp;<span className="highlighted-text">you</span>!
                                                <motion.span className="emoji-hand" variants={rotate}
                                                             initial="initial"
                                                             animate="animate"
                                                >
                                                    &#128075;
                                                </motion.span>
                                            </motion.p>
                                        }
                                    </div>
                                </AnimatePresence>
                                <div className="login-field">
                                    <p>Username</p>
                                    <input className="inp-format" type="text" id="username" {...register("username", {
                                        required: "This is a required value",
                                        minLength: {
                                            value: 4,
                                            message: "Minimum length - 4 characters"
                                        },
                                        maxLength: {
                                            value: 15,
                                            message: "Maximum length - 4 characters"
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9_-]{4,15}$/,
                                            message: "Only english letters or digits"
                                        }
                                    })}/>
                                </div>
                                {
                                    errors.username?.message &&
                                    <p className="error-box">{errors.username?.message}</p>
                                }
                                <div className="password-field">
                                    <p>Password</p>
                                    <input className="inp-format" type="text"
                                           id="passwordText" {...register("passwordText", {
                                        required: "This field is required",
                                        minLength: {
                                            value: 8,
                                            message: "Minimum length - 8 characters"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: "Maximum length - 4 characters"
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
                                            message: "Password must contain a letter and a digit",
                                        }
                                    })} />
                                </div>
                                {
                                    errors.passwordText?.message &&
                                    <p className="error-box">{errors.passwordText?.message}</p>
                                }
                                <div className="email-field">
                                    <p>Email</p>
                                    <input className="inp-format-rev" {...register("email", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                            message: "Incorrect value"
                                        }
                                    })} type="text" id="emai"/>
                                </div>
                                {
                                    errors.email?.message &&
                                    <p className="error-box">{errors.email?.message}</p>
                                }
                            </div>
                            <div className="button-field">
                                <button type="submit" className="btn btn-white btn-animate">submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </motion.div>
        </>
    );
};

export default Register;