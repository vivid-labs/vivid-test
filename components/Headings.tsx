import styles from "./Headings.module.css";

export const Headings = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.container}>
    <p className={styles.title}>
      Switzerland Has Never Been So Affordable
    </p>
    <p
      className={
        styles.subtitle
      }
    >
      Discover Switzerland. Choose the best programs, guides, hotels and
      restaurants.
    </p>
   </div> 
  );
};
