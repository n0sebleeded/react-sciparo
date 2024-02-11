import {ILobbyProps} from "../../specs/interfaces.tsx";
import React from "react";

const LobbyItem:React.FC<ILobbyProps> = ({id, bet, creatorUsername, elo, title}) => {

    return (
        <div className="lobby-item" key={id}>
            <div className="bet">
                {bet}
            </div>
            <div>{title}</div>
            <div>{creatorUsername}</div>
            <div>{elo}</div>
        </div>
    );
};

export default LobbyItem;