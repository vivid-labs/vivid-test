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
};
