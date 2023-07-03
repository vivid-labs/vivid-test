import styles from "./Features.module.css";
import { Feature } from "./Feature";
import { VolumeDown } from "./VolumeDown";
import { Program } from "./Program";
import { Home } from "./Home";

export const Features = (
 {
  override
 }: {
  override?: any;
 }
) => {
 return (
   <div style={override} className={styles.featuresContainer}>
   <Feature
    title="Audio Guide"
    description="Travel on your own. Use the services of an audio guide."
    icon={<VolumeDown />} />
   <Feature
    title="Programs"
    description="Choose a travel program that is right for you."
    icon={<Program />} />
   <Feature
    title="Hotels & Restaurant"
    description="Book hotels and restaurants at the best prices"
    icon={<Home />} />
  </div> 
 );
};