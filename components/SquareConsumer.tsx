import styles from "./SquareConsumer.module.css";
import { BlueSquare } from "./BlueSquare";
export const SquareConsumer = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.squareConsumerComponent} style={override}>
      <BlueSquare />
    </div>
  );
};
