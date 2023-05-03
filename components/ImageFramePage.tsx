import "./ImageFramePage.module.css";
import { DragHandle } from "./DragHandle";
import { PlaceholderImage } from "./PlaceholderImage";

export const ImageFramePage = () => {
  return (
    <div className="image-frame-page-0">
      <DragHandle />
      <PlaceholderImage />
    </div>
  );
};
