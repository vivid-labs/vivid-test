import { ComponentCard } from "./ComponentCard";
import { Button } from "./Button";
export const ComponentCardPage = ({ override }: { override?: any }) => {
  return (
    <ComponentCard
      colors="Zinc"
      size="Large"
      draggable={true}
      instance={<Button size="Large" hover="True" />}
      text="Card"
      override={{
        width: "100%",
      }}
    />
  );
};
