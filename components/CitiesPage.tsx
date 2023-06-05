import styles from "./CitiesPage.module.css";
import { City } from "./City";
import { Ski } from "./Ski";
import { Jungle } from "./Jungle";

export const CitiesPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.citiesPage}>
      <City
        size="Medium"
        backgroundImage={<Ski />}
        title="Skiing"
        price="$360"
        time="3 hours"
        guideName="Jorge Zreik"
        guidePosition="City Guide"
      />
      <City
        size="Small"
        backgroundImage={<Jungle />}
        title="Forest"
        price="$20"
        time="6 hours"
        guideName="Tim Hencordin"
        guidePosition="City Guide"
      />
    </div>
  );
};
