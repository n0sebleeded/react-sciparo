import React from 'react';
import AnimatedDiv from "../../AnimatedDiv.tsx";

const LeftSideContainer:React.FC = () => {

    const vertical = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 },
    };

    return (
        <div className="leftside-container">
            <h1 className="main-text">
                <AnimatedDiv variant={vertical} transition={{duration: 1}}>
                    <span className="rock">ROCK-</span><br/>
                </AnimatedDiv>
                <AnimatedDiv variant={vertical} transition={{duration: 1, delay: 0.5}}>
                    <span className="paper">PAPER-</span><br/>
                </AnimatedDiv>
                <AnimatedDiv variant={vertical} transition={{duration: 1, delay: 1}}>
                    <span className="scissor">SCISSOR</span><br/>
                </AnimatedDiv>
            </h1>
        </div>
    );
};

export default LeftSideContainer;