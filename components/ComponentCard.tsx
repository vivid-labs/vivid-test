import "./ComponentCard.module.css";
import { DragHandle } from "./DragHandle";
import { PlaceholderImage } from "./PlaceholderImage";

export const ComponentCard = ({
  colors,
  size,
  draggable,
  text,
}: {
  colors: string;
  size: string;
  draggable: boolean;
  text: string;
}) => {
  const colors_0 = colors === "Figma" ? "rgb(68, 68, 68)" : "rgb(63, 63, 70)";
  const colors_1 = colors === "Figma" ? "rgb(68, 68, 68)" : "rgb(63, 63, 70)";

  return (
    <div
      style={{
        borderColor: colors_0,
        backgroundColor: colors_1,
      }}
      className="component-card-0"
    >
      <div className="component-card-1">
        <DragHandle />
        <PlaceholderImage />
      </div>
      <div className="component-card-2">
        <p className="component-card-3">{text}</p>
      </div>
    </div>
  );
};
