import { ComponentCard } from "./ComponentCard";
import { Profile } from "./Profile";

export const ComponentCardPage = () => {
  return (
    <ComponentCard
      colors="Figma"
      size="Large"
      draggable={true}
      instance={<Profile />}
      text="Card"
    />
  );
};
