import "./Page.css";
import "./NavBar.css";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Page = () => {
    const [currentImg, setCurrentImg] = useState();
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

    return (
        <section>
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
                                onClick={() =>
                                    onUpdateCurrentImg(
                                        images["roundtown3.jpeg"]
                                    )
                                }>
                                First
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className="navItem"
                                onClick={() =>
                                    onUpdateCurrentImg(images["17.jpeg"])
                                }>
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

            <div className="page">
                <img src={currentImg} className="centerImg" alt="page-img" />
            </div>
        </section>
    );
};
