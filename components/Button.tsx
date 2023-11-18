
export const Button = ({
  override,
  type,
}: {
  override?: React.CSSProperties;
  type: string;
}) => {
  const clickMeType = {
    Default: {
      color: "rgb(255, 255, 255)",
    },
    Type2: {
      color: "rgb(0, 0, 0)",
    },
    Type3: {
      color: "rgb(255, 255, 255)",
    },
    Type4: {
      color: "rgb(0, 0, 0)",
    },
  }[type];
  const buttonType = {
    Default: {
      borderColor: "rgb(0, 0, 0)",
      backgroundColor: "rgb(109, 121, 235)",
    },
    Type2: {
      borderColor: "rgb(255, 255, 255)",
      backgroundColor: "rgb(235, 169, 109)",
    },
    Type3: {
      borderColor: "rgb(0, 0, 0)",
      backgroundColor: "rgb(242, 112, 229)",
    },
    Type4: {
      borderColor: "rgb(255, 255, 255)",
      backgroundColor: "rgb(109, 235, 144)",
    },
  }[type];
  return (
    <div
      className="overflow-hidden flex justify-center items-center px-[19px] py-[9px] rounded-[5px] border-solid border"
      style={{
        ...buttonType,
        ...override,
      }}
    >
      <p
        className="text-xs font-normal"
        style={{
          ...clickMeType,
        }}
      >
        Click Me
      </p>
    </div>
  );
};
