import styles from "./Tabs.module.css";
import { Tab } from "./Tab";

export const Tabs = ({
  override,
  property_1,
}: {
  override?: React.CSSProperties;
  property_1: string;
}) => {
  const tabProps = [
    {
      state: "active",
      number: "302",
      text: "Created",
    },
    {
      state: "inactive",
      number: "302",
      text: "Created",
    },
    {
      state: "inactive",
      number: "302",
      text: "Created",
    },
  ];
  const tabProps1 = [
    {
      state: "inactive",
      number: "302",
      text: "Created",
    },
    {
      state: "active",
      number: "302",
      text: "Created",
    },
    {
      state: "inactive",
      number: "302",
      text: "Created",
    },
  ];
  const tabProps2 = [
    {
      state: "inactive",
      number: "302",
      text: "Created",
    },
    {
      state: "inactive",
      number: "302",
      text: "Created",
    },
    {
      state: "active",
      number: "302",
      text: "Created",
    },
  ];
  switch (property_1) {
    case "Default":
      return (
        <div className={styles.tabsContainer} style={override}>
          {tabProps.map((props, i) => (
            <Tab {...props} key={i} />
          ))}
        </div>
      );
    case "Variant2":
      return (
        <div className={styles.variant2Container} style={override}>
          {tabProps1.map((props, i) => (
            <Tab {...props} key={i} />
          ))}
        </div>
      );
    case "Variant3":
      return (
        <div className={styles.variant3Container} style={override}>
          {tabProps2.map((props, i) => (
            <Tab {...props} key={i} />
          ))}
        </div>
      );
    default:
      return null;
  }
};
