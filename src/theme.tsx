import { createMuiTheme } from "@material-ui/core";

const theme = () =>
    createMuiTheme({
        overrides: {
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
