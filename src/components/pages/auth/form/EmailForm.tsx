import React from "react";
import {IForm} from "../../../../specs/interfaces.tsx";

const EmailForm:React.FC<IForm> = ({register}) => {
    return (
        <div>
            <div className="email-field">
                <p>Email</p>
                <input className="inp-format-rev" {...register ? register("email", {
                    required: "This field is required",
                    pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: "Incorrect value"
                    }
                }) :null} type="text" id="emai"/>
            </div>
        </div>
    );
};

export default EmailForm;