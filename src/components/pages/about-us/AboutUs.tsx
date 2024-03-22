import '../../components-styles/aboutUs.css'
import AnimatedDiv from "../../AnimatedDiv.tsx";
import VitContainer from "./VitContainer.tsx";
import DanContainer from "./DanContainer.tsx";
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
            <div className="sub-container-about-us">
                <AnimatedDiv className="leftside-container-about" variant={horizontal} transition={{duration: 1.5, delay: 0.5, type: "spring"}}>
                    <VitContainer/>
                </AnimatedDiv>
                <AnimatedDiv className="rightside-container-about" variant={horizontalInvert} transition={{duration: 1.5, delay: 0.5, type: "spring"}}>
                    <DanContainer/>
                </AnimatedDiv>
            </div>
        </div>
    )
}

export default AboutUs;