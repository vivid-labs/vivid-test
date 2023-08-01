import logo from "./logo.svg";
export const Logo = ({ override }: { override?: any }) => {
  return (
    <img
      className="w-4 h-4"
      src={logo.src}
      style={{
        width: "16px",
        height: "16px",
        ...override,
      }}
    />
  );
};
