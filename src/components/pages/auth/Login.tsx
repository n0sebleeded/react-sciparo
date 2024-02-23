import React, {useState} from "react";
import '../../components-styles/login-register.css'
import '../../components-styles/btn.css'
import {motion} from 'framer-motion';
import GifContainer from "./GifContainer.tsx";
import Greeting from "./Greeting.tsx";
import UsernameForm from "./form/UsernameForm.tsx";
import PasswordForm from "./form/PasswordForm.tsx";
import {ILogData, INotificationProp} from "../../../specs/interfaces.tsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

// ... (imports and styles)

const Login:React.FC<INotificationProp> = ({setShowNotification}) => {

    const [logData, setData] = useState<ILogData>({
        username: '',
        password: ''
    });

    const nav = useNavigate();

    const onSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log(logData);
        setShowNotification({
            state: true,
            success: true
        });
        axios.post(
            'http://192.168.0.103:8080/players/...', logData,
            { headers: { 'Content-Type': 'application/json' }}
        )
            .then((response: {data: ILogData}) => {
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
            .catch((error: {data: ILogData}) => {
                console.log(error.data)
                console.log("errorTest")
                setShowNotification({
                    state:true,
                    success:false
                });
            });
    };

    return (
        <motion.div className="gif-and-login-box">
            <form className="login-box" onSubmit={onSubmit}>
                <div className="form">
                    <div className="scale-changer">
                        <div className="welcome">
                            <Greeting login={true} />
                        </div>
                        <UsernameForm login={true} setData={setData} data={logData} register={null}/>
                        <PasswordForm login={true} setData={setData} data={logData} register={null}/>
                    </div>
                    <div className="button-field">
                        <button type="submit" className="btn btn-white btn-animate">Login</button>
                    </div>
                </div>
            </form>
            <GifContainer />
        </motion.div>
    );
};

export default Login;