import { ComponentCard } from "./ComponentCard";
import { Delete } from "./Delete";
export const ComponentCardPage = ({ override }: { override?: any }) => {
  return (
    <ComponentCard
      colors="Figma"
      size="Small"
      draggable={true}
      instance={<Delete figma-id="3:" />}
      text="Card"
      override={{
        width: "100%",
      }}
      figma-id="3:12:30"
    />
  );
};
