import styles from "./SwitzerlandHasNeverBeenSoAffordable.module.css";

export const SwitzerlandHasNeverBeenSoAffordable = ({
  override,
}: {
  override?: any;
}) => {
  return (<p style={override} className={styles.mainHeading}>Switzerland Has Never Been So Affordable</p>);
};
