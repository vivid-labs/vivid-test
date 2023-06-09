import lockClosed from "./lockClosed.svg";

export const LockClosed = ({ override }: { override?: any }) => {
  return (
    <img src={lockClosed.src} style={override} className="w-20 h-[5rem]" />
  );
};
