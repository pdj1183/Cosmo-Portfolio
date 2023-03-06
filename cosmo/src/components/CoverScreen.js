import "./CoverScreen.css";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

export const CoverScreen = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <span>
            <section className={isMobile ? "coverMobile" : "coverDesktop"} />
            <h1 className={isMobile ? "h1Mobile" : "h1Desktop"}>
                <Parallax shouldAlwaysCompleteAnimation={true} scale={[1, 0]}>
                    Photos
                </Parallax>
            </h1>
            <h1 className={isMobile ? "h1Mobile" : "h1Desktop"}>
                <Parallax
                    translateX={[0, -10]}
                    shouldAlwaysCompleteAnimation={true}>
                    By
                </Parallax>
            </h1>

            <Parallax
                className="cosmo"
                shouldAlwaysCompleteAnimation={true}
                scale={[1, 0.4]}>
                <h1 className={isMobile ? "h1Mobile" : "h1Desktop"}>Cosmo</h1>
            </Parallax>
        </span>
    );
};
