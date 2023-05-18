import styles from "./Tab.module.css";

export const Tab = ({
  state,
  text,
  number,
}: {
  state: string;
  text: string;
  number: string;
}) => {
  const state_0 = {
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
  const state_1 = {
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
  const state_2 = {
    inactive: {},
    hover: {
      borderStyle: "solid",
      borderColor: "rgb(59, 59, 59)",
    },
    active: {
      borderStyle: "solid",
      borderColor: "rgb(133, 133, 132)",
    },
  }[state];

  return (
    <div style={state_2} className={styles.tab0}>
      <p style={state_0} className={styles.tab1}>
        {text}
      </p>
      <div style={state_1} className={styles.tab2}>
        <p className={styles.tab3}>{number}</p>
      </div>
    </div>
  );
};
