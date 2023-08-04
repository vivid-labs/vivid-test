import nameRocket from "./nameRocket.svg";
import namePhone from "./namePhone.svg";
import nameEye from "./nameEye.svg";
import nameBookmark from "./nameBookmark.svg";
import nameArrowRight from "./nameArrowRight.svg";
import nameEnvelope from "./nameEnvelope.svg";
export const Icon = ({
  override,
  name,
}: {
  override?: React.CSSProperties;
  name: string;
}) => {
  let iconSrc;
  if (name === "Rocket") {
    iconSrc = nameRocket;
  } else if (name === "Phone") {
    iconSrc = namePhone;
  } else if (name === "Eye") {
    iconSrc = nameEye;
  } else if (name === "Bookmark") {
    iconSrc = nameBookmark;
  } else if (name === "ArrowRight") {
    iconSrc = nameArrowRight;
  } else {
    iconSrc = nameEnvelope;
  }
  return (
    <img
      src={iconSrc.src}
      style={{
        width: "20px",
        height: "20px",
        ...override,
      }}
    />
  );
};
