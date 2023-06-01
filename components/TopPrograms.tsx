import styles from "./TopPrograms.module.css";
import { City } from "./City";
import { Lake } from "./Lake";
import { Camping } from "./Camping";
import { Jungle } from "./Jungle";
import { Berlin } from "./Berlin";

export const TopPrograms = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.topPrograms}>
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
          backgroundImage={<Lake />}
          title="Mountains, Canada"
          price="$80"
          time="3 hours"
          guideName="Tim Hencordin"
          guidePosition="City Guide"
        />
        <City
          backgroundImage={<Camping />}
          title="Camping"
          price="$80"
          time="3 hours"
          guideName="Tim Hencordin"
          guidePosition="City Guide"
          style={{
            height: "360px",
            width: "376px",
          }}
        />
        <City
          backgroundImage={<Jungle />}
          title="Jungle, Sweden"
          price="$80"
          time="3 hours"
          guideName="Tim Hencordin"
          guidePosition="City Guide"
          style={{
            height: "180px",
            width: "376px",
          }}
        />
        <City
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
