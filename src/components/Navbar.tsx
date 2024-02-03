import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    const vertical = {
        initial: { y: -100 },
        animate: { y: 0 },
        exit: { y: 100 } ,
    };
    return (
        <motion.div className="navbar" variants={vertical}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration: 1.5, type: "spring", delay: 1}}
        >
            <div className="navbar-item-set">
                <Link to="/">
                    <div className="logo-img-container">
                        <img className="logo-img" src="../../src/assets/card_rock.svg" alt="rock"/>
                        <img className="logo-img" src="../../src/assets/card_paper.svg" alt="paper"/>
                        <img className="logo-img" src="../../src/assets/card_scissor.svg" alt="scissor"/>
                    </div>
                </Link>
            </div>
            <div className="navbar-item-set">
                <a className="navbar-item" href="#">Used technologies</a>
                <a className="navbar-item" href="#">What's idea?&#129300;</a>
            </div>
            <div className="navbar-item-set">
                <a className="navbar-item" href="#">About us</a>
                <Link to="/register" className="navbar-item">Login/register</Link>
            </div>
        </motion.div>
    );
};

export default Navbar;