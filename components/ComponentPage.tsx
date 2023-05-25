import styles from "./ComponentPage.module.css";
import { Component } from "./Component";

export const ComponentPage = () => {
  return (
    <div style={style} className={styles.componentPage0}>
      <Component />
      <Component
        style={{
          borderWidth: "4px",
          borderRadius: "10px",
          backgroundColor: "rgb(255, 18, 18)",
          borderColor: "rgb(105, 135, 240)",
          boxShadow: "0pxpx 4pxpx 4pxpx  rgb(0, 255, 71, 1.00)",
        }}
      />
    </div>
  );
};
