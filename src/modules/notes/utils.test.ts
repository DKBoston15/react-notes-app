import React from "react";
import { render, screen } from "@testing-library/react";

import { getFilteredNotes } from "./utils";

describe("test notes utils", () => {
    describe("getFilteredNotes works as intended", () => {
        test("filters notes", () => {
            const notes = [
                {
                    id: 1,
                    title: "Example Note 1",
                    category: "home",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    lastUpdated: "Jan 20, 2021"
                },
                {
                    id: 2,
                    title: "Example Note 2",
                    category: "home",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    lastUpdated: "Jan 21, 2021"
                },
                {
                    id: 3,
                    title: "Example Note 3",
                    category: "home",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    lastUpdated: "Jan 22, 2021"
                },
                {
                    id: 4,
                    title: "Example Note 4",
                    category: "home",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    lastUpdated: "Jan 23, 2021"
                },
                {
                    id: 5,
                    title: "Example Note 5",
                    category: "work",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    lastUpdated: "Jan 24, 2021"
                },
                {
                    id: 6,
                    title: "Example Note 6",
                    category: "work",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    lastUpdated: "Jan 25, 2021"
                },
                {
                    id: 7,
                    title: "Example Note 7",
                    category: "work",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    lastUpdated: "Jan 26, 2021"
                },
                {
                    id: 8,
                    title: "Example Note 8",
                    category: "work",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    lastUpdated: "Jan 27, 2021"
                },
                {
                    id: 9,
                    title: "Example Note 9",
                    category: "personal",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    lastUpdated: "Jan 28, 2021"
                },
                {
                    id: 10,
                    title: "Example Note 10",
                    category: "personal",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    lastUpdated: "Jan 29, 2021"
                },
                {
                    id: 11,
                    title: "Example Note 11",
                    category: "personal",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    lastUpdated: "Jan 30, 2021"
                },
                {
                    id: 12,
                    title: "Example Note 12",
                    category: "personal",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    lastUpdated: "Jan 31, 2021"
                }
            ];
            const personalNotes = [notes[8], notes[9], notes[10], notes[11]];

            expect(getFilteredNotes("personal", notes)).toEqual(personalNotes);
        });
    });
});
