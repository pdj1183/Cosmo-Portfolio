import "./PageController.css";
import { ImageGallery } from "./ImageGallery.js";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { Nav } from "react-bootstrap";

export const PageController = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => (images[item] = r(item)));
        return images;
    }

    const [shown, setShown] = useState(1);

    const auto = Object.entries(
        importAll(
            require.context("../assets/img/auto", false, /\.(png|jpe?g|svg)$/)
        )
    ).map(([key, value]) => ({ src: value, alt: key }));
    const landscape = Object.entries(
        importAll(
            require.context(
                "../assets/img/landscape",
                false,
                /\.(png|jpe?g|svg)$/
            )
        )
    ).map(([key, value]) => ({ src: value, alt: key }));
    const life = Object.entries(
        importAll(
            require.context("../assets/img/life", false, /\.(png|jpe?g|svg)$/)
        )
    ).map(([key, value]) => ({ src: value, alt: key }));
    const portrait = Object.entries(
        importAll(
            require.context(
                "../assets/img/portrait",
                false,
                /\.(png|jpe?g|svg)$/
            )
        )
    ).map(([key, value]) => ({ src: value, alt: key }));
    const sport = Object.entries(
        importAll(
            require.context("../assets/img/sport", false, /\.(png|jpe?g|svg)$/)
        )
    ).map(([key, value]) => ({ src: value, alt: key }));

    return (
        <section className="page">
            <Nav className="navbar">
                <ul>
                    <li>
                        <h2
                            className={
                                shown === 0 ? "activeElement" : "element"
                            }
                            onClick={() => {
                                setShown(0);
                            }}>
                            Automotive
                        </h2>
                    </li>
                    <li>
                        <h2
                            className={
                                shown === 1 ? "activeElement" : "element"
                            }
                            onClick={() => {
                                setShown(1);
                            }}>
                            Landscapes
                        </h2>
                    </li>
                    <li>
                        <h2
                            className={
                                shown === 2 ? "activeElement" : "element"
                            }
                            onClick={() => {
                                setShown(2);
                            }}>
                            Life
                        </h2>
                    </li>
                    <li>
                        <h2
                            className={
                                shown === 3 ? "activeElement" : "element"
                            }
                            onClick={() => {
                                setShown(3);
                            }}>
                            Portraits
                        </h2>
                    </li>
                    <li>
                        <h2
                            className={
                                shown === 4 ? "activeElement" : "element"
                            }
                            onClick={() => {
                                setShown(4);
                            }}>
                            Sports
                        </h2>
                    </li>
                </ul>
            </Nav>
            <div className={isMobile ? "mobile" : "desktop"}>
                {shown === 0 && <ImageGallery images={auto} />}
                {shown === 1 && <ImageGallery images={landscape} />}
                {shown === 2 && <ImageGallery images={life} />}
                {shown === 3 && <ImageGallery images={portrait} />}
                {shown === 4 && <ImageGallery images={sport} />}
            </div>
        </section>
    );
};
