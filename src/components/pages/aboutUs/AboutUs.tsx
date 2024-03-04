import { motion } from 'framer-motion';
import '../../components-styles/aboutUs.css'
import AnimatedDiv from "../../AnimatedDiv.tsx";
const AboutUs = () => {
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

    const altBackEnd:string[] = ["java.png", "spring.png", "hibernate.svg",
                                "thymeleaf.png", "postgre.svg", "redis.png",
                                "mysql.svg", "rabbitmq.png", "git.png", "gitlab.png"]

    const altFrontEnd:string[] = ["react.png", "vite.svg", "ts.png",
                                "js.png", "css.svg", "html.svg", "tailwind.png",
                                "threejs.png", "webpack.png", "git.png"]

    return (
        <div className="about-main-container">
            <div className="sub-container">
                <AnimatedDiv className="leftside-container-about" variant={horizontal} transition={{duration: 1.5, delay: 0.5, type: "spring"}}>
                    <div className="user-logo-container">
                        <motion.img className="user-logo" src="../../src/assets/logos/userlogo.png" alt="user1" whileTap={{scale: 0.9}}/>
                    </div>
                    <h1 className="about-name">
                    Vitaliy K.
                    </h1>
                    <p className="about-text">C# ASP.NET / Java Spring developer</p>
                    <div className="logo-container-v">
                        <motion.a href="https://github.com/sabexzero" whileTap={{scale: 0.8}}>
                            <img className="logo-g" src="../../../assets/logos/github.png" alt="git"/>
                        </motion.a>
                        <motion.a href="https://t.me/sa666ex" whileTap={{scale: 0.8}}>
                            <img className="logo" src="../../../assets/logos/telegram.png" alt="telegram"/>
                        </motion.a>
                    </div>
                    <div className="contact">
                        <span className="contact-span-headline">Contact mail:</span>
                        <span className="contact-span">vkuksa.tech@outlook.com</span>
                    </div>
                    <div className="contact">
                        <span className="contact-span-headline">Tech stack |</span>
                        <div className="logos-block">
                            {altBackEnd.map((imageName, index) => (
                                <motion.img
                                    key={index}
                                    className="tech-stack"
                                    src={`../../src/assets/logos/${imageName}`}
                                    alt={imageName.replace(/\.\w+$/, '')}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>
                    </div>
                </AnimatedDiv>
                <AnimatedDiv className="rightside-container-about" variant={horizontalInvert} transition={{duration: 1.5, delay: 0.5, type: "spring"}}>
                    <div className="user-logo-container">
                        <motion.div whileTap={{scale: 0.9}}>
                            <img className="user-logo-d" src="../../src/assets/logos/userlogo.png" alt="user1"/>
                        </motion.div>
                    </div>
                    <h1 className="about-name">
                    Danil A.
                    </h1>
                    <p className="about-text">React JS/TS Frontend developer</p>
                    <div className="logo-container">
                        <motion.a href="https://github.com/n0sebleeded" whileTap={{scale: 0.8}}>
                            <img className="logo-g" src="../../../assets/logos/github.png" alt="git"/>
                        </motion.a>
                        <motion.a href="https://t.me/tonyredgrave" whileTap={{scale: 0.8}}>
                            <img className="logo" src="../../../assets/logos/telegram.png" alt="telegram"/>
                        </motion.a>
                    </div>
                    <div className="contact">
                        <span className="contact-span-headline">Contact mail:</span>
                        <span className="contact-span">devDanilAkhunzianov@outlook.com</span>
                    </div>
                    <div className="contact">
                        <span className="contact-span-headline">Tech stack |</span>
                        <div className="logos-block">
                            {altFrontEnd.map((imageName, index) => (
                                <motion.img
                                    key={index}
                                    className="tech-stack"
                                    src={`../../src/assets/logos/${imageName}`}
                                    alt={imageName.replace(/\.\w+$/, '')}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>
                    </div>
                </AnimatedDiv>
            </div>
        </div>
    )
}

export default AboutUs;