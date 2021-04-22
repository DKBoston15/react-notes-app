import { createMuiTheme } from "@material-ui/core";

const theme = () =>
    createMuiTheme({
        palette: {
            secondary: {
                main: "hsla(0, 0%, 100%, 0.55)",
                light: "hsla(0, 0%, 100%, 0.55)",
                dark: "hsla(0, 0%, 100%, 0.55)"
            }
        },
        overrides: {
            MuiCheckbox: {
                root: {
                    color: "hsla(0, 0%, 100%, 0.55)",
                    marginLeft: "-.5em"
                }
            },
            MuiCardContent: {
                root: {
                    padding: ".8em 1.2em",
                    textAlign: "left",
                    fontSize: ".8rem"
                }
            },
            MuiCardActions: {
                root: {
                    padding: "0.8em"
                }
            },
            MuiTabs: {
                indicator: {
                    display: "none"
                },
                scroller: {
                    paddingBottom: "1em"
                }
            },
            MuiTab: {
                root: {
                    background: "none",
                    margin: "0 .2em",
                    minWidth: "8em !important",
                    minHeight: "3em",
                    padding: ".2em",
                    "&::after": {
                        content: " ",
                        display: "block",
                        width: "15px",
                        height: "15px",
                        borderRadius: "7.5px",
                        backgroundColor: "#69b6d5"
                    },
                    "&$selected": {
                        color: "white",
                        background: "#69BCFF",
                        borderRadius: "5px"
                    }
                }
            }
        }
    });

export default theme;
