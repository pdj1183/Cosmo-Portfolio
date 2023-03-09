import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Page.css";

export const ImageGallery = ({ images }) => {
    const [enlargImg, setEnlargImg] = useState(0);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const handleClick = (index) => {
        if (enlargImg !== index) {
            setEnlargImg(index);
        } else {
            setEnlargImg(0);
        }
    };

    return (
        <section className="image-gallery">
            <div className={isMobile ? "mobile" : "desktop"}>
                {images.map((image, index) => (
                    <a href={`#${index + 1}`}>
                        <img
                            id={`${index + 1}`}
                            src={image.src}
                            className={
                                enlargImg === index + 1
                                    ? "enlargeImg"
                                    : "currentImg"
                            }
                            alt="page-img"
                            onClick={() => handleClick(index + 1)}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};
