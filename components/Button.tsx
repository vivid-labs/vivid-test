export const Button = ({
  override,
  size,
  callback,
}: {
  override?: any;
  size: string;
  callback: () => void;
}) => {
  const buttonSize =
    size === "Small"
      ? {
          padding: "5px 10px",
        }
      : {
          padding: "10px 15px",
        };
  if (size === "Large") {
    return null;
  }
  return;
};
