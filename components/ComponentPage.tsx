import styles from "./ComponentPage.module.css";
import { Component } from "./Component";

export const ComponentPage = () => {
  return (
    <div className={styles.componentPage0}>
      <Component />
      <Component
        style={{
          overflow: undefined,
          border: undefined,
          borderWidth: "4px",
          borderRadius: "10px",
          backgroundColor: "rgb(255, 18, 18)",
          background: undefined,
          borderColor: "rgb(105, 135, 240)",
          boxShadow: "0pxpx 4pxpx 4pxpx  rgb(0, 255, 71, 1.00)",
          filter: undefined,
        }}
      />
    </div>
  );
};
