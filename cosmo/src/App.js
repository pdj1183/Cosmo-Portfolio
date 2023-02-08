import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CoverScreen } from "./components/CoverScreen";
import { Page } from "./components/Page";

function App() {
    return (
        <div className="App">
            <CoverScreen />
            <Page />
        </div>
    );
}

export default App;
