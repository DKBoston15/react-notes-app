// Material UI
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { styled } from "@material-ui/core/styles";

const NotesSearchBar = styled(Autocomplete)({
    width: "50%"
});

const SearchBar = () => {
    return (
        <NotesSearchBar
            id="search-bar"
            freeSolo
            options={[""]}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search notes..."
                    margin="normal"
                    variant="outlined"
                />
            )}
        />
    );
};

export default SearchBar;
