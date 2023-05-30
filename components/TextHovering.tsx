import styles from "./TextHovering.module.css";

export const TextHovering = ({
  style,
  property_1,
}: {
  style: any;
  property_1: string;
}) => {
  const property_1_0 =
    property_1 === "default"
      ? {
          color: "rgb(96, 96, 96)",
        }
      : {
          color: "rgb(239, 121, 12)",
        };

  return (
    <div style={style} className={styles.textHovering0}>
      <div className={styles.textHovering1}>
        <p style={property_1_0} className={styles.textHovering2}>
          button
        </p>
      </div>
      <div className={styles.textHovering3} />
    </div>
  );
};
