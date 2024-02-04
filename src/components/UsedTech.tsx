import {motion} from "framer-motion";
import '../../src/components/componentsStyles/aboutUs.css'
import '../../src/components/componentsStyles/usedTech.css'

const UsedTech = () => {
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

    const Front = ["ReactTS", "React-Form-Hook", "Framer-motion", "Sass", "Redux", "Axios"];
    const Back = ["Spring Boot", "Hibernate", "Spring Data JPA", "Spring Security", "Spring WebSocket", "MongoDB"];

    return (
        <div className="about-main-container">
            <div className="sub-container">
                <motion.div className="leftside-container-about" variants={horizontal}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{duration: 1.5, delay: 0.5, type: "spring"}}
                >
                    <h1 className="about-name">
                        Back-end
                    </h1>
                    <p className="about-text">
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
                </motion.div>
                <motion.div className="rightside-container-about" variants={horizontalInvert}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{duration: 1.5, delay: 0.5, type: "spring"}}
                >
                    <h1 className="about-name">
                        Front-end
                    </h1>
                    <p className="about-text">
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
                </motion.div>
            </div>
        </div>
    );
};

export default UsedTech;