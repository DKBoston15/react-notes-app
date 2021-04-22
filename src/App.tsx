// React
import { useState } from "react";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

// Components
import { SearchBar } from "./modules/notes/SearchBar";
import { NoteModal } from "./modules/notes/NoteModal";
import { NotesNavigation } from "./modules/notes/NotesNavigation";

const noteList = [
    {
        id: 470,
        title: "nostrud consequat",
        category: "home",
        description:
            "Nostrud tempor mollit aute commodo do nisi amet proident in laboris enim. Ullamco dolore aliqua consectetur sit est aliqua incididunt ad elit. Adipisicing fugiat labore ipsum anim mollit duis exercitation consectetur aliquip. Incididunt anim elit dolore veniam dolor proident amet tempor.\r\n",
        lastUpdated: "2016-06-22"
    },
    {
        id: 65,
        title: "id id",
        category: "work",
        description:
            "Eiusmod fugiat deserunt non enim voluptate tempor consequat. Amet Lorem officia tempor excepteur culpa ea proident consectetur do ex ut laboris. Sit aute sunt culpa et. Velit eu ullamco ullamco sint fugiat nisi do occaecat consectetur consectetur ut officia elit. Qui pariatur esse sit cupidatat et eiusmod cupidatat adipisicing eiusmod est enim aliquip magna.\r\n",
        lastUpdated: "2015-10-27"
    },
    {
        id: 496,
        title: "Lorem laboris",
        category: "home",
        description:
            "Laborum exercitation aliquip enim eiusmod. Pariatur incididunt dolore qui aliqua Lorem incididunt aute sint aliquip pariatur exercitation ipsum ex. Ut fugiat tempor excepteur tempor aute excepteur nulla fugiat do eiusmod dolor consectetur pariatur.\r\n",
        lastUpdated: "2014-12-17"
    },
    {
        id: 486,
        title: "nisi voluptate",
        category: "personal",
        description:
            "Qui nostrud elit qui officia anim velit duis reprehenderit reprehenderit est commodo aliqua. Voluptate tempor ipsum dolore in laboris nisi velit fugiat et velit consectetur. Nisi qui sint culpa nisi ut veniam do nostrud dolore occaecat ea enim anim. Ex incididunt exercitation duis sit laborum Lorem pariatur ex.\r\n",
        lastUpdated: "2015-07-06"
    },
    {
        id: 274,
        title: "ea in",
        category: "home",
        description:
            "Anim consequat adipisicing aliqua sit ullamco adipisicing ut eu. Id sit amet sunt eiusmod eu culpa elit dolor nostrud consectetur anim culpa sunt id. Sunt mollit ut laboris id do officia ut veniam consequat dolore aute pariatur.\r\n",
        lastUpdated: "2017-10-08"
    },
    {
        id: 521,
        title: "velit ad",
        category: "home",
        description:
            "Est dolore voluptate voluptate non labore minim cupidatat magna exercitation in esse pariatur sunt anim. Nisi incididunt minim proident irure ipsum fugiat tempor sint fugiat veniam. Nulla occaecat cillum magna sit ea voluptate reprehenderit id ullamco sunt ut commodo ut. Ullamco ea ex sit est sint ut ut excepteur dolor. Ad magna veniam labore laboris ut magna fugiat. Veniam commodo incididunt consectetur consequat nulla laborum ea aliquip aliquip excepteur consectetur. Reprehenderit sint cillum laborum deserunt quis mollit laboris sint in consequat qui consectetur.\r\n",
        lastUpdated: "2017-12-12"
    },
    {
        id: 562,
        title: "dolor ea",
        category: "work",
        description:
            "Aute commodo ex Lorem mollit amet Lorem. Adipisicing et enim amet dolore tempor nisi magna ullamco nisi ex id do. Consequat est non do irure sit proident aliquip culpa reprehenderit aliquip minim labore velit. Magna aute proident laborum pariatur tempor exercitation proident ut labore aliquip veniam laboris proident. Occaecat reprehenderit ut nostrud consectetur non nisi.\r\n",
        lastUpdated: "2017-09-10"
    },
    {
        id: 493,
        title: "minim excepteur",
        category: "home",
        description:
            "Tempor aliquip commodo ut laborum. Nulla Lorem officia eiusmod et minim deserunt reprehenderit cillum. Elit ex adipisicing aute est cillum Lorem amet pariatur excepteur.\r\n",
        lastUpdated: "2017-02-26"
    },
    {
        id: 426,
        title: "irure aliquip",
        category: "home",
        description:
            "Aliqua veniam adipisicing nisi mollit. Cupidatat exercitation qui laborum tempor amet elit non excepteur. Dolor enim ex elit pariatur ipsum laboris ea minim ad.\r\n",
        lastUpdated: "2016-06-22"
    },
    {
        id: 137,
        title: "sint ad",
        category: "home",
        description:
            "Esse occaecat aliqua ex amet esse est eiusmod laboris do sit pariatur. Laboris deserunt non commodo mollit aute ex irure sint deserunt cillum aliquip aute in aute. Eu enim non aliquip non. Incididunt eiusmod minim commodo minim ad aute incididunt incididunt Lorem Lorem anim dolore. Est pariatur voluptate ipsum laboris sunt officia cillum anim pariatur ullamco consequat incididunt proident veniam. Labore occaecat commodo ad et cupidatat duis quis nisi dolor id mollit aliquip est amet.\r\n",
        lastUpdated: "2019-09-14"
    },
    {
        id: 965,
        title: "tempor anim",
        category: "home",
        description:
            "Voluptate enim consectetur qui irure. Qui dolore cillum tempor excepteur. Et excepteur ea labore et amet est ut laborum consectetur. Aliqua ex magna dolor excepteur officia enim duis laboris mollit. Nostrud aute nostrud magna esse labore ullamco cillum amet occaecat ipsum nostrud quis.\r\n",
        lastUpdated: "2015-06-28"
    },
    {
        id: 74,
        title: "ex reprehenderit",
        category: "home",
        description:
            "Duis commodo adipisicing in amet enim dolor quis dolore sunt est nulla fugiat. Lorem veniam magna ex esse dolor. Id magna esse qui irure adipisicing dolor officia culpa id elit do minim minim. Velit nostrud do do mollit ipsum sit adipisicing duis incididunt et voluptate amet minim deserunt. Veniam dolore nostrud ea reprehenderit culpa irure. Eiusmod ex mollit cillum qui in.\r\n",
        lastUpdated: "2016-06-04"
    },
    {
        id: 450,
        title: "aliquip quis",
        category: "home",
        description:
            "Veniam quis ea qui labore nisi Lorem reprehenderit nisi minim sunt consectetur consectetur aute. Irure ipsum ea cupidatat aute aliquip. Nisi dolor dolor sit adipisicing ad mollit irure. Consectetur ex eu esse ad tempor consectetur reprehenderit occaecat laboris commodo. Aute laboris aute laborum aliquip eu eu aliquip reprehenderit laboris enim veniam. Cillum commodo culpa nostrud do cupidatat voluptate est incididunt qui voluptate.\r\n",
        lastUpdated: "2018-04-21"
    },
    {
        id: 437,
        title: "sint excepteur",
        category: "work",
        description:
            "Eu eu exercitation exercitation amet. Magna sint excepteur incididunt consectetur reprehenderit. Minim aute magna ex irure excepteur non dolor dolore Lorem sunt esse excepteur sit. Voluptate proident esse excepteur ea ullamco aliquip reprehenderit minim voluptate. Aute mollit tempor et sunt fugiat Lorem ex aute irure ullamco. Reprehenderit fugiat sunt aliquip in irure dolor consectetur irure velit quis reprehenderit exercitation in culpa. Amet dolore do elit velit officia proident aliquip ipsum do voluptate.\r\n",
        lastUpdated: "2021-03-31"
    },
    {
        id: 251,
        title: "occaecat dolore",
        category: "home",
        description:
            "Laborum magna dolore exercitation quis deserunt commodo eiusmod. Do eu eiusmod ullamco ex nisi. Consequat ad fugiat proident et aliqua ullamco. Aliqua cupidatat sit elit sint dolor duis minim do amet. Ut aute proident amet aliqua consequat amet consequat do esse aliqua laboris consequat.\r\n",
        lastUpdated: "2016-02-02"
    },
    {
        id: 229,
        title: "qui occaecat",
        category: "work",
        description:
            "Lorem labore et consequat id. Laborum ullamco adipisicing aliqua laborum reprehenderit ullamco sit eu sunt quis voluptate. Eu dolor dolore deserunt sunt et laboris ea anim. Nostrud sit anim incididunt aute officia adipisicing aute sunt. Ut ea irure ad incididunt qui esse labore culpa tempor labore proident reprehenderit ex.\r\n",
        lastUpdated: "2014-11-01"
    },
    {
        id: 351,
        title: "irure sint",
        category: "personal",
        description:
            "Nisi veniam cillum eu minim tempor id. Nulla non anim aute tempor sunt. Est dolor irure nostrud esse sit officia deserunt velit elit fugiat. Consequat qui consequat elit sint.\r\n",
        lastUpdated: "2014-03-16"
    },
    {
        id: 192,
        title: "occaecat veniam",
        category: "personal",
        description:
            "Laborum deserunt labore proident duis adipisicing. Dolore cillum in dolore adipisicing elit cillum culpa sint. Laboris incididunt ut minim tempor minim deserunt tempor. Et culpa aliquip elit consequat elit. Sit ex consequat do anim tempor aute consectetur irure laboris nulla cillum adipisicing. Consectetur excepteur pariatur ullamco excepteur officia aliquip ullamco irure aliquip cupidatat deserunt sit irure sunt. Nulla voluptate consequat commodo sunt sunt.\r\n",
        lastUpdated: "2020-07-02"
    },
    {
        id: 862,
        title: "esse sit",
        category: "personal",
        description:
            "Dolore veniam consectetur eiusmod velit velit anim excepteur deserunt esse est et commodo. Ipsum adipisicing ullamco veniam laborum fugiat laborum irure adipisicing ut qui ex nulla. Ad reprehenderit laboris proident amet cupidatat adipisicing proident irure officia. Fugiat anim est exercitation eu pariatur ea duis cupidatat laborum culpa. Laborum do consequat sunt ea culpa irure non incididunt. Est sunt ex qui commodo cupidatat anim ut dolore occaecat magna consectetur. Cillum ex tempor id culpa.\r\n",
        lastUpdated: "2014-07-06"
    },
    {
        id: 77,
        title: "incididunt cillum",
        category: "work",
        description:
            "Commodo qui excepteur labore nostrud. Id mollit cillum sit anim in labore proident consectetur exercitation mollit et tempor dolor tempor. Id est laborum aute Lorem eu exercitation et aliquip sit exercitation ad. Elit mollit exercitation adipisicing reprehenderit occaecat quis aliquip. Commodo pariatur minim ullamco Lorem ipsum tempor ad. Amet voluptate sit ut mollit sint culpa elit incididunt sint.\r\n",
        lastUpdated: "2020-02-13"
    },
    {
        id: 347,
        title: "consequat nisi",
        category: "work",
        description:
            "In irure sunt Lorem adipisicing dolor tempor. Commodo dolor aliqua est enim laborum laboris consectetur fugiat aliquip irure eiusmod. Cupidatat nisi adipisicing labore do laborum commodo amet sint. Fugiat ut sint incididunt deserunt proident.\r\n",
        lastUpdated: "2015-05-26"
    },
    {
        id: 231,
        title: "cillum elit",
        category: "personal",
        description:
            "Ea in tempor laboris aliqua tempor id eiusmod proident do deserunt labore. Incididunt et aute sunt esse est cillum sunt exercitation. Velit tempor dolor occaecat occaecat labore. Et sint in nisi sunt. Officia sit dolore quis id excepteur aliquip cillum ipsum in culpa exercitation ut. Mollit commodo pariatur mollit ipsum ad sint reprehenderit. Ad culpa labore irure do commodo elit adipisicing ad non et.\r\n",
        lastUpdated: "2020-05-15"
    }
];

function App() {
    // Modal State
    const [open, setOpen] = useState(false);
    // Modal Handlers
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const [notes, setNotes] = useState(noteList);

    const [searchedNotes, setSearchedNotes] = useState(noteList);

    return (
        <ThemeProvider theme={theme()}>
            <Box display="flex" alignItems="center" justifyContent="center">
                <CssBaseline />
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="60%"
                    flexDirection="column"
                >
                    <NoteModal
                        open={open}
                        setNotes={setNotes}
                        searchedNotes={searchedNotes}
                        setSearchedNotes={setSearchedNotes}
                        notes={notes}
                        handleClose={handleClose}
                    />
                    <SearchBar
                        notes={notes}
                        setNotes={setNotes}
                        searchedNotes={searchedNotes}
                        setSearchedNotes={setSearchedNotes}
                    />
                    <NotesNavigation
                        notes={notes}
                        searchedNotes={searchedNotes}
                        handleOpen={handleOpen}
                        setNotes={setNotes}
                    />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
