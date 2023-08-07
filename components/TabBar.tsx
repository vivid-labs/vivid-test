import styles from "./TabBar.module.css";
import { Tab } from "./Tab";
export const TabBar = ({ override }: { override?: React.CSSProperties }) => {
  const tabProps = [
    {
      state: "active",
      number: "302",
      text: "Created",
      override: {
        height: "60px",
        width: "fit-content",
        position: "absolute",
        top: "0px",
        left: "0px",
      },
    },
    {
      state: "inactive",
      number: "67",
      text: "owned",
      override: {
        height: "60px",
        width: "fit-content",
        position: "absolute",
        top: "0px",
        left: "212px",
      },
    },
    {
      state: "inactive",
      number: "4",
      text: "Collection",
      override: {
        height: "60px",
        width: "fit-content",
        position: "absolute",
        top: "0px",
        left: "404px",
      },
    },
  ];
  return (
    <div className={styles.tabBarComponent} style={override}>
      <div className={styles.tabs}>
        {tabProps.map((props, i) => (
          <Tab {...props} key={i} />
        ))}
      </div>
    </div>
  );
};
