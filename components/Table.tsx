import table from "./table.svg";
import styled from "styled-components";
const TableComponent = styled.img`
  width: 24px;
  height: 24px;
`;
export const Table = ({ override }: { override?: React.CSSProperties }) => {
  return <TableComponent src={table.src} style={override} />;
};
