import React from 'react';
import AnimatedDiv from "../../AnimatedDiv.tsx";
import {Link} from "react-router-dom";

const RightSideContainer:React.FC = () => {

    const horizontal = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    const fade = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    }

    return (
        <div className="rightside-container">
            <div className="main-img-container">
                <AnimatedDiv variant={horizontal} transition={{duration: 1}}>
                    <img className="main-img" src="../../../src/assets/card_rock.svg" alt="rock"/>
                </AnimatedDiv>
                <AnimatedDiv variant={horizontal} transition={{duration: 1, delay: 0.5}}>
                    <img className="main-img" src="../../../src/assets/card_paper.svg" alt="paper"/>
                </AnimatedDiv>
                <AnimatedDiv variant={horizontal} transition={{duration: 1, delay: 1}}>
                    <img className="main-img" src="../../../src/assets/card_scissor.svg" alt="scissor"/>
                </AnimatedDiv>
            </div>
            <AnimatedDiv variant={fade} transition={{duration: 2, delay: 0}}>
                <p className="sub-text"><span className="temp-1">Welcome to RPS🥳 .</span></p>
                <p className="sub-text">

                    RPS is a unique platform for playing an unusual form of the well-known game - rock paper
                    scissors.
                    In order to play with other players or your friends you need to <Link to="/register"
                                                                                          className="highlighted-text">register</Link>👀.
                </p>
            </AnimatedDiv>
        </div>
    );
};

export default RightSideContainer;