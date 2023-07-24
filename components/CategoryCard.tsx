import styles from "./CategoryCard.module.css";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { ImagePlaceholderComponent } from "./ImagePlaceholderComponent";
import { PaintBrush } from "./PaintBrush";
import { Planet } from "./Planet";
import { ImagePlaceholderComponent1 } from "./ImagePlaceholderComponent1";
import { ImagePlaceholderComponent2 } from "./ImagePlaceholderComponent2";
export const CategoryCard = ({
  override,
  property_1,
  categoryImage,
  categoryIcon,
  categoryName,
}: {
  override?: any;
  property_1: string;
  categoryImage: any;
  categoryIcon: any;
  categoryName: string;
}) => {
  switch (property_1) {
    case "Category Card":
      return (
        <div
          style={override}
          className={styles.categoryCard}
          figma-id="7:1515:3488"
        >
          <div className={styles.photoAndIcon} figma-id="7:1515:3461">
            {categoryImage}
            <div className={styles.categoryIcon} figma-id="7:1515:3463">
              {categoryIcon}
            </div>
          </div>
          <div className={styles.collectionName} figma-id="7:1515:3466">
            <p className={styles.categoryName} figma-id="7:1515:3469">
              {categoryName}
            </p>
          </div>
        </div>
      );
    case "Category Card Small":
      return (
        <div
          style={override}
          className={styles.categoryCardComponent}
          figma-id="7:1614:8055"
        >
          <div className={styles.photoAndIconDiv} figma-id="7:1614:8056">
            {categoryImage}
            <div className={styles.categoryIconDiv} figma-id="7:1614:8058">
              {categoryIcon}
            </div>
          </div>
          <div className={styles.categoryNameDiv} figma-id="7:1614:8061">
            <p className={styles.categoryNameText} figma-id="7:1614:8064">
              {categoryName}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};
