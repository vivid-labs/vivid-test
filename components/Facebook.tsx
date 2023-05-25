import styles from "./Facebook.module.css";
import vivid_5443f3a1362d from "./5443f3a1362d.svg";
import vivid_04734bebdf4a from "./04734bebdf4a.svg";

export const Facebook = ({ property_1 }: { property_1: string }) => {
  const property_1_0 =
    property_1 === "Default"
      ? {
          top: "20px",
        }
      : {
          top: "58.96px",
        };
  let imageSrc_0;
  if (property_1 === "Default") {
    imageSrc_0 = vivid_5443f3a1362d;
  } else {
    imageSrc_0 = vivid_04734bebdf4a;
  }

  return (
    <img
      src={imageSrc_0.src}
      style={property_1_0}
      className={styles.facebook0}
    />
  );
};
