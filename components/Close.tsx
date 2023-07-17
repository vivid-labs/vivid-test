import close from "./close.svg";
export const Close = ({ override }: { override?: any }) => {
  return (
    <img src={close.src} style={override} className="w-6 h-6" figma-id="1:58" />
  );
};
