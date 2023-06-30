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
   (<div style={override} className={styles.heroSection}>
    <img
      src={heroSection.src}
      className={
        styles.coverImage
      }
    />
    <Navigation
      override={{
        height: "fit-content",
        width: "100%",
      }}
    />
    <div className={styles.titleContainer}>
      <p className={styles.mainTitle}>
        Switzerland Has Never Been So Affordable
      </p>
      <p
        className={
          styles.subTitle
        }
      >
        Discover Switzerland. Choose the best programs, guides, hotels and
        restaurants.
      </p>
    </div>
    <Button color="White" />
    <div className={styles.featureContainer}>
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
   </div>)
  );
};
