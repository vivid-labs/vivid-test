import styles from "./TabBar.module.css";
import { Tabs } from "./Tabs";
export const TabBar = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.tabBarContainer} style={override}>
    <Tabs
      property_1="Default"
      override={{
        height: "fit-content",
        width: "fit-content",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    />
   </div> 
  );
};
