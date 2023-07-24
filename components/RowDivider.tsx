import styles from "./RowDivider.module.css";
import colorsWeb from "./colorsWeb.svg";
import colorsFigma from "./colorsFigma.svg";
export const RowDivider = ({
  override,
  colors,
}: {
  override?: any;
  colors: string;
}) => {
  let rowDividerSrc;
  if (colors === "Web") {
    rowDividerSrc = colorsWeb;
  } else {
    rowDividerSrc = colorsFigma;
  }
  return (
    <img
      src={rowDividerSrc.src}
      style={override}
      className={styles.rowDivider}
      figma-id="7:38:2225"
    />
  );
};
