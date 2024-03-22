import React from 'react';
import {motion} from "framer-motion";

const LogoBox:React.FC<{IconsArray: string[]}> = ({IconsArray}) => {
    return (
        <div className="logos-block">
            {IconsArray.map((imageName, index) => (
                <motion.img
                    key={index}
                    className="tech-stack"
                    src={`../../src/assets/logos/${imageName}`}
                    alt={imageName.replace(/\.\w+$/, '')}
                    whileTap={{scale: 0.9}}
                />
            ))}
        </div>
    );
};

export default LogoBox;