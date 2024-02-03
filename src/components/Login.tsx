import '../../src/components/componentsStyles/login.css'
import '../../src/components/componentsStyles/btn.css'
import {useForm} from "react-hook-form";
import {IFormData} from "../specs/interfaces.tsx";
import { motion } from 'framer-motion';
// ... (imports and styles)

const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<IFormData>();
    const popup = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    }

    const rotate = {
        initial: { opacity: 1, rotate: 45 },
        animate: { opacity: 1, rotate: 0, transition: {duration: 0.5, delay: 1, type: "spring"} },
    }
    return (
        <motion.div className="login-container" variants={popup}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration: 1}}
        >
            <div className="login-box">
                <div className="welcome">
                    <h1 className="phrase-emoji">
                        Welcome!
                        <motion.div className="emoji-hand" variants={rotate}
                                     initial="initial"
                                     animate="animate"
                        >
                            <span>&#128075;</span>
                        </motion.div>
                    </h1>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit((data) => console.log(data))}>
                        <div className="login-field">
                            <p>Enter your login: </p>
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
                                    value: /^[a-z0-9_-]{4,15}$/,
                                    message: "Only english letters or digits"
                                }
                            })}/>
                        </div>
                        {
                            errors.username?.message &&
                            <p className="error-box">{errors.username?.message}</p>
                        }
                        <div className="password-field">
                            <p>Enter your password: </p>
                            <input className="inp-format" type="text" id="passw" {...register("password", {
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
                            errors.password?.message &&
                            <p className="error-box">{errors.password?.message}</p>
                        }
                        <div className="email-field">
                            <p>Enter your email: </p>
                            <input className="inp-format-rev" {...register("email", {
                                required: "This field is required",
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message: "Incorrect value"
                                }
                            })} type="text" id="emai"/>
                        </div>
                        {
                            errors.email?.message &&
                            <p className="error-box">{errors.email?.message}</p>
                        }
                        <div className="button-field">
                            <button type="submit" className="btn btn-white btn-animate">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Login;
