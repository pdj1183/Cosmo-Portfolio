import "./Page.css";
import "./NavBar.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Page = () => {
    function importAll(r) {
        let images = {};
        r.keys().map(
            (item, index) => (images[item.replace("./", "")] = r(item))
        );
        return images;
    }

    const images = importAll(
        require.context("../assets/img", false, /\.(png|jpe?g|svg)$/)
    );
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
                    src={images["roundtown3.jpeg"]}
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
                    src={images["erik14.jpeg"]}
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
                    src={images["sprk21.jpeg"]}
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
                    src={images["nothaone7.jpeg"]}
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
                    src={images["moab22.jpg"]}
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
                    src={images["powderhorn_preseason7.jpeg"]}
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
                    src={images["roundtown4.jpeg"]}
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
                    src={images["newcarnewcar10.jpeg"]}
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
                    src={images["muddinbeach5.jpeg"]}
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
                    src={images["moab18.jpeg"]}
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
                    src={images["lexibday3.jpeg"]}
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
                    src={images["erik3.jpeg"]}
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
                    src={images["salidaOP12.jpeg"]}
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
                    src={images["ruby8.jpeg"]}
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
                    src={images["phonOPEN2.jpeg"]}
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
                    src={images["muddinbeach9-2.jpeg"]}
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
                    src={images["newdrone3-HDR.jpeg"]}
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
                    src={images["moontings19.jpeg"]}
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
                    src={images["milkynavajorocks4.jpeg"]}
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
                    src={images["ivann9.jpeg"]}
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
                    src={images["ivann12.jpeg"]}
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
                    src={images["idk.jpeg"]}
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
                    src={images["desertdrone.jpeg"]}
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
                    src={images["coreshot10.jpeg"]}
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
