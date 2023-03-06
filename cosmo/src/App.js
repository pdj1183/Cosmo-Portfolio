import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CoverScreen } from "./components/CoverScreen";
import { Page } from "./components/Page";
import { Break } from "./components/break";
import { HighlightPage } from "./components/HighlightPage";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
    return (
        <div className="App">
            <ParallaxProvider>
                <CoverScreen />
                <Break />
                <HighlightPage />
                <Page />
            </ParallaxProvider>
        </div>
    );
}

export default App;
