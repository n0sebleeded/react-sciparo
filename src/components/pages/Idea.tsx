import '../components-styles/idea.css'
import {motion} from "framer-motion";

//TODO: mobile redesign adaptive
const Idea = () => {
    const text = "The idea of creating rock paper scissors as a card game didn't come out of nowhere. This idea was seen in the anime \"Kaiji\". It contains a wide variety of games, both gambling and intellectual, and we took one of them as a basis, simplifying it to a certain level🤓"
        .split(" ");

    const horizontal = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    return (
        <div className="main-container">
            <div className="sub-idea-container">
                <div className="rightside-container">
                    <div className="idea-img-container">
                        <motion.img className="kaiji-img" variants={horizontal}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{duration: 1, delay: 0.3}}
                                    src="../../src/assets/kaiji.jpg" alt="kaiji"
                        />
                    </div>
                </div>
                <div className="leftside-container">
                    <motion.div
                        exit={{opacity: 0}}
                        transition={{duration: 1}}
                    >
                        <p className="idea-main-text">
                            {text.map((el, i) => (
                                <motion.span
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.25, delay: i / 10}}
                                    key={i}
                                >
                                    {`${el} `}
                                </motion.span>
                            ))}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Idea;