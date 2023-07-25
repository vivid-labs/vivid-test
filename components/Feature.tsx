import { Link } from "./Link";
import { VolumeDown } from "./VolumeDown";
export const Feature = ({
  override,
  title,
  description,
  icon,
}: {
  override?: any;
  title: string;
  description: string;
  icon: any;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "9px",
        width: "fit-content",
        height: "fit-content",
        padding: "30px 25px",
        borderRadius: "9px",
        position: "relative",
        backdropFilter: "blur(10.5px)",
        backgroundColor: "rgb(255, 255, 255, 0.08)",
        ...override,
      }}
      figma-id="10:6:332"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "14px",
          height: "fit-content",
          position: "relative",
          width: "285px",
          flexShrink: 0,
        }}
        figma-id="10:6:333"
      >
        <p
          style={{
            width: "fit-content",
            whiteSpace: "nowrap",
            height: "fit-content",
            textAlign: "center",
            color: "rgb(255, 255, 255)",
            fontSize: "25px",
            fontFamily: "Quicksand",
            fontWeight: 700,
          }}
          figma-id="10:6:334"
        >
          {title}
        </p>
        <p
          style={{
            height: "fit-content",
            color: "rgb(160, 160, 160)",
            fontSize: "20px",
            fontFamily: "Quicksand",
            fontWeight: 400,
          }}
          figma-id="10:6:335"
        >
          {description}
        </p>
        <Link linkText="Select Guide" figma-id="10:6:336" />
      </div>
      {icon}
    </div>
  );
};
