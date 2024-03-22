import {Container, styled} from "@mui/material";

const ContainerSty = styled(Container)(() => ({
    overflowX: 'auto',
    display: 'flex',
    justifyContent: 'center',

    '@media (min-width: 1650px)': {
        minWidth: "1650px"
    },
}))

export default ContainerSty;