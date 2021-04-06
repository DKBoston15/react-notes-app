// CSS
import "./css/App.css";

// Components
import SearchBar from "./components/SearchBar";
import NotesProgressBar from "./components/NotesProgressBar";
import NotesNavigation from "./components/NotesNavigation";
import NotesBoard from "./components/NotesBoard";

function App() {
    return (
        <div className="App">
            <SearchBar />
            <NotesNavigation />
            <NotesProgressBar />
            <NotesBoard />
        </div>
    );
}

export default App;
