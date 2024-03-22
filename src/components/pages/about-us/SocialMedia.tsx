import React from 'react';
import {motion} from "framer-motion";

interface ISocialMediaChildren {
    github: string,
    telegram: string,
}

const SocialMedia:React.FC<ISocialMediaChildren> = ({github, telegram}) => {
    return (
        <div className="logo-container">
            <motion.a href={github} whileTap={{scale: 0.8}}>
                <img className="logo-g" src="../../src/assets/logos/github.png" alt="git"/>
            </motion.a>
            <motion.a href={telegram} whileTap={{scale: 0.8}}>
                <img className="logo" src="../../src/assets/logos/telegram.png" alt="telegram"/>
            </motion.a>
        </div>
    );
};

export default SocialMedia;