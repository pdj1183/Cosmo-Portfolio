import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CoverScreen } from "./components/CoverScreen";
import { Page } from "./components/Page";
import { HighlightPage } from "./components/HighlightPage";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
    return (
        <ParallaxProvider>
            <CoverScreen />
            <HighlightPage />
            <Page />
        </ParallaxProvider>
    );
}

export default App;
