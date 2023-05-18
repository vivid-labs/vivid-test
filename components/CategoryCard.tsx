import styles from "./CategoryCard.module.css";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { PaintBrush } from "./PaintBrush";

export const CategoryCard = ({
  property_1,
  categoryImage,
  categoryIcon,
  categoryName,
}: {
  property_1: string;
  categoryImage: any;
  categoryIcon: any;
  categoryName: string;
}) => {
  const property_1_0 =
    property_1 === "Category Card"
      ? {
          height: "240px",
        }
      : {
          height: "142px",
        };
  const property_1_1 =
    property_1 === "Category Card"
      ? {
          height: "240px",
        }
      : {
          height: "142px",
        };
  const property_1_2 =
    property_1 === "Category Card"
      ? {
          fontSize: "22px",
        }
      : {
          fontSize: "16px",
        };
  const property_1_3 =
    property_1 === "Category Card"
      ? {
          paddingLeft: "30px",
          paddingRight: "30px",
        }
      : {
          paddingLeft: "20px",
          paddingRight: "20px",
        };
  const property_1_4 =
    property_1 === "Category Card"
      ? {
          width: "240px",
        }
      : {
          width: "142px",
        };

  return (
    <div style={property_1_4} className={styles.categoryCard0}>
      <div style={property_1_1} className={styles.categoryCard1}>
        {categoryImage}
        <div style={property_1_0} className={styles.categoryCard2}>
          {categoryIcon}
        </div>
      </div>
      <div style={property_1_3} className={styles.categoryCard3}>
        <p style={property_1_2} className={styles.categoryCard4}>
          {categoryName}
        </p>
      </div>
    </div>
  );
};
