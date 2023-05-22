import styles from "./BtnHovering_3.module.css";

export const BtnHovering_3 = ({ property_1 }: { property_1: string }) => {
  const property_1_0 =
    property_1 === "default"
      ? {
          color: "rgb(239, 121, 12)",
        }
      : {
          color: "rgb(255, 255, 255)",
        };
  const property_1_1 =
    property_1 === "default"
      ? {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "rgb(239, 121, 12)",
        }
      : {
          backgroundColor: "rgb(225, 108, 0)",
        };

  return (
    <div style={property_1_1} className={styles.btnHovering_30}>
      <p style={property_1_0} className={styles.btnHovering_31}>
        button
      </p>
    </div>
  );
};
