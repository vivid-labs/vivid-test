import { MobileFileIcons } from "./MobileFileIcons";
import styled from "styled-components";
export const MobileFileIconsPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <MobileFileIcons
      size="Large"
      type="Folder"
      override={{
        borderRadius: "5.16px",
        height: "129px",
        width: "100%",
      }}
    />
  );
};
