import lineImage1 from "./lineImage1.svg";
import lineImage from "./lineImage.svg";
import line from "./line.svg";
export const LabelledInput = ({
  override,
  lineSize,
}: {
  override?: any;
  lineSize: string;
}) => {
  const lineLineSize = {
    Small: {
      width: "27px",
      left: "38.5px",
      top: "-1.5px",
    },
    Medium: {
      width: "48px",
      left: "60px",
      top: "-1px",
    },
    Large: {
      width: "70px",
      left: "81px",
      top: "-1px",
    },
  }[lineSize];
  let lineSrc;
  if (lineSize === "Small") {
    lineSrc = lineImage1;
  } else if (lineSize === "Medium") {
    lineSrc = lineImage;
  } else {
    lineSrc = line;
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        width: "fit-content",
        height: "fit-content",
        padding: "12px",
        borderRadius: "8px",
        position: "relative",
        borderStyle: "solid",
        borderColor: "rgb(68, 68, 68)",
        borderWidth: "1px",
        backgroundColor: "rgb(44, 44, 44)",
        ...override,
      }}
      figma-id="35:1016"
    >
      <img
        src={lineSrc.src}
        style={{
          ...lineLineSize,
          position: "absolute",
          rotate: "180.0deg",
          height: "0px",
        }}
        figma-id="34:5332"
      />
      <p
        style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "rgb(68, 68, 68)",
          fontSize: "12px",
          fontFamily: "Inter",
          fontWeight: 400,
        }}
        figma-id="34:5333"
      >
        placeholder
      </p>
      <p
        style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "rgb(255, 255, 255)",
          fontSize: "10px",
          fontFamily: "Inter",
          fontWeight: 400,
        }}
        figma-id="34:5334"
      >
        Label
      </p>
    </div>
  );
};
