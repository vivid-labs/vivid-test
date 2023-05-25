import styles from "./InfoCard.module.css";
import { StartEarningIcon } from "./StartEarningIcon";

export const InfoCard = ({
  property_1,
  icon,
  bodyText,
}: {
  property_1: string;
  icon: any;
  bodyText: string;
}) => {
  const property_1_0 = {
    "Info Card": {
      textAlign: "center",
      fontSize: "22px",
    },
    "Info Card/Small": {
      textAlign: "center",
      fontSize: "16px",
    },
    "Info Card/Horizontal": {
      fontSize: "16px",
    },
  }[property_1];
  const property_1_1 = {
    "Info Card": {
      textAlign: "center",
      fontSize: "16px",
    },
    "Info Card/Small": {
      textAlign: "center",
      fontSize: "12px",
    },
    "Info Card/Horizontal": {
      fontSize: "12px",
    },
  }[property_1];
  const property_1_2 = {
    "Info Card": {
      alignItems: "center",
      width: "100%",
    },
    "Info Card/Small": {
      alignItems: "center",
      width: "100%",
    },
    "Info Card/Horizontal": {
      alignItems: "start",
      flex: "1 1 0%",
    },
  }[property_1];
  const property_1_3 = {
    "Info Card": {
      flexDirection: "column",
      justifyContent: "start",
      paddingLeft: "30px",
      paddingRight: "30px",
      paddingTop: "10px",
      paddingBottom: "30px",
      width: "330px",
    },
    "Info Card/Small": {
      flexDirection: "column",
      justifyContent: "start",
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "10px",
      paddingBottom: "30px",
      width: "198px",
    },
    "Info Card/Horizontal": {
      flexDirection: "row",
      justifyContent: "center",
      padding: "20px",
      width: "315px",
    },
  }[property_1];

  return (
    <div style={property_1_3} className={styles.infoCard0}>
      {icon}
      <div style={property_1_2} className={styles.infoCard1}>
        <p style={property_1_0} className={styles.infoCard2}>
          Setup Your wallet
        </p>
        <p style={property_1_1} className={styles.infoCard3}>
          {bodyText}
        </p>
      </div>
    </div>
  );
};
