import contacts from "./contacts.svg";
import styled from "styled-components";
const ContactsComponent = styled.img`
  width: 13px;
  height: 13px;
`;
export const Contacts = ({ override }: { override?: React.CSSProperties }) => {
  return <ContactsComponent src={contacts.src} style={override} />;
};
