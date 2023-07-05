import styles from "./Features.module.css";
import { Feature } from "./Feature";
import { VolumeDown } from "./VolumeDown";
import { Program } from "./Program";
import { Home } from "./Home";
export const Features = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.featuresContainer}>
    {featureProps.map((props, i) => (
      <Feature {...props} key={i} />
    ))}
   </div> 
  );
  featureProps = [
    {
      title: "Audio Guide",
      description: "Travel on your own. Use the services of an audio guide.",
      icon: <VolumeDown />,
    },
    {
      title: "Programs",
      description: "Choose a travel program that is right for you.",
      icon: <Program />,
    },
    {
      title: "Hotels & Restaurant",
      description: "Book hotels and restaurants at the best prices",
      icon: <Home />,
    },
  ];
};
