import styles from "./Button.module.css";

export const Button = ({ property_1 }: { property_1: string }) => {
  const property_1_0 = {
    "Button primary": {
      color: "rgb(255, 255, 255)",
    },
    "Button secondary": {
      color: "rgb(0, 0, 0)",
    },
    "Button tertiary": {
      color: "rgb(0, 0, 0)",
    },
  }[property_1];
  const property_1_1 = {
    "Button primary": {
      backgroundColor: "rgb(25, 26, 35)",
    },
    "Button secondary": {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "rgb(25, 26, 35)",
    },
    "Button tertiary": {
      backgroundColor: "rgb(185, 255, 102)",
    },
  }[property_1];

  return (
    <div style={property_1_1} className={styles.button0}>
      <p style={property_1_0} className={styles.button1}>
        Label
      </p>
    </div>
  );
};
