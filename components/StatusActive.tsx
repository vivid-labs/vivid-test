import { Arrow } from "./Arrow";
import { Option } from "./Option";
import { Divider } from "./Divider";

export const StatusActive = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-[1px] w-full rounded-md font-[Helvetica_Neue]"
      style={override}
    >
      <ContainerWithArrow />
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-md w-full border-solid border-[rgb(226,_226,_226)] border bg-white"
        style={{
          boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Notice />
        <Divider
          override={{
            height: "1px",
            width: "100%",
          }}
        />
        <Disclaimer />
        <Divider
          override={{
            height: "1px",
            width: "100%",
          }}
        />
        <StartAskingQuestions />
      </div>
    </div>
  );
};

const ContainerWithArrow = () => (
  <div className="overflow-hidden flex justify-between items-center px-1.5 py-1 rounded-md w-40 h-7 border-solid border-neutral-300 border bg-[rgb(246,_246,_246)]">
    <p className="text-[rgb(70,_70,_70)] text-xs font-normal">Select...</p>
    <Arrow
      override={{
        height: "3px",
        width: "7px",
      }}
    />
  </div>
);

const Notice = () => (
  <Option
    color="Gray"
    text="Not Started"
    override={{
      height: "fit-content",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
  />
);

const Disclaimer = () => (
  <Option
    color="Orange"
    text="Ongoing"
    override={{
      height: "fit-content",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
  />
);

const StartAskingQuestions = () => (
  <Option
    color="Green"
    text="Completed"
    override={{
      height: "fit-content",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
  />
);
