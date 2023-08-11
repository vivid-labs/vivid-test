import styles from "./Screen.module.css";
import screenshot_2023_08_11At_3_27_1 from "./screenshot_2023_08_11At_3_27_1.png";
import screenshot_2023_08_11At_3_27_2 from "./screenshot_2023_08_11At_3_27_2.png";
export const Screen = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.screenComponent} style={override}>
      <div className={styles.name}>
        <img
          className={styles.screenshot_2023_08_11At_3_27_1}
          src={screenshot_2023_08_11At_3_27_1.src}
        />
        <p className={styles.anneliPriest}>Anneli Priest</p>
      </div>
      <p className={styles.viewFullProfile}>VIEW FULL PROFILE</p>
      <div className={styles.frame_1}>
        <div className={styles.assessment}>
          <p className={styles.aiSummary}>AI Summary</p>
        </div>
        <p
          className={styles.thisSummaryIsAiGeneratedAndMayNotBeEntirelyAccurate}
        >
          This summary is AI-generated and may not be entirely accurate.
        </p>
        <div className={styles.summary}>
          <p
            className={
              styles.anneliExcelsInManagingTechnicalTeamsButSheHasLessExperienceBuildingTeamsFromTheGroundUp
            }
          >
            Anneli excels in managing technical teams, but she has less
            experience building teams from the ground-up.
          </p>
        </div>
      </div>
      <div className={styles.assessmentDiv}>
        <p className={styles.recruiterAssessment}>Recruiter Assessment</p>
      </div>
      <p className={styles.wednesdayJuly_13_2016At_4_03pm}>
        Wednesday, July 13 2016 at 4:03pm
      </p>
      <p className={styles.addedByBobMorowitz}>Added By: Bob Morowitz</p>
      <div className={styles.screenshot_2023_08_11At_3_27_2}>
        <img
          className={styles.screenshot_2023_08_11At_3_27_2Image}
          src={screenshot_2023_08_11At_3_27_2.src}
        />
      </div>
      <p className={styles.saaS}>SaaS</p>
      <p
        className={
          styles.anneliHasWorkedAtSeveralCompaniesThatProvideSoftwareAsAServiceSolutionsRecentlySheHelpedScaleASaaSProductFrom_3_500UsersToOver_100_000
        }
      >
        Anneli has worked at several companies that provide software-as-a
        service solutions. Recently, she helped scale a SaaS product from 3,500
        users to over 100,000.
      </p>
      <p className={styles.operationalExpertise}>Operational Expertise</p>
      <p
        className={
          styles.sheIsCurrentlyManagingATeamOf_20ItProfessionalsSheBuildThisTeamFromTheGroundUp
        }
      >
        She is currently managing a team of 20 IT professionals. She build this
        team from the ground up.
      </p>
    </div>
  );
};
