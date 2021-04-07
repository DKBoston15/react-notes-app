// Material UI
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import { styled } from "@material-ui/core/styles";

const NotesSearchBar = styled(Autocomplete)({
    width: "100%",
    marginTop: "5em"
});
const SearchTextField = styled(TextField)({
    background: "white",
    padding: "1em",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
});
const CustomAdornment = styled(InputAdornment)({
    color: "#858585"
});
const CustomSearchIcon = styled(Search)({
    fontSize: "2.5rem"
});

const SearchBar = () => {
    return (
        <NotesSearchBar
            id="search-bar"
            freeSolo
            options={[""]}
            renderInput={(params) => (
                <SearchTextField
                    {...params}
                    placeholder="Search notes..."
                    margin="normal"
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <CustomAdornment position="start">
                                <CustomSearchIcon />
                            </CustomAdornment>
                        )
                    }}
                />
            )}
        />
    );
};

export default SearchBar;
