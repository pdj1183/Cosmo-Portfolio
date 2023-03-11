import "./HighlightPage.css";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

import first from "../assets/img/sport/erik4.jpeg";
import second from "../assets/img/life/EE608E16-9E40-48C8-9BD4-94155FC66829.jpeg";
import third from "../assets/img/life/camp16.jpeg";

export const HighlightPage = () => {
    const [height, setHeight] = useState(window.innerHeight);
    window.addEventListener("resize", () => {
        let h = window.innerHeight;
        setHeight(h);
        console.log(h);
    });
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <section className="highlight-page">
            <Parallax
                disabled={isMobile}
                className="hello"
                startScroll={0}
                endScroll={height}
                shouldAlwaysCompleteAnimation
                translateX={[-100, 0]}>
                <img className="high" src={first} alt="first" />
            </Parallax>
            <Parallax
                disabled={isMobile}
                className="hello"
                shouldAlwaysCompleteAnimation
                startScroll={height}
                endScroll={2 * height}
                translateX={[100, 0]}>
                <img className="high" src={second} alt="second" />
            </Parallax>
            <Parallax
                disabled={isMobile}
                className="hello"
                shouldAlwaysCompleteAnimation
                startScroll={2 * height}
                endScroll={2.5 * height}
                translateX={[100, 0]}>
                <img className="high" src={third} alt="third" />
            </Parallax>
        </section>
    );
};
