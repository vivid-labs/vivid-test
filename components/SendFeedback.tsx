import sendFeedback from "./sendFeedback.svg";
import styled from "styled-components";
const SendFeedbackComponent = styled.img`
  width: 13px;
  height: 13px;
`;
export const SendFeedback = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <SendFeedbackComponent src={sendFeedback.src} style={override} />;
};
