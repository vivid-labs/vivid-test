import styles from "./Tab.module.css";
export const Tab = ({
  override,
  state,
  text,
  number,
}: {
  override?: React.CSSProperties;
  state: string;
  text: string;
  number: string;
}) => {
  const createdState = {
    inactive: {
      color: "rgb(133, 133, 132)",
    },
    hover: {
      color: "rgb(255, 255, 255)",
    },
    active: {
      color: "rgb(255, 255, 255)",
    },
  }[state];
  const frame_81State = {
    inactive: {
      backgroundColor: "rgb(59, 59, 59)",
    },
    hover: {
      backgroundColor: "rgb(59, 59, 59)",
    },
    active: {
      backgroundColor: "rgb(133, 133, 132)",
    },
  }[state];
  const tabState = {
    inactive: {},
    hover: {
      borderStyle: "solid",
      borderColor: "rgb(59, 59, 59)",
      borderBottomWidth: "2px",
    },
    active: {
      borderStyle: "solid",
      borderColor: "rgb(133, 133, 132)",
      borderBottomWidth: "2px",
    },
  }[state];
  return (
    <div
     className={styles.numberText}
     style={{
       ...tabState,
       ...override,
     }}
   >
    <p className={styles.tabComponent} style={createdState}>
      {text}
    </p>
    <div className={styles.frameContainer} style={frame_81State}>
      <p className={styles.created}>{number}</p>
    </div>
   </div> 
  );
};
