import '../../components-styles/mainPage.css';
import ContainerSty from "../../styled-components/ContainerSty.ts";
import LeftSideContainer from "./LeftSideContainer.tsx";
import RightSideContainer from "./RightSideContainer.tsx";

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