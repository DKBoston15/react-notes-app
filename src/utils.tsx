const deleteNote = (notes: Array<any>, id: string) => {
    let newNotes = notes.filter(function (note, index, arr) {
        return note.id !== id;
    });
    return newNotes;
};

export { deleteNote };
