import logo from "./logo.svg";
export const Logo = ({ override }: { override?: any }) => {
  return (
    <img
      src={logo.src}
      style={override}
      className="w-4 h-4"
      figma-id="14:17:306"
    />
  );
};
