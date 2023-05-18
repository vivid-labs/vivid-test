import { CategoryCard } from "./CategoryCard";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { PaintBrush } from "./PaintBrush";

export const CategoryCardPage = () => {
  return (
    <CategoryCard
      property_1="Category Card"
      categoryImage={<ImagePlaceholder />}
      categoryIcon={<PaintBrush />}
      categoryName="Category"
    />
  );
};
