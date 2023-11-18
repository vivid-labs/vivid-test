import styles from "./Calendar.module.css";
import calendar from "./calendar.svg";
export const Calendar = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img
      className={styles.calendarComponent}
      src={calendar.src}
      style={override}
    />
  );
};
