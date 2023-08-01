const ButtonText = styled.p`
  width: fit-content;
  white-space: nowrap;
  height: fit-content;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(39, 39, 42);
  font-size: 12px;
  font-weight: 800;
`;
const Button = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  position: relative;
  background-color: rgb(222, 136, 88);
`;

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
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};
