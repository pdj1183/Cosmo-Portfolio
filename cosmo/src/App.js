import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CoverScreen } from "./components/CoverScreen";
import { Break } from "./components/break";
import { HighlightPage } from "./components/HighlightPage";
import { ParallaxProvider } from "react-scroll-parallax";
import { PageController } from "./components/PageController";

function App() {
    return (
        <main>
            <ParallaxProvider>
                <CoverScreen />
                <Break />
                <HighlightPage />
                <PageController />
            </ParallaxProvider>
        </main>
    );
}

export default App;
