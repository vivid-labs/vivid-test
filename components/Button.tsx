export const Button = ({
  override,
  color,
}: {
  override?: any;
  color: string;
}) => {
  const startToExploreColor =
    color === "White"
      ? {
          color: "rgb(13, 17, 20)",
        }
      : {
          color: "rgb(255, 255, 255)",
        };
  const buttonColor =
    color === "White"
      ? {
          backgroundColor: "rgb(255, 255, 255)",
        }
      : {
          backgroundColor: "rgb(32, 35, 38)",
        };
  return;
};
