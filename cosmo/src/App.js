import "./App.css";
import "./components/Page.css";
import "./components/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/CoverScreen.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import "./components/HighlightPage.css";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LazyLoad from "react-lazyload";

import first from "./assets/img/second11.jpeg";
import second from "./assets/img/erik17.jpeg";
import third from "./assets/img/sprk7.jpeg";
import fourth from "./assets/img/465EAA08-C283-4A32-AE5C-FB4C529ABB37.jpeg";

function App() {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [height, setHeight] = useState(window.innerHeight);
    window.addEventListener("resize", () => {
        // We execute the same script as before
        let h = window.innerHeight;
        setHeight(h);
        console.log(h);
    });

    const [openNav, setOpenNav] = useState(true);

    const onUpdateCurrentImg = (img) => {
        setCurrentImg(img);
    };
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
            images[item.replace("./", "")] = r(item);
        });
        return images;
    }

    const images = importAll(
        require.context("./assets/img", false, /\.(png|jpe?g|svg)$/)
    );
    const [currentImg, setCurrentImg] = useState(images["roundtown3.jpeg"]);

    return (
        <div className="App">
            <ParallaxProvider>
                <section className={isMobile ? "coverMobile" : "coverDesktop"}>
                    <h1 className={isMobile ? "h1Mobile" : "h1Desktop"}>
                        <Parallax
                            shouldAlwaysCompleteAnimation={true}
                            scale={[1, 0]}>
                            Photos
                        </Parallax>
                        <Parallax
                            className="bottom"
                            translateX={["0vw", "-100vw"]}
                            shouldAlwaysCompleteAnimation={true}>
                            By
                        </Parallax>
                    </h1>
                </section>
                <h1 className={isMobile ? "cosmoMobile" : "cosmoDesktop"}>
                    <Parallax
                        shouldAlwaysCompleteAnimation={true}
                        scale={[1, 0.4]}>
                        Cosmo
                    </Parallax>
                </h1>
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
                        startScroll={2.5 * height}
                        endScroll={3 * height}
                        shouldAlwaysCompleteAnimation>
                        <img className="high" src={fourth} alt="fourth" />
                    </Parallax>
                </section>
                <div className="page">
                    <Navbar
                        className={openNav ? "nav-open" : "nav-closed"}
                        expand={false}
                        expanded={openNav}>
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            onClick={() => setOpenNav(!openNav)}>
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="flex-lg-column">
                                <Nav.Item>
                                    <Nav.Link
                                        onClick={() => {
                                            onUpdateCurrentImg(
                                                images["roundtown3.jpeg"]
                                            );
                                            setOpenNav(!openNav);
                                        }}>
                                        First
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className="navItem"
                                        onClick={() => {
                                            onUpdateCurrentImg(
                                                images["17.jpeg"]
                                            );
                                            setOpenNav(!openNav);
                                        }}>
                                        Second
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="navItem">
                                        hello
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="navItem">
                                        hello
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="navItem">
                                        hello
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="navItem">
                                        hello
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="navItem">
                                        hello
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <img
                        src={currentImg}
                        className="currentImg"
                        alt="page-img"
                    />
                </div>
            </ParallaxProvider>
        </div>
    );
}

export default App;
