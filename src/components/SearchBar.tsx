// Material UI
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    searchBar: { width: "100%", marginTop: "5em" },
    searchTextField: {
        background: "white",
        padding: "1em",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    },
    customAdornment: { color: "#858585" },
    customSearchIcon: { fontSize: "2.5rem" }
});

export const SearchBar = () => {
    const {
        searchBar,
        searchTextField,
        customAdornment,
        customSearchIcon
    } = useStyles();
    return (
        <Autocomplete
            className={searchBar}
            id="search-bar"
            freeSolo
            options={[""]}
            renderInput={(params) => (
                <TextField
                    className={searchTextField}
                    {...params}
                    placeholder="Search notes..."
                    margin="normal"
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment
                                className={customAdornment}
                                position="start"
                            >
                                <Search className={customSearchIcon} />
                            </InputAdornment>
                        )
                    }}
                />
            )}
        />
    );
};
