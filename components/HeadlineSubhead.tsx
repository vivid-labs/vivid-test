import styles from "./HeadlineSubhead.module.css";

export const HeadlineSubhead = ({ screen }: { screen: string }) => {
  const screen_0 = {
    Desktop: {
      fontSize: "51px",
      lineHeight: "1.100000023841858em",
    },
    Tablet: {
      fontSize: "38px",
      lineHeight: "1.2000000476837158em",
    },
    Default: {
      fontSize: "28px",
      lineHeight: "1.399999976158142em",
    },
  }[screen];
  const screen_1 = {
    Desktop: {
      fontSize: "22px",
      lineHeight: "1.600000023841858em",
    },
    Tablet: {
      fontSize: "16px",
      lineHeight: "1.399999976158142em",
    },
    Default: {
      fontSize: "16px",
      lineHeight: "1.399999976158142em",
    },
  }[screen];
  const screen_2 = {
    Desktop: {
      gap: "20px",
      width: "1050px",
    },
    Tablet: {
      gap: "20px",
      width: "690px",
    },
    Default: {
      gap: "10px",
      width: "315px",
    },
  }[screen];
  const screen_3 = {
    Desktop: {
      paddingTop: "80px",
      paddingBottom: "80px",
      width: "1280px",
    },
    Tablet: {
      paddingTop: "80px",
      paddingBottom: "80px",
      width: "834px",
    },
    Default: {
      paddingTop: "30px",
      paddingBottom: "30px",
      width: "375px",
    },
  }[screen];

  return (
    <div style={screen_3} className={styles.headlineSubhead0}>
      <div style={screen_2} className={styles.headlineSubhead1}>
        <div className={styles.headlineSubhead2}>
          <p style={screen_0} className={styles.headlineSubhead3}>
            Top Creators
          </p>
        </div>
        <div className={styles.headlineSubhead4}>
          <p style={screen_1} className={styles.headlineSubhead5}>
            Check out top ranking NFT artists on the NFT Marketplace.
          </p>
        </div>
      </div>
    </div>
  );
};
