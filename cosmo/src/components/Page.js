import "./Page.css";
import "./NavBar.css";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const Page = () => {
    const [currentImg, setCurrentImg] = useState();

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
            <Container>
                <Row>
                    <Col md={2}>
                        <Navbar className="nav" expand="lg">
                            <Navbar.Toggle aria-controls="basic-nav-nav">
                                <span className="nav-toggle"></span>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="flex-lg-column">
                                    <Nav.Item>
                                        <Nav.Link
                                            className="navItem"
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
                                                onUpdateCurrentImg(
                                                    images["17.jpeg"]
                                                )
                                            }>
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
                    </Col>
                    <Col sm md lg={12} xl xxl={10} className="portait">
                        <div className="page">
                            <img
                                src={currentImg}
                                className="centerImg"
                                alt="page-img"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
