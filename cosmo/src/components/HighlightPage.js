import "./HighlightPage.css";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import LazyLoad from "react-lazyload";

import first from "../assets/img/second11.jpeg";
import second from "../assets/img/erik17.jpeg";
import third from "../assets/img/sprk7.jpeg";
import fourth from "../assets/img/465EAA08-C283-4A32-AE5C-FB4C529ABB37.jpeg";

export const HighlightPage = () => {
    const [height, setHeight] = useState(window.innerHeight);
    window.addEventListener("resize", () => {
        let h = window.innerHeight;
        setHeight(h);
        console.log(h);
    });
    return (
        <section className="highlight-page">
            <Parallax
                className="hello"
                startScroll={0}
                endScroll={height}
                shouldAlwaysCompleteAnimation
                translateX={[-100, 0]}>
                <img className="high" src={first} alt="first" />
            </Parallax>
            <Parallax
                className="hello"
                shouldAlwaysCompleteAnimation
                startScroll={height}
                endScroll={2 * height}
                translateX={[100, 0]}>
                <img className="high" src={second} alt="second" />
            </Parallax>
            <Parallax
                className="hello"
                shouldAlwaysCompleteAnimation
                startScroll={2 * height}
                endScroll={2.5 * height}
                translateX={[100, 0]}>
                <img className="high" src={third} alt="third" />
            </Parallax>
            <Parallax
                className="hello"
                scale={[0.25, 1]}
                startScroll={3 * height}
                endScroll={4 * height}
                shouldAlwaysCompleteAnimation>
                d <img className="high" src={fourth} alt="fourth" />d{" "}
            </Parallax>
        </section>
    );
};
