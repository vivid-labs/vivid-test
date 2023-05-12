import "./ComponentCard.css";
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
  const colors_0 =
    colors === "Figma"
      ? {
          borderColor: "rgb(68, 68, 68)",
          backgroundColor: "rgb(68, 68, 68)",
        }
      : {
          borderColor: "rgb(63, 63, 70)",
          backgroundColor: "rgb(63, 63, 70)",
        };
  const colors_1 =
    colors === "Figma"
      ? {
          backgroundColor: "rgb(30, 30, 30)",
        }
      : {
          backgroundColor: "rgb(24, 24, 27)",
        };
  const colors_2 =
    colors === "Figma"
      ? {
          color: "rgb(255, 255, 255)",
        }
      : {
          color: "rgb(250, 250, 250)",
        };
  const size_0 =
    size === "Small"
      ? {
          height: "75px",
        }
      : {
          height: "88px",
        };

  return (
    <div
      style={colors_0}
      className="overflow-hidden flex flex-col items-center rounded-[2px] border-[1px] border-solid border-[rgb(68,_68,_68)] bg-[rgb(68,_68,_68)]"
    >
      <div
        style={size_0}
        className="flex flex-col justify-center items-center gap-[2px] pl-[5px] pr-[5px] pt-[2px] pb-[4px] relative w-full h-[75px]"
      >
        {draggable ? <DragHandle /> : null}
        <PlaceholderImage />
      </div>
      <div
        style={colors_1}
        className="overflow-hidden flex flex-row justify-between items-center h-[23px] pl-[10px] pr-[10px] pt-[4px] pb-[4px] relative w-full bg-[rgb(30,_30,_30)]"
      >
        <p
          style={colors_2}
          className="whitespace-nowrap flex flex-col justify-center text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-[400]"
        >
          {text}
        </p>
      </div>
    </div>
  );
};
