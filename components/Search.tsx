import search from "./search.svg";
import styled from "styled-components";
const SearchComponent = styled.img`
  width: 100%;
  height: 11px;
`;
export const Search = ({ override }: { override?: React.CSSProperties }) => {
  return <SearchComponent src={search.src} style={override} />;
};
