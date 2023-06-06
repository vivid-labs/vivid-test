import styles from "./CategoryCard.module.css";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { PaintBrush } from "./PaintBrush";
import { ImagePlaceholderComponent1 } from "./ImagePlaceholderComponent1";

export const CategoryCard = ({
  style,
  property_1,
  categoryImage,
  categoryIcon,
  categoryName,
}: {
  style?: any;
  property_1: string;
  categoryImage: any;
  categoryIcon: any;
  categoryName: string;
}) => {
  switch (property_1) {
    case "Category Card":
      return (
        <div style={style} className={styles.categoryCard}>
          <div className={styles.photoAndIcon}>
            {categoryImage}
            <div className={styles.categoryIcon}>{categoryIcon}</div>
          </div>
          <div className={styles.collectionName}>
            <p className={styles.categoryName}>{categoryName}</p>
          </div>
        </div>
      );
    case "Category Card Small":
      return (
        <div style={style} className={styles.categoryCardComponent}>
          <div className={styles.photoAndIconDiv}>
            {categoryImage}
            <div className={styles.categoryIconDiv}>{categoryIcon}</div>
          </div>
          <div className={styles.categoryNameDiv}>
            <p className={styles.categoryNameText}>{categoryName}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};
