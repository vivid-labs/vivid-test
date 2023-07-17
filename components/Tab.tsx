export const Tab = ({
  override,
  state,
  text,
  number,
}: {
  override?: any;
  state: string;
  text: string;
  number: string;
}) => {
  const createdState = {
    inactive: {
      color: "rgb(133, 133, 132)",
    },
    hover: {
      color: "rgb(255, 255, 255)",
    },
    active: {
      color: "rgb(255, 255, 255)",
    },
  }[state];
  const frame_81State = {
    inactive: {
      backgroundColor: "rgb(59, 59, 59)",
    },
    hover: {
      backgroundColor: "rgb(59, 59, 59)",
    },
    active: {
      backgroundColor: "rgb(133, 133, 132)",
    },
  }[state];
  const tabState = {
    inactive: {},
    hover: {
      borderStyle: "solid",
      borderColor: "rgb(59, 59, 59)",
      borderBottomWidth: "2px",
    },
    active: {
      borderStyle: "solid",
      borderColor: "rgb(133, 133, 132)",
      borderBottomWidth: "2px",
    },
  }[state];
  return (
    <div
      style={{
        ...tabState,
        ...override,
      }}
      className="flex justify-center items-center gap-4 px-[30px] py-0 relative h-[3.75rem]"
      figma-id="1906:3007"
    >
      <p
        style={createdState}
        className="whitespace-nowrap text-center text-[22px] font-[Work_Sans] font-semibold leading-[1.4em]"
        figma-id="1906:3004"
      >
        {text}
      </p>
      <div
        style={frame_81State}
        className="flex items-center gap-[10px] px-[10px] py-[5px] rounded-[20px] relative flex-shrink-0"
        figma-id="1906:3005"
      >
        <p
          className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[16px] font-[Space_Mono] font-normal leading-[1.4em]"
          figma-id="1906:3006"
        >
          {number}
        </p>
      </div>
    </div>
  );
};
