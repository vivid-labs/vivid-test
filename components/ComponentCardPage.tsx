import { ComponentCard } from "./ComponentCard";
import { Button } from "./Button";

export const ComponentCardPage = () => {
  return (
    <ComponentCard
      colors="Figma"
      size="Large"
      draggable={true}
      instance={<Button size="Large" hover="False" />}
      text="Card"
    />
  );
};
