import styles from "./Button.module.css";

export const Button = ({
  override,
  color,
}: {
  override?: any;
  color: string;
}) => {
  const startToExploreColor =
    color === "White"
      ? {
          color: "rgb(13, 17, 20)",
        }
      : {
          color: "rgb(255, 255, 255)",
        };
  const buttonColor =
    color === "White"
      ? {
          backgroundColor: "rgb(255, 255, 255)",
        }
      : {
          backgroundColor: "rgb(32, 35, 38)",
        };

  return (
   (<div
     style={{
       ...buttonColor,
       ...override,
     }}
     className={styles.container}
   >
    <p style={startToExploreColor} className={styles.exploreLabel}>
      Start to explore
    </p>
   </div>)
  );
};
