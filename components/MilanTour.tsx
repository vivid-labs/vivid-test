import styles from "./MilanTour.module.css";

export const MilanTour = ({ override }: { override?: any }) => {
  return (
    <p style={override} className={styles.milanTour}>
      MilanTour
    </p>
  );
};
