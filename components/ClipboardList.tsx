import clipboardList from "./clipboardList.svg";

export const ClipboardList = ({ override }: { override?: any }) => {
  return (
    <img src={clipboardList.src} style={override} className="w-20 h-[5rem]" />
  );
};
