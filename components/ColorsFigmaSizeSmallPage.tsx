import "./colors-figma-size-small-page.module.css";
import { DragHandle } from "./DragHandle";
import { PlaceholderImage } from "./PlaceholderImage";

export const ColorsFigmaSizeSmallPage = () => {
  return (
    <div className="colors-figma-size-small-page-0">
      <div className="colors-figma-size-small-page-1">
        <DragHandle />
        <PlaceholderImage />
      </div>
      <div className="colors-figma-size-small-page-2">
        <p className="colors-figma-size-small-page-3">Card</p>
      </div>
    </div>
  );
};
