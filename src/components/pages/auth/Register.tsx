import React, {} from 'react';
import '../../components-styles/loginRegister.css'
import '../../components-styles/btn.css'
import {INotificationProp} from "../../../specs/interfaces.tsx";
import GifContainer from "./GifContainer.tsx";
import Form from "./Form.tsx";
// ... (imports and styles)

const Register:React.FC<INotificationProp> = ({setShowNotification}) => {
    return (
        <div className="gif-and-login-box">
            <GifContainer />
            <Form setShowNotification={setShowNotification} />
        </div>
    );
};

export default Register;