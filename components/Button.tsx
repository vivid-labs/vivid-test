export const Button = ({
  override,
  size,
  hover,
  text,
}: {
  override?: any;
  size: string;
  hover: string;
  text: string;
}) => {
  const buttonSize =
    size === "Small"
      ? {
          padding: "5px 10px",
        }
      : {
          padding: "10px 15px",
        };
  const buttonDivHover =
    hover === "True"
      ? {
          opacity: "0.5",
        }
      : {};
  if (size === "Large" && hover === "False") {
    return null;
  }
  return (
    <Button
      style={{
        ...buttonSize,
        ...buttonDivHover,
        ...override,
      }}
    >
      <Button>{text}</Button>
    </Button>
  );
};
