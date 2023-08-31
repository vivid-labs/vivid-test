import cavaLogo from "./cavaLogo.png";
export const CavaLogo = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="flex flex-col items-start" style={override}>
      <img className="w-[73px] h-6 object-cover" src={cavaLogo.src} />
    </div>
  );
};
