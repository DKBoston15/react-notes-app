// Material UI
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Fuse from "fuse.js";
import { TNote, INotesCommonProps } from "../../types";

const useStyles = makeStyles({
    searchTextField: {
        width: "100%",
        marginTop: "5em",
        background: "white",
        padding: "1em",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    },
    customAdornment: { color: "#858585" },
    customSearchIcon: { fontSize: "2.5rem" }
});
interface ISearchBarProps extends INotesCommonProps {
    setSearchedNotes: (notes: TNote[]) => void;
    searchedNotes: TNote[];
}

export const SearchBar = ({
    notes,
    setNotes,
    searchedNotes,
    setSearchedNotes
}: ISearchBarProps) => {
    const { searchTextField, customAdornment, customSearchIcon } = useStyles();

    const options = {
        threshold: 0.3,
        keys: ["title", "description"]
    };
    const fuse = new Fuse(notes, options);

    const [searchValue, setSearchValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        let searchedNotesArray = fuse.search(searchValue);
        let newSearchedNotesArray = [];
        for (let note = 0; note < searchedNotesArray.length; note++) {
            newSearchedNotesArray.push(searchedNotesArray[note].item);
        }
        if (newSearchedNotesArray.length === 0) {
            setSearchedNotes(notes);
        }
        if (newSearchedNotesArray.length !== 0) {
            setSearchedNotes(newSearchedNotesArray);
        }
    };

    return (
        <TextField
            className={searchTextField}
            placeholder="Search notes..."
            margin="normal"
            onChange={handleChange}
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
    );
};
