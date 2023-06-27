import styles from "./HeroSection.module.css";
import heroSection from "./heroSection.png";
import { Navigation } from "./Navigation";
import { Button } from "./Button";
import { Feature } from "./Feature";
import { VolumeDown } from "./VolumeDown";
import { Program } from "./Program";
import { Home } from "./Home";

export const HeroSection = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.heroSection}>
      <img
        src={heroSection.src}
        className={
          styles.objectFitCoverOpacity_1e49588a32f965b671dd350d0d37e6396ac7f5f56
        }
      />
      <Navigation
        override={{
          height: "fit-content",
          width: "100%",
        }}
      />
      <div className={styles.headings}>
        <p className={styles.switzerlandHasNeverBeenSoAffordable}>
          Switzerland Has Never Been So Affordable
        </p>
        <p
          className={
            styles.discoverSwitzerlandChooseTheBestProgramsGuidesHotelsAndRestaurants
          }
        >
          Discover Switzerland. Choose the best programs, guides, hotels and
          restaurants.
        </p>
      </div>
      <Button
        color="White"
        override={{
          height: "fit-content",
          width: "fit-content",
        }}
      />
      <div className={styles.features}>
        <Feature
          title="Audio Guide"
          description="Travel on your own. Use the services of an audio guide."
          icon={<VolumeDown />}
        />
        <Feature
          title="Programs"
          description="Choose a travel program that is right for you."
          icon={<Program />}
        />
        <Feature
          title="Hotels & Restaurant"
          description="Book hotels and restaurants at the best prices"
          icon={<Home />}
        />
      </div>
    </div>
  );
};
