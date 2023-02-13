import "./HighlightPage.css";
import { Parallax } from "react-scroll-parallax";
import first from "../assets/img/second11.jpeg";
import second from "../assets/img/erik17.jpeg";
import third from "../assets/img/sprk7.jpeg";
import fourth from "../assets/img/465EAA08-C283-4A32-AE5C-FB4C529ABB37.jpeg";

export const HighlightPage = () => {
    return (
        <section className="highlight-page">
            <Parallax translateX={["-100vw", "100vw"]}>
                <img className="high" src={first} alt="first" />
            </Parallax>
            <Parallax translateX={["100vw", "-100vw"]}>
                <img className="high" src={second} alt="second" />
            </Parallax>
            <Parallax translateX={["100vw", "-100vw"]}>
                <img className="high" src={third} alt="third" />
            </Parallax>
            <Parallax
                className="hello"
                scale={[0.25, 1]}
                shouldAlwaysCompleteAnimation={true}>
                <img className="high" src={fourth} alt="fourth" />
            </Parallax>
        </section>
    );
};
