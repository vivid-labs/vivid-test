import logoIcon from "./logoIcon.svg";
export const LogoIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img className="w-[41px] h-[38px]" src={logoIcon.src} style={override} />
  );
};
