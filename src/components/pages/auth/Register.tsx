import React, {SetStateAction} from 'react';
import '../../components-styles/login-register.css'
import '../../components-styles/btn.css'
import {useForm} from "react-hook-form";
import {IFormData, INotification} from "../../../specs/interfaces.tsx";
import {motion} from 'framer-motion';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import GifContainer from "./GifContainer.tsx";
import Greeting from "./Greeting.tsx";
import UsernameForm from "./form/UsernameForm.tsx";
import PasswordForm from "./form/PasswordForm.tsx";
import EmailForm from "./form/EmailForm.tsx";
// ... (imports and styles)

const Register = ({ setShowNotification, setClicked, isClicked }: { setShowNotification: React.Dispatch<SetStateAction<INotification>>,
                                                        setClicked: React.Dispatch<React.SetStateAction<boolean>>,
                                                        isClicked:boolean}) => {
    const { register, handleSubmit, formState: { errors }} = useForm<IFormData>();
    const nav = useNavigate();

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
                }, 2000);
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
        <motion.div className="gif-and-login-box">
            <GifContainer login={false} setClicked={setClicked} isClicked={isClicked} />
            <form className="login-box" onSubmit={handleSubmit(onSubmit)}>
                <div className="form">
                    <div className="scale-changer">
                        <div className="welcome">
                            <Greeting login={false} />
                        </div>
                        <UsernameForm login={false} register={register} />
                        {
                            errors.username?.message &&
                            <p className="error-box">{errors.username?.message}</p>
                        }
                        <PasswordForm login={false} register={register} />
                        {
                            errors.passwordText?.message &&
                            <p className="error-box">{errors.passwordText?.message}</p>
                        }
                        <EmailForm register={register}/>
                        {
                            errors.email?.message && !isClicked &&
                            <p className="error-box">{errors.email?.message}</p>
                        }
                    </div>
                    <div className="button-field">
                        <button type="submit" className="btn btn-white btn-animate">Register</button>
                    </div>
                </div>
            </form>
        </motion.div>
    );
};

export default Register;