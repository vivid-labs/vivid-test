import "./Card.css";
import vivid_88e2cc240f55219ae887a6ef77cf6a1ee4a1bc6c from "./88e2cc240f55219ae887a6ef77cf6a1ee4a1bc6c.jpg";

export const Card = () => {
  return (
    <div className="card0">
      <img
        src={vivid_88e2cc240f55219ae887a6ef77cf6a1ee4a1bc6c.src}
        className="card1"
      />
      <div className="card2">
        <div className="card3">
          <p className="card4">Champagne Package</p>
          <p className="card5">$450</p>
        </div>
        <p className="card6">
          This package includes the most top shelf champagne off our bottom
          shelf. Sure to impress that special someone.{" "}
        </p>
      </div>
    </div>
  );
};
