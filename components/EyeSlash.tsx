import eyeSlash from "./eyeSlash.svg";

export const EyeSlash = ({ override }: { override?: any }) => {
  return (
    <img
      src={eyeSlash.src}
      style={{
        width: "32px",
        height: "32px",
        ...override,
      }}
    />
  );
};
