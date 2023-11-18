import qrcodeScan from "./qrcodeScan.svg";
import styled from "styled-components";
const QrcodeScanComponent = styled.img`
  width: 24px;
  height: 24px;
`;
export const QrcodeScan = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <QrcodeScanComponent src={qrcodeScan.src} style={override} />;
};
