import { createMuiTheme } from "@material-ui/core";

const theme = () =>
    createMuiTheme({
        overrides: {
            MuiTab: {
                root: {
                    background: "none",
                    margin: "0 .2em",
                    minWidth: "8em !important",
                    padding: "0px"
                },
                selected: {
                    backgroundColor: "red"
                }
            }
        }
    });

export default theme;
