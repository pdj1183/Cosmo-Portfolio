import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CoverScreen } from "./components/CoverScreen";
import { Page } from "./components/Page";
import { HighlightPage } from "./components/HighlightPage";

function App() {
    return (
        <div className="App">
            <CoverScreen />
            <HighlightPage />
            <Page />
        </div>
    );
}

export default App;
