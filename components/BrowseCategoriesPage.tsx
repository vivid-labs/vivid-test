import { BrowseCategories } from "./BrowseCategories";

export const BrowseCategoriesPage = ({ style }: { style?: any }) => {
  return (
    <BrowseCategories
      screen="Desktop"
      style={{
        height: "fit-content",
        width: "1280px",
      }}
    />
  );
};
