import styles from "./Option.module.css";
export const Option = ({
  override,
  color,
  text,
}: {
  override?: React.CSSProperties;
  color: string;
  text: string;
}) => {
  const badgeColor = {
    Gray: {
      borderColor: "rgb(226, 226, 226)",
      backgroundColor: "rgb(251, 251, 251)",
    },
    Orange: {
      borderColor: "rgb(246, 215, 186)",
      backgroundColor: "rgb(249, 230, 212)",
    },
    Green: {
      borderColor: "rgb(168, 245, 197)",
      backgroundColor: "rgb(199, 250, 218)",
    },
  }[color];
  return (
    <div className={styles.optionComponent} style={override}>
      <div
        className={styles.badge}
        style={{
          ...badgeColor,
        }}
      >
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
