import './componentsStyles/mainPage.css';
import {ICard, ICardType} from "../specs/interfaces.tsx";
import CardItem from "./CardItem.tsx";

const MainPage = () => {
    const cards: ICard[] = [
        { id: 12, Text: "Paper", Hidden: false, Type: ICardType.CARD_PAPER },
        { id: 22, Text: "Rock", Hidden: false, Type: ICardType.CARD_ROCK },
        { id: 32, Text: "Scissor", Hidden: false, Type: ICardType.CARD_SCISSOR },
    ];
    //TODO: will be redesign
    return (
        <>
            <div className="navbar">
                <a href="#">Used technologies</a>
                <a href="#">What's idea?</a>
                <a href="#">About us</a>
                <a href="#">Login/register</a>
            </div>
            <div className="main-container">
                <div className="sub-container">
                    <div className="leftside-container">
                        <h1 className="main-text">ROCK-PAPER-SCISSOR</h1>
                        <p className="sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula libero, semper sed turpis in, aliquam consequat odio. Ut ullamcorper mauris ex, ac tincidunt elit euismod a</p>
                    </div>
                    <div className="rightside-container">
                        {cards.map((card) => (
                            <CardItem id={card.id} Text={card.Text} Hidden={card.Hidden} Type={card.Type} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;