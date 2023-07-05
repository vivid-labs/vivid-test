import user from "./user.svg";

export const User = ({ override }: { override?: any }) => {
  return (
    <img
      src={user.src}
      style={{
        width: "32px",
        height: "32px",
        ...override,
      }}
    />
  );
};
