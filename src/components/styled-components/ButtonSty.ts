import {Button, styled} from "@mui/material";

const ButtonSty = styled(Button)(({theme}) => ({
    fontSize: '18pt',
    fontWeight: 'lighter',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '12px',
    marginTop: "20px",
    padding: "10px",

    '&:hover': {
        backgroundColor: theme.palette.primary.main,
    },
}))

export default ButtonSty;