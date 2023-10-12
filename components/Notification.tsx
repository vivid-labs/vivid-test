import notification from "./notification.svg";
import styled from "styled-components";
const NotificationComponent = styled.img`
  width: 100%;
  height: 13px;
`;
export const Notification = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <NotificationComponent src={notification.src} style={override} />;
};
