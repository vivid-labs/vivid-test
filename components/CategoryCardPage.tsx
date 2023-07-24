import { CategoryCard } from "./CategoryCard";
import { Monkey } from "./Monkey";
import { Swatches } from "./Swatches";
export const CategoryCardPage = ({ override }: { override?: any }) => {
  return (
    <CategoryCard
      property_1="Category Card Small"
      categoryImage={<Monkey figma-id="7:" />}
      categoryName="Collectibles"
      categoryIcon={<Swatches figma-id="7:" />}
      override={{
        width: "100%",
      }}
      figma-id="7:1962:8849"
    />
  );
};
