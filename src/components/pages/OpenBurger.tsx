import React from 'react';
import '../components-styles/openBurger.css';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setBurger} from "../../redux/reducers/burgerSlice.ts";

const OpenBurger:React.FC = () => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(setBurger({isOpen: false}));
    }

    return (
        <>
            <ul className="burger-open-items-ul ">
                <li className="burger-open-items">
                    <Link to="/" onClick={onClick}>HOME</Link>
                </li>
                <li className="burger-open-items">
                    <Link to="/tech" onClick={onClick}>USED TECHNOLOGIES</Link>
                </li>
                <li className="burger-open-items">
                    <Link to="/idea" onClick={onClick}>WHAT'S IDEA?</Link>
                </li>
                <li className="burger-open-items">
                    <Link to="/about" onClick={onClick}>ABOUT US</Link>
                </li>
                <li className="burger-open-items">
                    <Link to="/register" onClick={onClick}>REGISTER</Link>
                </li>
            </ul>
        </>
    );
};

export default OpenBurger;