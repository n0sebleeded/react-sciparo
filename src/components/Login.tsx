import '../../src/components/componentsStyles/login.css'
const Login = () => {
    //TODO: mask adaptivity, or mask turn off on mobile
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="welcome">
                    <h1>Welcome!</h1>
                </div>
                <div className="form">
                    <form action="">
                        <div className="login-field">
                            <p>Enter your login: </p>
                            <input className="inp-format" type="text" name="" id=""/>
                        </div>
                        <div className="password-field">
                            <p>Enter your password: </p>
                            <input className="inp-format" type="text" name="" id=""/>
                        </div>
                        <div className="email-field">
                            <p>Enter your email: </p>
                            <input className="inp-format-rev" type="text" name="" id=""/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;