import systemHandPointing from "./systemHandPointing.svg";
export const SystemHandPointing = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img
      src={systemHandPointing.src}
      style={{
        width: "42px",
        height: "42px",
        ...override,
      }}
    />
  );
};
