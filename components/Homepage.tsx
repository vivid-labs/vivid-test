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
    <div className={styles.homepageComponentClass} style={override}>
      <div className={styles.frame28Class}>
        <WorkAboutResume />
        <div className={styles.frame27Class}>
          <IntroductoryText />
          <div className={styles.frame29Class}>
            <StreamliningTheCourseRegistrationProcess />
            <ExpertVoice />
            <ImprovingAScoringSystemForProductSustainability />
            <UrbanExploration />
          </div>
          <ExpertvoiceEnhancingTheAndroidShoppingCartExperience />
        </div>
      </div>
    </div>
  );
};

const WorkAboutResume = () => (
  <div className={styles.frame32Class}>
    <div className={styles.frame25Class}>
      <p className={styles.workClass}>Work</p>
      <p className={styles.aboutClass}>About</p>
      <p className={styles.resumeClass}>Resume</p>
    </div>
  </div>
);

const IntroductoryText = () => (
  <div className={styles.frame21Class}>
    <p className={styles.hiImRachelimportantClass}>Hi, I&amp;#39;m Rachel!</p>
    <p
      className={
        styles.imaUxDesignerAndSeniorAtColumbiaUniversityStudyingComputerScienceClass
      }
    >
      I&amp;#39;m a UX Designer and senior at Columbia University studying
      computer science.
    </p>
  </div>
);

const ExpertvoiceEnhancingTheAndroidShoppingCartExperience = () => (
  <div className={styles.frame19Class}>
    <p className={styles.otherProjectsClass}>Other projects</p>
    <div className={styles.frame18Class}>
      <div className={styles.group31Class}>
        <div className={styles.frame12Class}>
          <p className={styles.expertvoiceTextClass}>EXPERTVOICE</p>
          <p className={styles.enhancingTheAndroidShoppingCartExperienceClass}>
            Enhancing the Android shopping cart experience
          </p>
        </div>
        <img className={styles.arrow9Class} src={arrow_9.src} />
      </div>
    </div>
  </div>
);

const StreamliningTheCourseRegistrationProcess = () => (
  <div className={styles.roarregClass}>
    <div className={styles.rectangle11Class} />
    <div className={styles.frame23Class}>
      <div className={styles.frame9Class}>
        <p className={styles.roarregTextClass}>ROARREG</p>
        <p className={styles.streamliningTheCourseRegistrationProcessClass}>
          Streamlining the course registration process
        </p>
      </div>
      <div className={styles.group24Class}>
        <img className={styles.dashboard1Class} src={dashboard_1.src} />
        <div>
          <img className={styles.image16Class} src={image_16.src} />
        </div>
      </div>
    </div>
  </div>
);

const ExpertVoice = () => (
  <div className={styles.evaClass}>
    <div className={styles.rectangle11DivClass} />
    <div className={styles.frame25DivClass}>
      <div className={styles.frame9DivClass}>
        <p className={styles.expertvoiceClass}>EXPERTVOICE</p>
        <p
          className={
            styles.helpingConsumersConfidentlyMakePurchaseDecisionsClass
          }
        >
          Helping consumers confidently make purchase decisions
        </p>
      </div>
      <div className={styles.frame31Class}>
        <img className={styles.intro11Class} src={intro1_1.src} />
        <img className={styles.suggestions1Class} src={suggestions_1.src} />
      </div>
    </div>
    <div>
      <div className={styles.ellipse1Class} />
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
);

const ImprovingAScoringSystemForProductSustainability = () => (
  <div className={styles.ecolabelClass}>
    <div className={styles.rectangle11Div1Class} />
    <div className={styles.frame24Class}>
      <div className={styles.frame9Div1Class}>
        <p className={styles.infiniteGoodsClass}>INFINITE GOODS</p>
        <p
          className={
            styles.improvingAScoringSystemForProductSustainabilityClass
          }
        >
          Improving a scoring system for product sustainability
        </p>
      </div>
      <div className={styles.group36Class}>
        <img className={styles.ecoLabel1Class} src={ecoLabel_1.src} />
      </div>
    </div>
    <div className={styles.infiniteGoodsLogo2Class}>
      <div className={styles.divClass} />
      <img className={styles.imageClass} src={infiniteGoodsLogo_2.src} />
    </div>
  </div>
);

const UrbanExploration = () => (
  <div className={styles.nycolorClass}>
    <div className={styles.rectangle11Div2Class} />
    <div className={styles.frame24DivClass}>
      <div className={styles.frame9Div2Class}>
        <p className={styles.nycolorTextClass}>NYCOLOR</p>
        <p className={styles.gamifyingUrbanExplorationInNewYorkCityClass}>
          Gamifying urban exploration in New York City
        </p>
      </div>
      <div className={styles.frame30Class}>
        <img className={styles.home1Class} src={home_1.src} />
        <img className={styles.profile1Class} src={profile_1.src} />
      </div>
    </div>
    <div className={styles.nycolorLogoClass}>
      <img className={styles.nycolorLogoImageClass} src={nycolorLogo.src} />
    </div>
  </div>
);
