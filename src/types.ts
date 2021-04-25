export type TNote = {
    id: number;
    title: string;
    category: string;
    description: string;
    lastUpdated: string;
};

export interface INotesCommonProps {
    setNotes: (notes: TNote[]) => void;
    notes: TNote[];
    setSearchedNotes: (notes: TNote[]) => void;
}
