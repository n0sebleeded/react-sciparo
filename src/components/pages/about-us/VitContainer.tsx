import React from 'react';
import {motion} from "framer-motion";
import LogoBox from "./LogoBox.tsx";
import SocialMedia from "./SocialMedia.tsx";
import TechStackContainer from "../../styled-components/TechStackContainer.ts";

const VitContainer:React.FC = () => {

    const altBackEnd:string[] = ["java.png", "spring.png", "hibernate.svg",
        "thymeleaf.png", "postgre.svg", "redis.png",
        "mysql.svg", "rabbitmq.png", "git.png", "gitlab.png"]

    return (
        <>
            <div className="user-logo-container">
                <motion.img className="user-logo" src="../../src/assets/logos/userlogo.png" alt="user1"
                            whileTap={{scale: 0.9}}/>
            </div>
            <h1 className="about-name">
                Vitaliy K.
            </h1>
            <p className="about-text">C# ASP.NET / Java Spring developer</p>
            <SocialMedia github="https://github.com/sabexzero" telegram="https://t.me/sa666ex"/>
            <TechStackContainer>
                <div className="contact-vert">
                    <span className="contact-span-headline">Contact mail:</span>
                    <span className="contact-span">vkuksa.tech@outlook.com</span>
                </div>
                <div className="contact">
                    <span className="contact-span-headline">Tech stack</span>
                    <LogoBox IconsArray={altBackEnd}/>
                </div>
            </TechStackContainer>
        </>
    );
};

export default VitContainer;