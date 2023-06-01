import { ComponentCard } from "./ComponentCard";
import { PlaceholderImage } from "./PlaceholderImage";

export const ComponentCardPage = ({ style }: { style?: any }) => {
  return (
    <ComponentCard
      colors="Figma"
      size="Small"
      draggable={true}
      instance={<PlaceholderImage />}
      text="Card"
      style={{
        height: "114px",
        width: "238px",
      }}
    />
  );
};
