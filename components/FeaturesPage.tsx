import styles from "./FeaturesPage.module.css";
import { Feature } from "./Feature";

export const FeaturesPage = () => {
  return (
    <div className={styles.featuresPage0}>
      <Feature
        moreTitle="Select guide"
        description="Travel on your own. Use the services of an audio guide."
        title="Audio Guid"
        icon="7:13"
      />
      <Feature
        moreTitle="Select program"
        description="Choose a travel program that is right for you."
        title="Programs"
        icon="7:64"
      />
      <Feature
        moreTitle="Learn more"
        description="Book hotels and restaurants at the best prices"
        title="Hotels & Restaurant"
        icon="7:70"
      />
    </div>
  );
};
