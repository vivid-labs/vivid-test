import styles from "./Property_1DefaultPage.module.css";
import { Avatar } from "./Avatar";
import { Avatar_14 } from "./Avatar_14";

export const Property_1DefaultPage = () => {
  return (
    <div className={styles.property_1DefaultPage0}>
      <div className={styles.property_1DefaultPage1}>
        <Avatar property_1="Big" avatarPhoto={<Avatar_14 />} />
      </div>
      <div className={styles.property_1DefaultPage2}>
        <p className={styles.property_1DefaultPage3}>Dish Studio</p>
        <div className={styles.property_1DefaultPage4}>
          <p className={styles.property_1DefaultPage5}>Total Sales:</p>
          <p className={styles.property_1DefaultPage6}>34.53 ETH</p>
        </div>
      </div>
      <div className={styles.property_1DefaultPage7}>
        <p className={styles.property_1DefaultPage8}>1</p>
      </div>
    </div>
  );
};
