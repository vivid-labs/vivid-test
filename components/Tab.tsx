
export const Tab = ({
  override,
  state,
  text,
  number,
}: {
  override?: React.CSSProperties;
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
      className="flex justify-center items-center gap-4 px-[30px] h-[60px]"
      style={{
        ...tabState,
        ...override,
      }}
    >
      <p
        className="text-[22px] font-semibold leading-[1.4em]"
        style={createdState}
      >
        {text}
      </p>
      <FlexContainer frame_81State={frame_81State} number={number} />
    </div>
  );
};

const FlexContainer = ({ frame_81State, number }: any) => (
  <div
    className="flex items-center px-2.5 py-[5px] rounded-[1.25rem]"
    style={frame_81State}
  >
    <p className="text-white text-base font-[Space_Mono] font-normal leading-[1.4em]">
      {number}
    </p>
  </div>
);
