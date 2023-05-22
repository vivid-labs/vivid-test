import styles from "./CardSection.module.css";
import { Card } from "./Card";

export const CardSection = ({
  screenSize,
  item_2,
}: {
  screenSize: string;
  item_2: any;
}) => {
  const screenSize_0 =
    screenSize === "Desktop"
      ? {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "start",
        }
      : {
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          gap: "30px",
        };
  const screenSize_1 =
    screenSize === "Desktop"
      ? {
          justifyContent: "center",
          alignItems: "start",
          width: "1440px",
        }
      : {
          justifyContent: "start",
          alignItems: "center",
          width: "400px",
        };

  return (
    <div style={screenSize_1} className={styles.cardSection0}>
      <p className={styles.cardSection1}>Check out our cards:</p>
      <div style={screenSize_0} className={styles.cardSection2}>
        {item_2}
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
