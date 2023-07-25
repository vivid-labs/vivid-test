import styles from "./BtnHovering_3.module.css";
export const BtnHovering_3 = ({
  override,
  property_1,
}: {
  override?: any;
  property_1: string;
}) => {
  const buttonProperty_1 =
    property_1 === "default"
      ? {
          color: "rgb(239, 121, 12)",
        }
      : {
          color: "rgb(255, 255, 255)",
        };
  const btnHovering_3Property_1 =
    property_1 === "default"
      ? {
          borderStyle: "solid",
          borderColor: "rgb(239, 121, 12)",
          borderWidth: "1px",
        }
      : {
          backgroundColor: "rgb(225, 108, 0)",
        };
  return (
    <div
      style={{
        ...btnHovering_3Property_1,
        ...override,
      }}
      className={styles.btnHovering_3}
      figma-id="11:73:351"
    >
      <p
        style={buttonProperty_1}
        className={styles.button}
        figma-id="11:73:352"
      >
        button
      </p>
    </div>
  );
};
