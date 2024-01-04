import Card from "./Card.tsx";

function CardStartGroup() {
    return (
        <>
            <Card Text={"Paper"} Amount={2} />
            <Card Text={"Rock"} Amount={2} />
            <Card Text={"Scissor"} Amount={2} />
        </>
    );
}

export default CardStartGroup;