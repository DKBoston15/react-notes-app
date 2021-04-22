export type TNote = {
    id: number;
    title: string;
    description: string;
    category: string;
    lastUpdated: string;
};

export type TTab = "all" | "home" | "work" | "personal";

// I usually create utils or helpers (.ts) for these functions
export const getFilteredNotes = (tab: TTab, notes: TNote[]) =>
    tab === "all" ? notes : notes.filter((note) => note.category === tab);
