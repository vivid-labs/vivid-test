import styles from "./DashedSeparator.module.css";
import dashedSeparator from "./dashedSeparator.svg";
export const DashedSeparator = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img
     className={styles.dashedSeparatorImage}
     src={dashedSeparator.src}
     style={override}
   /> 
  );
};
