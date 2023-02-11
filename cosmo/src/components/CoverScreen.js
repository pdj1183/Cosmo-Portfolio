import "./CoverScreen.css";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

export const CoverScreen = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <span>
            <section className="coverScreen">
                <h1 className={isMobile ? "h1Mobile" : "h1Desktop"}>
                    <Parallax
                        className="top"
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
            <h1 className={isMobile ? "cosmoMobile" : "cosmoDesktop"}>Cosmo</h1>
        </span>
    );
};
