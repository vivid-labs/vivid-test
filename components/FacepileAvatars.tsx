import { InitialsAvatar } from "./InitialsAvatar";
import { PhotoAvatar } from "./PhotoAvatar";
import styled from "styled-components";
const FacepileAvatarsComponent = styled.div`
  display: flex;
  align-items: flex-start;
  width: fit-content;
  height: fit-content;
`;
const FacepileAvatarsComponent1 = styled.div`
  display: flex;
  align-items: flex-start;
  width: fit-content;
  height: fit-content;
`;
const FacepileAvatarsComponent2 = styled.div`
  display: flex;
  align-items: flex-start;
  width: 13px;
  height: 22px;
`;
const FacepileAvatarsComponent3 = styled.div`
  display: flex;
  align-items: flex-start;
  width: 32px;
  height: 32px;
`;
export const FacepileAvatars = ({
  override,
  type,
  inactive,
}: {
  override?: React.CSSProperties;
  type: string;
  inactive: string;
}) => {
  if (type === "initials" && inactive === "no") {
    return (
      <FacepileAvatarsComponent3 style={override}>
        <InitialsAvatar
          size="Large"
          color="Orange"
          initial="C"
          override={{
            height: "100%",
            flex: "1 1 0%",
          }}
        />
      </FacepileAvatarsComponent3>
    );
  } else if (type === "initials" && inactive === "yes") {
    return (
      <FacepileAvatarsComponent2 style={override}>
        <InitialsAvatar
          size="Large"
          color="Orange"
          initial="C"
          override={{
            height: "22px",
            width: "13px",
          }}
        />
      </FacepileAvatarsComponent2>
    );
  } else if (type === "photo" && inactive === "yes") {
    return (
      <FacepileAvatarsComponent1 style={override}>
        <PhotoAvatar size="Large" />
      </FacepileAvatarsComponent1>
    );
  } else if (type === "photo" && inactive === "no") {
    return (
      <FacepileAvatarsComponent style={override}>
        <PhotoAvatar size="Large" />
      </FacepileAvatarsComponent>
    );
  } else {
    return null;
  }
};
