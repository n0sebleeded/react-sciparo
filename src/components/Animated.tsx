import React from 'react';
import { motion } from 'framer-motion';
import {IProps} from "../specs/interfaces.tsx";

const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

const AnimatedPage: React.FC<IProps> = ({ children }) => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
