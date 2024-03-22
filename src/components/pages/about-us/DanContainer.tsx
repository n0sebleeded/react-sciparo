import React from 'react';
import {motion} from "framer-motion";
import LogoBox from "./LogoBox.tsx";
import SocialMedia from "./SocialMedia.tsx";
import TechStackContainer from "../../styled-components/TechStackContainer.ts";

const DanContainer:React.FC = () => {

    const altFrontEnd:string[] = ["react.png", "vite.svg", "ts.png",
        "js.png", "css.svg", "html.svg", "tailwind.png",
        "threejs.png", "webpack.png", "git.png"]

    return (
        <>
            <div className="user-logo-container">
                <motion.div whileTap={{scale: 0.9}}>
                    <img className="user-logo-d" src="../../src/assets/logos/userlogo.png" alt="user1"/>
                </motion.div>
            </div>
            <h1 className="about-name">
                Danil A.
            </h1>
            <p className="about-text">React JS/TS Frontend developer</p>
            <SocialMedia github="https://github.com/n0sebleeded" telegram="https://t.me/tonyredgrave"/>
            <TechStackContainer>
                <div className="contact-vert">
                    <span className="contact-span-headline">Contact mail:</span>
                    <span className="contact-span">devDanilAkhunzianov@outlook.com</span>
                </div>
                <div className="contact">
                    <span className="contact-span-headline">Tech stack</span>
                    <LogoBox IconsArray={altFrontEnd}/>
                </div>
            </TechStackContainer>
        </>
    );
};

export default DanContainer;