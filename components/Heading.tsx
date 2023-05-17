import styles from "./Heading.module.css";

export const Heading = ({ property_1 }: { property_1: string }) => {
  const property_1_0 = {
    Green: {
      color: "rgb(0, 0, 0)",
    },
    White: {
      color: "rgb(0, 0, 0)",
    },
    Black: {
      color: "rgb(255, 255, 255)",
    },
  }[property_1];
  const property_1_1 = {
    Green: {
      backgroundColor: "rgb(185, 255, 102)",
    },
    White: {
      backgroundColor: "rgb(255, 255, 255)",
    },
    Black: {
      backgroundColor: "rgb(25, 26, 35)",
    },
  }[property_1];
  const property_1_2 = {
    Green: {
      color: "rgb(0, 0, 0)",
    },
    White: {
      color: "rgb(0, 0, 0)",
    },
    Black: {
      color: "rgb(255, 255, 255)",
    },
  }[property_1];
  const property_1_3 = {
    Green: {
      backgroundColor: "rgb(185, 255, 102)",
    },
    White: {
      backgroundColor: "rgb(255, 255, 255)",
    },
    Black: {
      backgroundColor: "rgb(25, 26, 35)",
    },
  }[property_1];
  const property_1_4 = {
    Green: {
      color: "rgb(0, 0, 0)",
    },
    White: {
      color: "rgb(0, 0, 0)",
    },
    Black: {
      color: "rgb(255, 255, 255)",
    },
  }[property_1];
  const property_1_5 = {
    Green: {
      backgroundColor: "rgb(185, 255, 102)",
    },
    White: {
      backgroundColor: "rgb(255, 255, 255)",
    },
    Black: {
      backgroundColor: "rgb(25, 26, 35)",
    },
  }[property_1];

  return (
    <div className={styles.heading0}>
      <div style={property_1_1} className={styles.heading1}>
        <p style={property_1_0} className={styles.heading2}>
          Label
        </p>
      </div>
      <div style={property_1_3} className={styles.heading3}>
        <p style={property_1_2} className={styles.heading4}>
          Label
        </p>
      </div>
      <div style={property_1_5} className={styles.heading5}>
        <p style={property_1_4} className={styles.heading6}>
          Label
        </p>
      </div>
    </div>
  );
};
