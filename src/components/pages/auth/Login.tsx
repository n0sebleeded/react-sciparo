import '../../components-styles/login-register.css'
import '../../components-styles/btn.css'
import {motion} from 'framer-motion';
import GifContainer from "./GifContainer.tsx";
import Greeting from "./Greeting.tsx";
import UsernameForm from "./form/UsernameForm.tsx";
import PasswordForm from "./form/PasswordForm.tsx";

// ... (imports and styles)

const Login = () => {
    //TODO: FIX ANIM
    return (
        <motion.div className="gif-and-login-box">
            <form className="login-box">
                <div className="form">
                    <div className="scale-changer">
                        <div className="welcome">
                            <Greeting login={true} />
                        </div>
                        <UsernameForm login={true} register={null}/>
                        <PasswordForm login={true} register={null}/>
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