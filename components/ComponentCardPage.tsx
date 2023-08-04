import { ComponentCard } from "./ComponentCard";
import { Delete } from "./Delete";
export const ComponentCardPage = ({ override }: { override?: ReactNode }) => {
  return (
    <ComponentCard
      colors="Figma"
      size="Small"
      instance={<Delete />}
      draggable={true}
      text="Card"
      override={{
        width: "100%",
      }}
    />
  );
};
