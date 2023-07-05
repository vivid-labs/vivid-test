import styles from "./TopPrograms.module.css";
import { City } from "./City";
import { Lake } from "./Lake";
import { Ski } from "./Ski";
import { Jungle } from "./Jungle";
import { Berlin } from "./Berlin";
export const TopPrograms = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.topPrograms}>
      <p className={styles.topProgramsText}>Top Programs</p>
      <p
        className={
          styles.ourProgramsAreCompiledByTheBestGuidesEachTouristWillBeAbleToChooseAProgramAccordingToTheirLevel
        }
      >
        Our programs are compiled by the best guides. Each tourist will be able
        to choose a program according to their level.
      </p>
      <div className={styles.topProgramsDiv}>
        <City
          size="Large"
          backgroundImage={<Lake />}
          title="Mountains, Canada"
          price="$80"
          time="3 hours"
          guideName="Tim Hencordin"
          guidePosition="City Guide"
        />
        <div className={styles.cities}>
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
        <City
          size="Large"
          backgroundImage={<Berlin />}
          title="Berlin"
          price="$90"
          time="10 hours"
          guideName="Keny iman"
          guidePosition="City Guide"
        />
      </div>
    </div>
  );
};
