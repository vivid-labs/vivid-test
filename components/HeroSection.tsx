import styles from "./HeroSection.module.css";
import heroSection from "./heroSection.png";
import { Navigation } from "./Navigation";
import { Button } from "./Button";
import { Feature } from "./Feature";
import { VolumeDown } from "./VolumeDown";
import { Program } from "./Program";
import { Home } from "./Home";
export const HeroSection = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  const featureProps = [
    {
      moreTitle: "Select guide",
      description: "Travel on your own. Use the services of an audio guide.",
      title: "Audio Guide",
      icon: <VolumeDown />,
    },
    {
      moreTitle: "Select program",
      description: "Choose a travel program that is right for you.",
      title: "Programs",
      icon: <Program />,
    },
    {
      moreTitle: "Learn more",
      description: "Book hotels and restaurants at the best prices",
      title: "Hotels & Restaurant",
      icon: <Home />,
    },
  ];
  return (
    <div className={styles.heroSectionComponent} style={override}>
      <img className={styles.image} src={heroSection.src} />
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
      <Button color="White" />
      <div className={styles.features}>
        {featureProps.map((props, i) => (
          <Feature {...props} key={i} />
        ))}
      </div>
    </div>
  );
};
