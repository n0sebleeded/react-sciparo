import { motion } from 'framer-motion';
import '../../src/components/componentsStyles/aboutUs.css'

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


    return (
        <div className="about-main-container">
            <div className="sub-container">
                <motion.div className="leftside-container-about" variants={horizontal}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{duration: 1.5, delay: 0.5, type: "spring"}}
                >
                    <div className="user-logo-container">
                        <motion.img className="user-logo" src="../../src/assets/logos/userlogo.png" alt="user1" whileTap={{scale: 0.9}}/>
                    </div>
                    <h1 className="about-name">
                    Vitaliy K.
                    </h1>
                    <p className="about-text">C# ASP.NET / Java Spring developer</p>
                    <div className="logo-container-v">
                        <motion.a href="https://github.com/sabexzero" whileTap={{scale: 0.8}}>
                            <img className="logo-g" src="../../src/assets/logos/github.png" alt="git"/>
                        </motion.a>
                        <motion.a href="https://t.me/sa666ex" whileTap={{scale: 0.8}}>
                            <img className="logo" src="../../src/assets/logos/telegram.png" alt="telegram"/>
                        </motion.a>
                    </div>
                    <div className="contact">
                        <span className="contact-span-headline">Contact mail:</span>
                        <span className="contact-span">vkuksa.tech@outlook.com</span>
                    </div>
                    <div className="contact">
                        <span className="contact-span-headline">Tech stack |</span>
                        <div className="logos-block">
                            <motion.img className="tech-stack" src="../../src/assets/logos/java.png" alt="java" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/spring.png" alt="spring" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/hibernate.svg" alt="hibernate" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/thymeleaf.png" alt="thymeleaf" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/postgre.svg" alt="postgre" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/redis.png" alt="redis" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/mysql.svg" alt="mysql" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/rabbitmq.png" alt="rabbitmq" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/git.png" alt="gitl" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/gitlab.png" alt="gitlab" whileTap={{scale: 0.9}}/>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="rightside-container-about" variants={horizontalInvert}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{duration: 1.5, delay: 0.5, type: "spring"}}
                >
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
                            <img className="logo-g" src="../../src/assets/logos/github.png" alt="git"/>
                        </motion.a>
                        <motion.a href="https://t.me/tonyredgrave" whileTap={{scale: 0.8}}>
                            <img className="logo" src="../../src/assets/logos/telegram.png" alt="telegram"/>
                        </motion.a>
                    </div>
                    <div className="contact">
                        <span className="contact-span-headline">Contact mail:</span>
                        <span className="contact-span">devDanilAkhunzianov@outlook.com</span>
                    </div>
                    <div className="contact">
                        <span className="contact-span-headline">Tech stack |</span>
                        <div className="logos-block">
                            <motion.img className="tech-stack" src="../../src/assets/logos/react.png" alt="react" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/vite.svg" alt="vite" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/ts.png" alt="ts" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/js.png" alt="js" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/css.svg" alt="css" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/html.svg" alt="html" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/tailwind.png" alt="tailwind" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/threejs.png" alt="threejs" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/webpack.png" alt="webpack" whileTap={{scale: 0.9}}/>
                            <motion.img className="tech-stack" src="../../src/assets/logos/git.png" alt="gitl" whileTap={{scale: 0.9}}/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutUs;