import styles from "./Homepage.module.css";
import intro1_1 from "./intro1_1.png";
import suggestions_1 from "./suggestions_1.png";
import { EvLogoGray } from "./EvLogoGray";
import dashboard_1 from "./dashboard_1.png";
import image_16 from "./image_16.png";
import ecoLabel_1 from "./ecoLabel_1.png";
import infiniteGoodsLogo_2 from "./infiniteGoodsLogo_2.png";
import home_1 from "./home_1.png";
import profile_1 from "./profile_1.png";
import nycolorLogo from "./nycolorLogo.png";
import arrow_9Image3 from "./arrow_9Image3.svg";
import arrow_9Image2 from "./arrow_9Image2.svg";
import arrow_9Image1 from "./arrow_9Image1.svg";
import arrow_9Image from "./arrow_9Image.svg";
import arrow_9 from "./arrow_9.svg";
import arrow_8 from "./arrow_8.svg";

export const Homepage = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.homepageComponent} style={override}>
      <div className={styles.frame_28}>
        <RachelXueruiMichelson />
        <div className={styles.frame_27}>
          <AiChatDisclaimer />
          <div className={styles.frame_29}>
            <ExpertVoice />
            <Roarreg />
            <InfiniteGoods />
            <Nycolor />
          </div>
          <div className={styles.frame_19}>
            <p className={styles.otherProjects}>Other projects</p>
            <div className={styles.frame_18}>
              <ExpertVoiceEnhancingTheAndroidShoppingCartExperience />
              <ExplainingTheMethodologyBehindSustainabilityScoring />
              <ConsolidatingRecommendedSpots />
              <InfiniteGoodsComponent />
              <MappingHistoricalNewYork />
              <SpectatorPublishingCompany />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RachelXueruiMichelson = () => (
  <div className={styles.frame_32}>
    <div className={styles.frame_33}>
      <p className={styles.rachelXueruiMichelson}>RACHEL XUERUI MICHELSON</p>
    </div>
    <div className={styles.frame_25}>
      <p className={styles.work}>Work</p>
      <p className={styles.about}>About</p>
      <p className={styles.resume}>Resume</p>
    </div>
  </div>
);

const AiChatDisclaimer = () => (
  <div className={styles.frame_21}>
    <p className={styles.hiImRachelimportant}>Hi, I&amp;#39;m Rachel!</p>
    <p
      className={
        styles.imaUxDesignerAndSeniorAtColumbiaUniversityStudyingComputerScience
      }
    >
      I&amp;#39;m a UX Designer and senior at Columbia University studying
      computer science.
    </p>
  </div>
);

const ExpertVoice = () => (
  <div className={styles.eva}>
    <div className={styles.rectangle_11} />
    <div className={styles.frame_25Div}>
      <div className={styles.frame_9}>
        <p className={styles.expertvoice}>EXPERTVOICE</p>
        <p className={styles.helpingConsumersConfidentlyMakePurchaseDecisions}>
          Helping consumers confidently make purchase decisions
        </p>
      </div>
      <div className={styles.frame_31}>
        <img className={styles.intro1_1} src={intro1_1.src} />
        <img className={styles.suggestions_1} src={suggestions_1.src} />
      </div>
    </div>
    <div>
      <div className={styles.ellipse_1} />
      <EvLogoGray
        override={{
          height: "90px",
          width: "89px",
          position: "absolute",
          top: "311.4px",
          left: "865.2px",
        }}
      />
    </div>
  </div>
);

const Roarreg = () => (
  <div className={styles.roarreg}>
    <div className={styles.rectangle_11Div} />
    <div className={styles.frame_23}>
      <div className={styles.frame_9Div}>
        <p className={styles.roarregText}>ROARREG</p>
        <p className={styles.streamliningTheCourseRegistrationProcess}>
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
);

const InfiniteGoods = () => (
  <div className={styles.ecolabel}>
    <div className={styles.rectangle_11Div1} />
    <div className={styles.frame_24}>
      <div className={styles.frame_9Div1}>
        <p className={styles.infiniteGoods}>INFINITE GOODS</p>
        <p className={styles.improvingAScoringSystemForProductSustainability}>
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
);

const Nycolor = () => (
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
      <img className={styles.nycolorLogoImage} src={nycolorLogo.src} />
    </div>
  </div>
);

const ExpertVoiceEnhancingTheAndroidShoppingCartExperience = () => (
  <div className={styles.group_31}>
    <div className={styles.frame_12}>
      <p className={styles.expertvoiceText}>EXPERTVOICE</p>
      <p className={styles.enhancingTheAndroidShoppingCartExperience}>
        Enhancing the Android shopping cart experience
      </p>
    </div>
    <img className={styles.arrow_9} src={arrow_9Image3.src} />
  </div>
);

const ExplainingTheMethodologyBehindSustainabilityScoring = () => (
  <div className={styles.group_29}>
    <div className={styles.frame_12Div}>
      <p className={styles.infiniteGoodsText}>INFINITE GOODS</p>
      <p className={styles.explainingTheMethodologyBehindSustainabilityScoring}>
        Explaining the methodology behind sustainability scoring
      </p>
    </div>
    <img className={styles.arrow_9Image} src={arrow_9Image2.src} />
  </div>
);

const ConsolidatingRecommendedSpots = () => (
  <div className={styles.group_32}>
    <div className={styles.frame_12Div1}>
      <p className={styles.hotspot}>HOTSPOT</p>
      <p className={styles.consolidatingNewYorkersRecommendedSpots}>
        Consolidating New Yorkers&#x2019; recommended spots
      </p>
    </div>
    <img className={styles.arrow_9Image1} src={arrow_9Image1.src} />
  </div>
);

const InfiniteGoodsComponent = () => (
  <div className={styles.group_30}>
    <div className={styles.frame_12Div2}>
      <p className={styles.infiniteGoodsText1}>INFINITE GOODS</p>
      <p className={styles.whoWeArePage}>Who we are page</p>
    </div>
    <img className={styles.arrow_9Image2} src={arrow_9Image.src} />
  </div>
);

const MappingHistoricalNewYork = () => (
  <div className={styles.group_27}>
    <div className={styles.frame_12Div3}>
      <p className={styles.mappingHistoricalNewYork}>
        MAPPING HISTORICAL NEW YORK
      </p>
      <p className={styles.reorganizingTheHomepageToMaximizeMapSpace}>
        Reorganizing the homepage to maximize map space
      </p>
    </div>
    <img className={styles.arrow_9Image3} src={arrow_9.src} />
  </div>
);

const SpectatorPublishingCompany = () => (
  <div className={styles.group_26}>
    <div className={styles.frame_10}>
      <p className={styles.spectatorPublishingCompany}>
        SPECTATOR PUBLISHING COMPANY
      </p>
      <p className={styles.paintedDoorTest}>Painted door test</p>
    </div>
    <img className={styles.arrow_8} src={arrow_8.src} />
  </div>
);
