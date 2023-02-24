import "./HighlightPage.css";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

import first from "https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/second11.jpeg?raw=true";
import second from "https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/erik17.jpeg?raw=true";
import third from "https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/sprk7.jpeg?raw=true";
import fourth from "https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img//465EAA08-C283-4A32-AE5C-FB4C529ABB37.jpeg?raw=true";

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
            <Parallax
                disabled={isMobile}
                className="hello"
                scale={[0.25, 1]}
                startScroll={3 * height}
                endScroll={4 * height}
                shouldAlwaysCompleteAnimation>
                <img className="high" src={fourth} alt="fourth" />
            </Parallax>
        </section>
    );
};
