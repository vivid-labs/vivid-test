import styles from "./Homepage.module.css";
import dashboard_1 from "./dashboard_1.png";
import image_16 from "./image_16.png";
import intro1_1 from "./intro1_1.png";
import suggestions_1 from "./suggestions_1.png";
import { EvLogoGray } from "./EvLogoGray";
import ecoLabel_1 from "./ecoLabel_1.png";
import infiniteGoodsLogo_2 from "./infiniteGoodsLogo_2.png";
import home_1 from "./home_1.png";
import profile_1 from "./profile_1.png";
import nycolorLogo from "./nycolorLogo.png";
import arrow_9 from "./arrow_9.svg";
export const Homepage = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.homepageComponent} style={override}>
      <div className={styles.frame_28}>
        <div className={styles.frame_32}>
          <div className={styles.frame_25}>
            <p className={styles.work}>Work</p>
            <p className={styles.about}>About</p>
            <p className={styles.resume}>Resume</p>
          </div>
        </div>
        <div className={styles.frame_27}>
          <div className={styles.frame_21}>
            <p className={styles.hiImRachelimportant}>
              Hi, I&amp;#39;m Rachel!
            </p>
            <p
              className={
                styles.imaUxDesignerAndSeniorAtColumbiaUniversityStudyingComputerScience
              }
            >
              I&amp;#39;m a UX Designer and senior at Columbia University
              studying computer science.
            </p>
          </div>
          <div className={styles.frame_29}>
            <div className={styles.roarreg}>
              <div className={styles.rectangle_11} />
              <div className={styles.frame_23}>
                <div className={styles.frame_9}>
                  <p className={styles.roarregText}>ROARREG</p>
                  <p
                    className={styles.streamliningTheCourseRegistrationProcess}
                  >
                    Streamlining the course registration process
                  </p>
                </div>
                <div className={styles.group_24}>
                  <img className={styles.dashboard_1} src={dashboard_1.src} />
                  <div>
                    <img className={styles.image_16} src={image_16.src} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.eva}>
              <div className={styles.rectangle_11Div} />
              <div className={styles.frame_25Div}>
                <div className={styles.frame_9Div}>
                  <p className={styles.expertvoice}>EXPERTVOICE</p>
                  <p
                    className={
                      styles.helpingConsumersConfidentlyMakePurchaseDecisions
                    }
                  >
                    Helping consumers confidently make purchase decisions
                  </p>
                </div>
                <div className={styles.frame_31}>
                  <img className={styles.intro1_1} src={intro1_1.src} />
                  <img
                    className={styles.suggestions_1}
                    src={suggestions_1.src}
                  />
                </div>
              </div>
              <div>
                <div className={styles.ellipse_1} />
                <EvLogoGray
                  override={{
                    height: "90px",
                    width: "89px",
                    position: "absolute",
                    top: "803.4px",
                    left: "865.2px",
                  }}
                />
              </div>
            </div>
            <div className={styles.ecolabel}>
              <div className={styles.rectangle_11Div1} />
              <div className={styles.frame_24}>
                <div className={styles.frame_9Div1}>
                  <p className={styles.infiniteGoods}>INFINITE GOODS</p>
                  <p
                    className={
                      styles.improvingAScoringSystemForProductSustainability
                    }
                  >
                    Improving a scoring system for product sustainability
                  </p>
                </div>
                <div className={styles.group_36}>
                  <img className={styles.ecoLabel_1} src={ecoLabel_1.src} />
                </div>
              </div>
              <div className={styles.infiniteGoodsLogo_2}>
                <div className={styles.div} />
                <img className={styles.image} src={infiniteGoodsLogo_2.src} />
              </div>
            </div>
            <div className={styles.nycolor}>
              <div className={styles.rectangle_11Div2} />
              <div className={styles.frame_24Div}>
                <div className={styles.frame_9Div2}>
                  <p className={styles.nycolorText}>NYCOLOR</p>
                  <p className={styles.gamifyingUrbanExplorationInNewYorkCity}>
                    Gamifying urban exploration in New York City
                  </p>
                </div>
                <div className={styles.frame_30}>
                  <img className={styles.home_1} src={home_1.src} />
                  <img className={styles.profile_1} src={profile_1.src} />
                </div>
              </div>
              <div className={styles.nycolorLogo}>
                <img
                  className={styles.nycolorLogoImage}
                  src={nycolorLogo.src}
                />
              </div>
            </div>
          </div>
          <div className={styles.frame_19}>
            <p className={styles.otherProjects}>Other projects</p>
            <div className={styles.frame_18}>
              <div className={styles.group_31}>
                <div className={styles.frame_12}>
                  <p className={styles.expertvoiceText}>EXPERTVOICE</p>
                  <p
                    className={styles.enhancingTheAndroidShoppingCartExperience}
                  >
                    Enhancing the Android shopping cart experience
                  </p>
                </div>
                <img className={styles.arrow_9} src={arrow_9.src} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
