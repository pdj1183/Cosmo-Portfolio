import "./Page.css";
import "./NavBar.css";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Page = () => {
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
        require.context("../assets/img", false, /\.(png|jpe?g|svg)$/)
    );
    const [currentImg, setCurrentImg] = useState(images["roundtown3.jpeg"]);

    return (
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

            <img src={currentImg} className="currentImg" alt="page-img" />
            <img
                src={images["erik14.jpeg"]}
                className="currentImg"
                alt="page-img"
                style={{ verticalAlign: "top" }}
            />
            <img
                src={images["sprk21.jpeg"]}
                className="currentImg"
                alt="page-img"
                style={{ verticalAlign: "top" }}
            />
        </div>
    );
};
