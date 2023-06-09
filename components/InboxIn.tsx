import inboxIn from "./inboxIn.svg";

export const InboxIn = ({ override }: { override?: any }) => {
  return <img src={inboxIn.src} style={override} className="w-20 h-[5rem]" />;
};
