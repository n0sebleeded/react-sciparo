import React from "react";
import {IForm} from "../../../../specs/interfaces.tsx";

const PasswordForm:React.FC<IForm> = ({login, setData, data, register}) => {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (setData) {
            setData({
                ...data,
                password: e.target.value
            })
        }
    }

    return (
        <div className="password-field">
            <p>Password</p>
            {login
                ? <input className="inp-format" type="text" onChange={handleChange} id="passwordText-login"/>
                : <input className="inp-format" type="text"
                         id="passwordText" {...register ? register("passwordText", {
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
                }) : null} />
            }
        </div>
    );
};

export default PasswordForm;