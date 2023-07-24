import { Avatar_1 } from "./Avatar_1";
export const Avatar = ({
  override,
  property_1,
  avatarPhoto,
}: {
  override?: any;
  property_1: string;
  avatarPhoto: any;
}) => {
  switch (property_1) {
    case "medium":
      return (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            width: "fit-content",
            height: "fit-content",
            position: "relative",
            ...override,
          }}
          figma-id="7:1188:11040"
        >
          {avatarPhoto}
        </div>
      );
    case "Big":
      return (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            width: "fit-content",
            height: "fit-content",
            position: "relative",
            ...override,
          }}
          figma-id="7:1210:11457"
        >
          {avatarPhoto}
        </div>
      );
    case "Small":
      return (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            width: "fit-content",
            height: "fit-content",
            position: "relative",
            ...override,
          }}
          figma-id="7:1188:11047"
        >
          {avatarPhoto}
        </div>
      );
    default:
      return null;
  }
};
