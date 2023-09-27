import styles from "./Square.module.css";
export const Square = ({
  override,
  color,
  letter,
}: {
  override?: React.CSSProperties;
  color: string;
  letter: string;
}) => {
  if (color === "Blue" && letter === "A") {
    return (
      <div className={styles.squareComponent5} style={override}>
        <p className={styles.aaaText}>AAA</p>
      </div>
    );
  } else if (color === "Blue" && letter === "B") {
    return (
      <div className={styles.squareComponent4} style={override}>
        <p className={styles.bbbText}>BBB</p>
      </div>
    );
  } else if (color === "Blue" && letter === "C") {
    return (
      <div className={styles.squareComponent3} style={override}>
        <p className={styles.cccText}>CCC</p>
      </div>
    );
  } else if (color === "Red" && letter === "A") {
    return (
      <div className={styles.squareComponent2} style={override}>
        <p className={styles.aaa}>AAA</p>
      </div>
    );
  } else if (color === "Red" && letter === "B") {
    return (
      <div className={styles.squareComponent1} style={override}>
        <p className={styles.bbb}>BBB</p>
      </div>
    );
  } else if (color === "Red" && letter === "C") {
    return (
      <div className={styles.squareComponent} style={override}>
        <p className={styles.ccc}>CCC</p>
      </div>
    );
  } else {
    return null;
  }
};
