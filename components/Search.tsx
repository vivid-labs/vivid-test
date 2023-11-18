import search from "./search.svg";
import styled from "styled-components";
const SearchComponent = styled.img`
  width: 14px;
  height: 14px;
`;
export const Search = ({ override }: { override?: React.CSSProperties }) => {
  return <SearchComponent src={search.src} style={override} />;
};
