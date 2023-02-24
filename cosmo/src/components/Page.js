import "./Page.css";
import "./NavBar.css";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useMediaQuery } from "react-responsive";

export const Page = () => {
    const [openNav, setOpenNav] = useState(false);

    /*
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
            images[item.replace("./", "")] = r(item);
        });
        return images;
    }

    const images = importAll(
        require.context("../assets/img", false, /\.(png|jpe?g|svg)$/)
    );
    */
    const [enlargImg, setEnlargImg] = useState(0);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div className="page">
            {/*}
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
                                    onUpdateCurrentImg(images["17.jpeg"]);
                                    setOpenNav(!openNav);
                                }}>
                                Second
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navItem">hello</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navItem">hello</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navItem">hello</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navItem">hello</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navItem">hello</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                            */}
            <div className={isMobile ? "mobile" : "desktop"}>
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/roundtown3.jpeg?raw=true"
                    className={enlargImg === 1 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 1) {
                            setEnlargImg(1);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/erik14.jpeg?raw=true"
                    className={enlargImg === 2 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 2) {
                            setEnlargImg(2);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/sprk21.jpeg?raw=true"
                    className={enlargImg === 3 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 3) {
                            setEnlargImg(3);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/nothaone7.jpeg?raw=true"
                    className={enlargImg === 4 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 4) {
                            setEnlargImg(4);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/moab22.jpg?raw=true"
                    className={enlargImg === 5 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 5) {
                            setEnlargImg(5);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/powderhorn_preseason7.jpeg?raw=true"
                    className={enlargImg === 6 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 6) {
                            setEnlargImg(6);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />{" "}
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/roundtown4.jpeg?raw=true"
                    className={enlargImg === 7 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 7) {
                            setEnlargImg(7);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/newcarnewcar10.jpeg?raw=true"
                    className={enlargImg === 8 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 8) {
                            setEnlargImg(8);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/muddinbeach5.jpeg?raw=true"
                    className={enlargImg === 9 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 9) {
                            setEnlargImg(9);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/moab18.jpeg?raw=true"
                    className={enlargImg === 10 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 10) {
                            setEnlargImg(10);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/lexibday3.jpeg?raw=true"
                    className={enlargImg === 11 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 11) {
                            setEnlargImg(11);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/erik3.jpeg?raw=true"
                    className={enlargImg === 12 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 12) {
                            setEnlargImg(12);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/salidaOP12.jpeg?raw=true"
                    className={enlargImg === 13 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 13) {
                            setEnlargImg(13);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/ruby8.jpeg?raw=true"
                    className={enlargImg === 14 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 14) {
                            setEnlargImg(14);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/phonOPEN2.jpeg?raw=true"
                    className={enlargImg === 15 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 15) {
                            setEnlargImg(15);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/muddinbeach9-2.jpeg?raw=true"
                    className={enlargImg === 16 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 16) {
                            setEnlargImg(16);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/newdrone3-HDR.jpeg?raw=true"
                    className={enlargImg === 17 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 17) {
                            setEnlargImg(17);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/moontings19.jpeg?raw=true"
                    className={enlargImg === 18 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 18) {
                            setEnlargImg(18);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />{" "}
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/milkynavajorocks4.jpeg?raw=true"
                    className={enlargImg === 19 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 19) {
                            setEnlargImg(19);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/ivann9.jpeg?raw=true"
                    className={enlargImg === 20 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 21) {
                            setEnlargImg(21);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/ivann12.jpeg?raw=true"
                    className={enlargImg === 22 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 22) {
                            setEnlargImg(22);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/idk.jpeg?raw=true"
                    className={enlargImg === 23 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 23) {
                            setEnlargImg(23);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/desertdrone.jpeg?raw=true"
                    className={enlargImg === 24 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 24) {
                            setEnlargImg(24);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
                <img
                    src="https://github.com/pdj1183/Cosmo-Portfolio/blob/main/cosmo/img/coreshot10.jpeg?raw=true"
                    className={enlargImg === 25 ? "enlargeImg" : "currentImg"}
                    alt="page-img"
                    onClick={() => {
                        if (enlargImg !== 25) {
                            setEnlargImg(25);
                        } else {
                            setEnlargImg(0);
                        }
                    }}
                />
            </div>
        </div>
    );
};
