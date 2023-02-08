import "./CoverScreen.css";
import coverImg from "../assets/img/moab22.jpg";

export const CoverScreen = () => {
  return (
    <div className="coverScreen">
      <img src={coverImg} className="coverScreenImg" alt="moab22" />
      <h1>HEEELLLO</h1>
    </div>
  );
};
