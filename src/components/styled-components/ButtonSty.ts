import {Button, styled} from "@mui/material";

//TODO: REDESIGN
const ButtonSty = styled(Button)(({theme}) => ({
    fontSize: '18pt',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.dark,
}))

export default ButtonSty;