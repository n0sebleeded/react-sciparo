import {Container, styled} from "@mui/material";

const NavbarContainer = styled(Container)(() => ({
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-around',

    '@media (min-width: 800px)': {
        justifyContent: 'space-around',
    },
    '@media (max-width: 800px)': {
        padding: '0',
        justifyContent: 'center'
    },
    '@media (max-width: 730px)': {
        display: "none"
    },
}))

export default NavbarContainer;