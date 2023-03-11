import "./PageController.css";
import { ImageGallery } from "./ImageGallery.js";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { Nav, ButtonGroup, DropdownButton } from "react-bootstrap";

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
    const landscape1 = Object.entries(
        importAll(
            require.context(
                "../assets/img/landscape1",
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
            <div className={isMobile ? "mobile" : "desktop"}>
                <Nav className="navbar">
                    <ul>
                        <li className="navItem">
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
                        <li className="navItem">
                            <div className="dropdown">
                                <h2
                                    className={
                                        shown > 0 && shown < 3
                                            ? "activeElement"
                                            : "element"
                                    }>
                                    Landscape
                                </h2>
                                <div className="dropdown-content">
                                    <h2
                                        className={
                                            shown === 1
                                                ? "activeElement"
                                                : "element"
                                        }
                                        onClick={() => {
                                            setShown(1);
                                        }}>
                                        First
                                    </h2>
                                    <h2
                                        className={
                                            shown === 2
                                                ? "activeElement"
                                                : "element"
                                        }
                                        onClick={() => {
                                            setShown(2);
                                        }}>
                                        Second
                                    </h2>
                                </div>
                            </div>
                        </li>

                        <li className="navItem">
                            <h2
                                className={
                                    shown === 3 ? "activeElement" : "element"
                                }
                                onClick={() => {
                                    setShown(3);
                                }}>
                                Life
                            </h2>
                        </li>
                        <li className="navItem">
                            <h2
                                className={
                                    shown === 4 ? "activeElement" : "element"
                                }
                                onClick={() => {
                                    setShown(4);
                                }}>
                                Portraits
                            </h2>
                        </li>
                        <li className="navItem">
                            <h2
                                className={
                                    shown === 5 ? "activeElement" : "element"
                                }
                                onClick={() => {
                                    setShown(5);
                                }}>
                                Sports
                            </h2>
                        </li>
                        <li>
                            <h2 className="Cosmo">Cosmo</h2>
                        </li>
                    </ul>
                </Nav>
                {shown === 0 && <ImageGallery images={auto} />}
                {shown === 1 && <ImageGallery images={landscape} />}
                {shown === 2 && <ImageGallery images={landscape1} />}
                {shown === 3 && <ImageGallery images={life} />}
                {shown === 4 && <ImageGallery images={portrait} />}
                {shown === 5 && <ImageGallery images={sport} />}
            </div>
        </section>
    );
};
