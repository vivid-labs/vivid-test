import settings from "./settings.svg";
import styled from "styled-components";
const SettingsComponent = styled.img`
  width: 100%;
  height: 13px;
`;
export const Settings = ({ override }: { override?: React.CSSProperties }) => {
  return <SettingsComponent src={settings.src} style={override} />;
};
