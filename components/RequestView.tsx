import { ZoomIcon } from "./ZoomIcon";
import { Tab } from "./Tab";
import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { StepBar } from "./StepBar";
import { Checkbox } from "./Checkbox";
import { CogIcon } from "./CogIcon";
import { RequestRow } from "./RequestRow";

export const RequestView = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  const tabProps = [
    {
      status: "Active",
      text: "Assigned to me (15)",
    },
    {
      status: "Idle",
      text: "Pending (100)",
    },
    {
      status: "Idle",
      text: "Reviewed (0)",
    },
    {
      status: "Idle",
      text: "All (115)",
    },
  ];
  const requestRowProps = [
    {
      eMail: "harry@lumos.com",
      name: "Harry Potter",
      override: {
        height: "60px",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
      },
    },
    {
      eMail: "hermione@lumos.com",
      name: "Hermione Granger",
      override: {
        height: "60px",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: "rgb(243, 244, 246)",
      },
    },
    {
      eMail: "ron@lumos.com",
      name: "Ron Weasley",
      override: {
        height: "60px",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: "rgb(243, 244, 246)",
      },
    },
    {
      eMail: "snape@lumos.com",
      name: "Severus Snape",
      override: {
        height: "60px",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: "rgb(243, 244, 246)",
      },
    },
    {
      eMail: "albus@lumos.com",
      name: "Albus Dumbeldore",
      override: {
        height: "60px",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: "rgb(243, 244, 246)",
      },
    },
  ];
  return (
    <div
      className="overflow-hidden flex flex-col items-center w-full h-[455px] bg-white font-[Helvetica_Neue]"
      style={override}
    >
      <ZoomTabSelector tabProps={tabProps} />
      <div className="overflow-hidden flex flex-col justify-center items-center gap-2.5 pt-2 px-5 w-full flex-1 min-h-0 bg-gray-100">
        <StepBar
          override={{
            height: "fit-content",
            width: "100%",
          }}
        />
        <div
          className="overflow-hidden flex flex-col items-center rounded-lg w-full flex-1 min-h-0 border-solid border-gray-100 border bg-white"
          style={{
            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div className="overflow-hidden flex items-center pl-14 pr-[53px] relative w-full h-10 border-solid border-gray-100 border-b bg-[rgb(251,_251,_253)]">
            <p className="w-[180px] h-3.5 text-[rgb(123,_129,_138)] text-[10px] font-bold tracking-[-0.1px]">
              Employee
            </p>
            <p className="w-[118px] h-3.5 text-[rgb(123,_129,_138)] text-[10px] font-bold tracking-[-0.1px]">
              Manager
            </p>
            <p className="w-[94px] h-3.5 text-[rgb(123,_129,_138)] text-[10px] font-bold tracking-[-0.1px]">
              Account Status
            </p>
            <p className="w-[88px] h-3.5 text-[rgb(123,_129,_138)] text-[10px] font-bold tracking-[-0.1px]">
              Last Log In
            </p>
            <p className="w-[124px] h-3.5 text-[rgb(123,_129,_138)] text-[10px] font-bold tracking-[-0.1px]">
              Groups
            </p>
            <p className="w-24 h-3.5 text-[rgb(123,_129,_138)] text-[10px] font-bold tracking-[-0.1px]">
              Licenses
            </p>
            <OverrideCheckbox />
            <CogIconComponent />
            <div className="flex items-center py-[13px] absolute w-[170px] right-0 bg-[rgb(251,_251,_253)]">
              <p className="w-24 h-3.5 text-[rgb(123,_129,_138)] text-[10px] font-bold tracking-[-0.1px]">
                Decision
              </p>
            </div>
          </div>
          {requestRowProps.map((props, i) => (
            <RequestRow {...props} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ZoomTabSelector = ({ tabProps }: any) => (
  <div
    className="flex flex-col items-start pt-3 px-5 w-full h-20 border-solid border-[rgb(225,_226,_230)] border-b bg-white"
    style={{
      boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.06)",
    }}
  >
    <div className="flex items-center gap-2.5">
      <ZoomIcon />
      <p className="text-[rgb(3,_3,_3)] text-lg font-medium tracking-[-0.1px]">
        Zoom
      </p>
    </div>
    <div className="overflow-hidden flex justify-between items-end w-full flex-1 min-h-0">
      <div className="overflow-hidden flex items-end gap-6">
        {tabProps.map((props, i) => (
          <Tab {...props} key={i} />
        ))}
      </div>
      <div className="overflow-hidden flex items-center gap-1 pb-2">
        <Button text="Remove Accounts" />
        <IconButton icon="Ellipsis" />
      </div>
    </div>
  </div>
);

const OverrideCheckbox = () => (
  <Checkbox
    override={{
      position: "absolute",
      top: "calc(50% - 8px)",
      left: "14px",
    }}
  />
);

const CogIconComponent = () => (
  <CogIcon
    override={{
      position: "absolute",
      top: "calc(50% - 8px)",
      right: "12px",
    }}
  />
);
