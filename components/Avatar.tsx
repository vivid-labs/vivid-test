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
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "10px",
            width: "fit-content",
            height: "fit-content",
            position: "relative",
            ...override,
          }}
        >
          {avatarPhoto}
        </div>
      );
    case "Big":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "10px",
            width: "fit-content",
            height: "fit-content",
            position: "relative",
            ...override,
          }}
        >
          {avatarPhoto}
        </div>
      );
    case "Small":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "10px",
            width: "fit-content",
            height: "fit-content",
            position: "relative",
            ...override,
          }}
        >
          {avatarPhoto}
        </div>
      );
    default:
      return null;
  }
};
