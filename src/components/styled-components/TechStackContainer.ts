import {Container, styled} from "@mui/material";

const TechStackContainer = styled(Container)(() => ({
    '@media (max-width: 650px)': {
        display: "none"
    },
}))

export default TechStackContainer;