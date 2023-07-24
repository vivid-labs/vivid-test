import { Tab } from "./Tab";
import { StatusButton } from "./StatusButton";

export const SuccessFlipper = ({
  override,
  status,
}: {
  override?: any;
  status: string;
}) => {
  switch (status) {
    case "Success":
      return (
        <div
          style={override}
          className="overflow-hidden flex flex-col justify-center items-center gap-10 p-6 rounded-[24px] relative w-[482px] bg-[rgb(255,_255,_255)]"
          figma-id="5:170:87"
        >
          <div
            className="overflow-hidden flex justify-center items-center gap-[10px] relative w-full flex-shrink-0"
            figma-id="5:170:61"
          >
            <p
              className="whitespace-nowrap text-center text-[rgb(0,_0,_0)] text-[32px] font-[Avenir] font-extrabold"
              figma-id="5:170:62"
            >
              Was this a success?
            </p>
          </div>
          <div
            className="overflow-hidden flex justify-center items-center gap-[10px] px-[16px] py-[7px] relative w-full flex-shrink-0"
            figma-id="5:170:63"
          >
            <Tab status="Default" figma-id="5:170:69" />
            <Tab status="Default" figma-id="5:170:71" />
            <Tab status="Default" figma-id="5:170:73" />
          </div>
          <StatusButton
            status="Failure"
            override={{
              height: "67px",
              width: "fit-content",
            }}
            figma-id="5:170:85"
          />
        </div>
      );
    case "Failure":
      return (
        <div
          style={override}
          className="overflow-hidden flex flex-col justify-center items-center gap-10 p-6 rounded-[24px] relative w-[482px] bg-[rgb(255,_255,_255)]"
          figma-id="5:170:89"
        >
          <div
            className="overflow-hidden flex justify-center items-center gap-[10px] relative w-full flex-shrink-0"
            figma-id="5:170:90"
          >
            <p
              className="whitespace-nowrap text-center text-[rgb(195,_46,_46)] text-[32px] font-[Avenir] font-extrabold"
              figma-id="5:170:91"
            >
              This was a success!
            </p>
          </div>
          <div
            className="overflow-hidden flex justify-center items-center gap-[10px] px-[16px] py-[7px] relative w-full flex-shrink-0"
            figma-id="5:170:92"
          >
            <Tab status="Failure" figma-id="5:170:93" />
            <Tab status="Failure" figma-id="5:170:94" />
            <Tab status="Failure" figma-id="5:170:95" />
          </div>
          <StatusButton status="Success" figma-id="5:170:96" />
        </div>
      );
    default:
      return null;
  }
};
