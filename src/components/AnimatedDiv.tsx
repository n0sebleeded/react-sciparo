import { motion } from 'framer-motion';
import React from 'react';
import {IAnimatedDiv} from "../specs/interfaces.tsx";

const AnimatedDiv:React.FC<IAnimatedDiv> = ({children, variant, transition, className}) => {
    return (
        <motion.div
            className={className}
            variants={variant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedDiv;