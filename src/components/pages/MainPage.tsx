import '../components-styles/mainPage.css';
import ContainerSty from "../styled-components/ContainerSty.ts";
import LeftSideContainer from "./aboutUs/LeftSideContainer.tsx";
import RightSideContainer from "./aboutUs/RightSideContainer.tsx";

const MainPage = () => {
    return (
        <ContainerSty>
            <div className="main-container">
                <div className="sub-container">
                    <LeftSideContainer />
                    <RightSideContainer />
                </div>
            </div>
        </ContainerSty>
    );
};

export default MainPage;