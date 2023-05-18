import { ComponentCard } from "./ComponentCard";
import { PlaceholderImage } from "./PlaceholderImage";

export const ComponentCardPage = () => {
  return (
    <ComponentCard
      colors="Figma"
      size="Large"
      draggable={true}
      instance={<PlaceholderImage />}
      text="Card"
    />
  );
};
