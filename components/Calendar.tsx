import calendar from "./calendar.svg";
import styled from "styled-components";
const CalendarComponent = styled.img`
  width: 13px;
  height: 13px;
`;
export const Calendar = ({ override }: { override?: React.CSSProperties }) => {
  return <CalendarComponent src={calendar.src} style={override} />;
};
