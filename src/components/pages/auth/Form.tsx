import React from 'react';
import Greeting from "./Greeting.tsx";
import UsernameForm from "./form/UsernameForm.tsx";
import PasswordForm from "./form/PasswordForm.tsx";
import EmailForm from "./form/EmailForm.tsx";
import {useForm} from "react-hook-form";
import {IFormData, INotificationProp} from "../../../specs/interfaces.tsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {IRootStateLogin} from "../../../redux/actionTypes.ts";
import axios from "axios";

const Form:React.FC<INotificationProp> = ({setShowNotification}) => {
    const SERVER_PORT = import.meta.env.VITE_REACT_APP_SERVER_PORT
    const SERVER_IP = import.meta.env.VITE_REACT_APP_SERVER_IP;

    const { register, handleSubmit, formState: { errors }} = useForm<IFormData>();
    const nav = useNavigate();
    const login = useSelector((state:IRootStateLogin) => state.LogIn.login);

    const onSubmit = (data:IFormData) => {
        console.log(data)
        axios.post(
            `${SERVER_IP}:${SERVER_PORT}/players/new`, data,
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
                console.log(error)
                setShowNotification({
                    state:true,
                    success:false
                });
            });
    };

    return (
        <form className="login-box" onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
                <div className="scale-changer">
                    <div className="welcome">
                        <Greeting login={false}/>
                    </div>
                    <UsernameForm login={false} register={register} data={null} setData={null}/>
                    {
                        errors.username?.message &&
                        <p className="error-box">{errors.username?.message}</p>
                    }
                    <PasswordForm login={false} register={register} data={null} setData={null}/>
                    {
                        errors.passwordText?.message &&
                        <p className="error-box">{errors.passwordText?.message}</p>
                    }
                    <EmailForm register={register} data={null} setData={null}/>
                    {
                        errors.email?.message && !login &&
                        <p className="error-box">{errors.email?.message}</p>
                    }
                </div>
                <div className="button-field">
                    <button type="submit" className="btn btn-white btn-animate">Register</button>
                </div>
            </div>
        </form>
    );
};

export default Form;