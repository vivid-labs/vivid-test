import styles from "./Button.module.css";
export const Button = ({
  override,
  color,
}: {
  override?: React.CSSProperties;
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
    <div
     className={styles.buttonComponent}
     style={{
       ...buttonColor,
       ...override,
     }}
   >
    <p
      className={styles.buttonStartToExplore}
      style={{
        ...startToExploreColor,
      }}
    >
      Start to explore
    </p>
   </div> 
  );
};
