import logo from "./logo.svg";
export const Logo = ({ override }: { override?: any }) => {
  return (
    <img
      src={logo.src}
      style={{
        width: "16px",
        height: "16px",
        ...override,
      }}
    />
  );
};
