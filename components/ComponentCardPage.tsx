import { ComponentCard } from "./ComponentCard";

export const ComponentCardPage = () => {
  return (
    <ComponentCard
      colors="Figma"
      size="Large"
      draggable={true}
      instance={<Name />}
      text="Card"
    />
  );
};
