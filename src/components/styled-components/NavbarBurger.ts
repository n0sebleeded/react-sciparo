import {Container, styled} from "@mui/material";

const NavbarBurger = styled(Container)(() => ({
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: "2rem",
    zIndex: "110",

    '@media (min-width: 730px)': {
        display: "none",
    },
}))

export default NavbarBurger;