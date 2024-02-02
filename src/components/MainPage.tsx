import './componentsStyles/mainPage.css';

const MainPage = () => {
    //TODO: will be redesign
    return (
        <div className="main-container">
            <div className="sub-container">
                <div className="leftside-container">
                    <h1 className="main-text">
                        <span className="rock">ROCK-</span><br/>
                        <span className="paper">PAPER-</span><br/>
                        <span className="scissor">SCISSOR</span>
                    </h1>
                </div>
                <div className="rightside-container">
                    <div className="main-img-container">
                        <img className="main-img" src="../../src/assets/card_rock.svg" alt="rock"/>
                        <img className="main-img" src="../../src/assets/card_paper.svg" alt="paper"/>
                        <img className="main-img" src="../../src/assets/card_scissor.svg" alt="scissor"/>
                    </div>
                    <p className="sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula libero,
                        semper sed turpis in, <span className="highlighted-text">aliquam consequat odio</span>. Ut ullamcorper mauris ex, ac tincidunt elit
                        euismod
                        a
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainPage;