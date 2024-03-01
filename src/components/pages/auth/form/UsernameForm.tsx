import React from "react";
import {IForm} from "../../../../specs/interfaces.tsx";

const UsernameForm:React.FC<IForm> = ({login, setData, data, register}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (setData && data) {
            setData({
                ...data,
                username: e.target.value
            })
        }
    };

    return (
        <div className="login-field">
            <p>Username</p>
            {login
                ? <input className="inp-format" value={data?.username} onChange={handleChange} type="text" id="username-login"/>
                : <input className="inp-format" type="text" id="username" {...register ? register("username", {
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
                }) : null}/>
            }
        </div>
    );
};

export default UsernameForm;