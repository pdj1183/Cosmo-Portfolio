import "./Page.css";
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
        <section className="page">
            <div className={isMobile ? "mobile" : "desktop"}>
                <a href="#1">
                    <img
                        id="1"
                        src={images["roundtown3.jpeg"]}
                        className={
                            enlargImg === 1 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 1) {
                                setEnlargImg(1);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#2">
                    <img
                        id="2"
                        src={images["erik14.jpeg"]}
                        className={
                            enlargImg === 2 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 2) {
                                setEnlargImg(2);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#3">
                    <img
                        id="3"
                        src={images["sprk21.jpeg"]}
                        className={
                            enlargImg === 3 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 3) {
                                setEnlargImg(3);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#4">
                    <img
                        id="4"
                        src={images["nothaone7.jpeg"]}
                        className={
                            enlargImg === 4 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 4) {
                                setEnlargImg(4);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#5">
                    <img
                        id="5"
                        src={images["moab22.jpg"]}
                        className={
                            enlargImg === 5 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 5) {
                                setEnlargImg(5);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#6">
                    <img
                        id="6"
                        src={images["powderhorn_preseason7.jpeg"]}
                        className={
                            enlargImg === 6 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 6) {
                                setEnlargImg(6);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#7">
                    <img
                        id="7"
                        src={images["roundtown4.jpeg"]}
                        className={
                            enlargImg === 7 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 7) {
                                setEnlargImg(7);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#8">
                    <img
                        id="8"
                        src={images["newcarnewcar10.jpeg"]}
                        className={
                            enlargImg === 8 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 8) {
                                setEnlargImg(8);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#9">
                    <img
                        id="9"
                        src={images["muddinbeach5.jpeg"]}
                        className={
                            enlargImg === 9 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 9) {
                                setEnlargImg(9);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#10">
                    <img
                        id="10"
                        src={images["moab18.jpeg"]}
                        className={
                            enlargImg === 10 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 10) {
                                setEnlargImg(10);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#11">
                    <img
                        id="11"
                        src={images["lexibday3.jpeg"]}
                        className={
                            enlargImg === 11 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 11) {
                                setEnlargImg(11);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#12">
                    <img
                        id="12"
                        src={images["erik3.jpeg"]}
                        className={
                            enlargImg === 12 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 12) {
                                setEnlargImg(12);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#13">
                    <img
                        id="13"
                        src={images["salidaOP12.jpeg"]}
                        className={
                            enlargImg === 13 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 13) {
                                setEnlargImg(13);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#14">
                    <img
                        id="14"
                        src={images["ruby8.jpeg"]}
                        className={
                            enlargImg === 14 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 14) {
                                setEnlargImg(14);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#15">
                    <img
                        id="15"
                        src={images["phonOPEN2.jpeg"]}
                        className={
                            enlargImg === 15 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 15) {
                                setEnlargImg(15);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#16">
                    <img
                        id="16"
                        src={images["muddinbeach9-2.jpeg"]}
                        className={
                            enlargImg === 16 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 16) {
                                setEnlargImg(16);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#17">
                    <img
                        id="17"
                        src={images["newdrone3-HDR.jpeg"]}
                        className={
                            enlargImg === 17 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 17) {
                                setEnlargImg(17);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#18">
                    <img
                        id="18"
                        src={images["moontings19.jpeg"]}
                        className={
                            enlargImg === 18 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 18) {
                                setEnlargImg(18);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#19">
                    <img
                        id="19"
                        src={images["milkynavajorocks4.jpeg"]}
                        className={
                            enlargImg === 19 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 19) {
                                setEnlargImg(19);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#20">
                    <img
                        id="20"
                        src={images["ivann9.jpeg"]}
                        className={
                            enlargImg === 20 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 20) {
                                setEnlargImg(20);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#21">
                    <img
                        id="21"
                        src={images["ivann12.jpeg"]}
                        className={
                            enlargImg === 21 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 21) {
                                setEnlargImg(21);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#22">
                    <img
                        id="22"
                        src={images["idk.jpeg"]}
                        className={
                            enlargImg === 22 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 22) {
                                setEnlargImg(22);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#23">
                    <img
                        id="23"
                        src={images["desertdrone.jpeg"]}
                        className={
                            enlargImg === 23 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 23) {
                                setEnlargImg(23);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
                <a href="#24">
                    <img
                        id=""
                        src={images["coreshot10.jpeg"]}
                        className={
                            enlargImg === 24 ? "enlargeImg" : "currentImg"
                        }
                        alt="page-img"
                        onClick={() => {
                            if (enlargImg !== 24) {
                                setEnlargImg(24);
                            } else {
                                setEnlargImg(0);
                            }
                        }}
                    />
                </a>
            </div>
        </section>
    );
};
