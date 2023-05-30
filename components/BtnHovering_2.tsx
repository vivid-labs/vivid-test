import styles from "./BtnHovering_2.module.css";

export const BtnHovering_2 = ({
  style,
  property_1,
}: {
  style: any;
  property_1: string;
}) => {
  const property_1_0 =
    property_1 === "default"
      ? {
          backgroundColor: "rgb(239, 121, 12)",
        }
      : {
          backgroundColor: "rgb(225, 108, 0)",
        };

  return (
    <div
      style={{
        ...property_1_0,
        ...style,
      }}
      className={styles.btnHovering_20}
    >
      <p className={styles.btnHovering_21}>button</p>
    </div>
  );
};
