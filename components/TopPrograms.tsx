import styles from "./TopPrograms.module.css";
import { City } from "./City";
import { Lake } from "./Lake";
import { Ski } from "./Ski";
import { Jungle } from "./Jungle";
import { Berlin } from "./Berlin";
export const TopPrograms = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.topProgramsComponent} style={override}>
    <p className={styles.topProgramsText}>Top Programs</p>
    <p
      className={
        styles.ourProgramsDescription
      }
    >
      Our programs are compiled by the best guides. Each tourist will be able
      to choose a program according to their level.
    </p>
    <div className={styles.topProgramsContainer}>
      <City
        size="Large"
        title="Mountains, Canada"
        price="$80"
        guidePosition="City Guide"
        guideName="Tim Hencordin"
        time="3 hours"
        backgroundImage={<Lake />}
      />
      <div className={styles.citiesContainer}>
        <City
          size="Medium"
          title="Skiing"
          price="$360"
          guidePosition="City Guide"
          guideName="Jorge Zreik"
          time="3 hours"
          backgroundImage={<Ski />}
        />
        <City
          size="Small"
          title="Forest"
          price="$20"
          guidePosition="City Guide"
          guideName="Tim Hencordin"
          time="6 hours"
          backgroundImage={<Jungle />}
        />
      </div>
      <City
        size="Large"
        title="Berlin"
        price="$90"
        guidePosition="City Guide"
        guideName="Keny iman"
        time="10 hours"
        backgroundImage={<Berlin />}
      />
    </div>
   </div> 
  );
};
