import property_1Default from "./property_1Default.svg";
import property_1Hover from "./property_1Hover.svg";
export const Youtube = ({
  override,
  property_1,
}: {
  override?: any;
  property_1: string;
}) => {
  let youtubeSrc;
  if (property_1 === "Default") {
    youtubeSrc = property_1Default;
  } else {
    youtubeSrc = property_1Hover;
  }
  return (
    <img
      src={youtubeSrc.src}
      style={override}
      className="w-[33.33px] h-[25px]"
      figma-id="12:102:3053"
    />
  );
};
