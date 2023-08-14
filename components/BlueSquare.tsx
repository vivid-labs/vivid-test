import styles from "./BlueSquare.module.css";
export const BlueSquare = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <div className={styles.blueSquareComponent} style={override} />;
};
