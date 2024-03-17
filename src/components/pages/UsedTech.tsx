import {motion} from "framer-motion";
import '../components-styles/aboutUs.css'
import '../components-styles/usedTech.css'
import {Typography, useMediaQuery, useTheme} from "@mui/material";
import AnimatedDiv from "../AnimatedDiv.tsx";

const UsedTech = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const horizontal = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    const horizontalInvert = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    };

    const Front = ["ReactTS", "React-Form-Hook", "Framer-motion", "Sass", "Redux/Toolkit", "Axios", "React-icons", "UUID"];
    const Back = ["Spring Boot", "Hibernate", "Spring Data JPA", "Spring Security", "Spring WebSocket", "MongoDB"];

    return (
        <div className="about-main-container">
            <div className="sub-container">
                <AnimatedDiv className="leftside-container-about" variant={horizontal} transition={{duration: 1.5, delay: 0.5, type: "spring"}}>
                    <Typography sx={{
                        fontSize: isSmallScreen ? "2rem" : "4rem",
                        fontWeight: "bold"
                    }} className="about-name">
                        Back-end
                    </Typography>
                    <p className="tech-text">
                        <motion.ul
                            exit={{opacity: 0}}
                            transition={{duration: 1}}
                        >
                            {Back.map((el, i) => (
                                <motion.li className="tech-item"
                                           initial={{y: 100, opacity: 0}}
                                           animate={{y: 0, opacity: 1}}
                                           transition={{duration: 0.7, delay: 1 + i / 10, type: "spring"}}
                                           key={i}
                                >
                                    {el}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </p>
                </AnimatedDiv>
                <AnimatedDiv className="rightside-container-about" variant={horizontalInvert} transition={{duration: 1.5, delay: 0.5, type: "spring"}}>
                    <Typography sx={{
                        fontSize: isSmallScreen ? "2rem" : "4rem",
                        fontWeight: "bold"
                    }} className="about-name">
                        Front-end
                    </Typography>
                    <p className="tech-text">
                        <motion.ul
                            exit={{opacity: 0}}
                            transition={{duration: 1}}
                        >
                            {Front.map((el, i) => (
                                <motion.li className="tech-item"
                                           initial={{y: 100, opacity: 0}}
                                           animate={{y: 0, opacity: 1}}
                                           transition={{duration: 0.7, delay: 1 + i / 10, type: "spring"}}
                                           key={i}
                                >
                                    {el}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </p>
                </AnimatedDiv>
            </div>
        </div>
    );
};

export default UsedTech;