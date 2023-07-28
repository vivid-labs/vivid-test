import styles from "./CompoundPropertyStyles.module.css";
export const CompoundPropertyStyles = ({
  override,
  rank,
  greek,
}: {
  override?: any;
  rank: string;
  greek: string;
}) => {
  const compoundPropertyStylesRank =
    rank === "First"
      ? {
          borderStyle: "solid",
          borderColor: "rgb(255, 255, 255)",
          borderWidth: "2px",
          backgroundColor: "rgb(255, 0, 0)",
        }
      : {
          backgroundColor: "rgb(0, 255, 0)",
        };
  const compoundPropertyStylesDivGreek =
    greek === "Alpha"
      ? {
          backgroundColor: "rgb(0, 255, 255)",
        }
      : {
          backgroundColor: "rgb(0, 255, 0)",
        };
  return (
    <div
      style={{
        ...compoundPropertyStylesRank,
        ...compoundPropertyStylesDivGreek,
        ...override,
      }}
      className={styles.compoundPropertyStyles}
      figma-id="2:16:25"
    />
  );
};
