const GetStarted = styled.p`
  width: fit-content;
  white-space: nowrap;
  height: fit-content;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 205, 41);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.01px;
  line-height: 23px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 8px 16px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 4px 9px rgba(0, 0, 0), 0px 1.54px 2.87px rgba(0, 0, 0),
    0px 0.33px 0.73px rgba(0, 0, 0);
`;

export const Button = ({
  override,
  type,
  text,
}: {
  override?: any;
  type: string;
  text: string;
}) => {
  const buttonType =
    type === "Primary"
      ? {
          backgroundColor: "rgb(244, 86, 154)",
        }
      : {
          backgroundColor: "rgb(0, 0, 0)",
        };

  return (
    <Button
      style={{
        ...buttonType,
        ...override,
      }}
    >
      <GetStarted>{text}</GetStarted>
    </Button>
  );
};
