import { FigmaLogo } from "./FigmaLogo";
import img_2585_1 from "./img_2585_1.png";
import { CheckMark } from "./CheckMark";
import { FigmaLogoComponent } from "./FigmaLogoComponent";

export const Step = ({
  override,
  status,
  task,
  time,
}: {
  override?: React.CSSProperties;
  status: string;
  task: string;
  time: string;
}) => {
  switch (status) {
    case "Todo":
      return (
        <div
          className="overflow-hidden flex items-center gap-5 px-5 py-4 rounded-[5px] w-[368px] h-[86px] border-solid border-[rgb(207,_207,_207)] border bg-white"
          style={override}
        >
          <AiChatIntroduction />
          <TaskAndTime task={task} time={time} />
          <img
            className="w-5 h-5 object-cover opacity-30"
            src={img_2585_1.src}
          />
        </div>
      );
    case "Complete":
      return (
        <div
          className="overflow-hidden flex items-center gap-5 px-5 py-4 rounded-[5px] w-[368px] h-[86px] border-solid border-[rgb(207,_207,_207)] border bg-white"
          style={override}
        >
          <CheckMark
            override={{
              height: "56px",
              width: "56px",
            }}
          />
          <TaskInfo task={task} time={time} />
        </div>
      );
    case "Unsupported":
      return (
        <div
          className="overflow-hidden flex items-center gap-5 px-5 py-4 rounded-[5px] w-[368px] h-[86px] border-solid border-[rgb(207,_207,_207)] border bg-[rgb(245,_241,_241)]"
          style={override}
        >
          <FigmaLogoComponent />
          <TaskInformation task={task} time={time} />
        </div>
      );
    case "Up Next":
      return (
        <div
          className="overflow-hidden flex items-center gap-5 px-5 py-4 rounded-[5px] w-[368px] h-[86px] border-solid border-[rgb(207,_207,_207)] border bg-white"
          style={override}
        >
          <RillaAiChatIntroduction />
          <TaskHeader task={task} time={time} />
        </div>
      );
    default:
      return null;
  }
};

const AiChatIntroduction = () => (
  <div className="relative w-14 h-14">
    <div className="absolute w-14 left-0 h-14 top-0 bg-blue-600 rounded-[50%]" />
    <FigmaLogo
      override={{
        height: "35px",
        width: "35px",
        position: "absolute",
        top: "10px",
        left: "11px",
      }}
    />
  </div>
);

const TaskAndTime = ({ task, time }: any) => (
  <div className="flex flex-col items-start gap-2.5 flex-1 min-w-0">
    <p className="w-full h-[23px] text-black text-base font-black tracking-[0.01px] leading-[23px]">
      {task}
    </p>
    <p className="w-full h-5 text-[rgb(148,_148,_148)] text-sm font-medium leading-[23px]">
      {time}
    </p>
  </div>
);

const TaskInfo = ({ task, time }: any) => (
  <div className="flex flex-col items-start gap-2.5 flex-1 min-w-0">
    <p className="w-full h-[23px] text-[rgb(148,_148,_148)] text-base font-black tracking-[0.01px] leading-[23px] line-through">
      {task}
    </p>
    <p className="w-full h-5 text-[rgb(148,_148,_148)] text-sm font-medium tracking-[0.01px] leading-[23px]">
      {time}
    </p>
  </div>
);

const FigmaLogoComponent = () => (
  <div className="relative w-14 h-14">
    <div className="absolute w-14 left-0 h-14 top-0 bg-[rgb(217,_217,_217)] rounded-[50%]" />
    <FigmaLogoComponent
      override={{
        height: "35px",
        width: "35px",
        position: "absolute",
        top: "10px",
        left: "11px",
      }}
    />
  </div>
);

const TaskInformation = ({ task, time }: any) => (
  <div className="flex flex-col items-start gap-2.5 flex-1 min-w-0">
    <div className="flex items-start gap-2.5 w-full">
      <p className="text-[rgb(148,_148,_148)] text-base font-black tracking-[0.01px] leading-[23px]">
        {task}
      </p>
      <div className="overflow-hidden flex items-start px-2 rounded bg-black">
        <p className="text-white text-base font-medium tracking-[0.01px] leading-[23px]">
          Coming Soon!
        </p>
      </div>
    </div>
    <p className="w-full h-5 text-[rgb(148,_148,_148)] text-sm font-medium tracking-[0.01px] leading-[23px]">
      {time}
    </p>
  </div>
);

const RillaAiChatIntroduction = () => (
  <div className="relative w-14 h-14">
    <div className="absolute w-14 left-0 h-14 top-0 bg-[rgb(217,_217,_217)] rounded-[50%]" />
    <FigmaLogoComponent
      override={{
        height: "35px",
        width: "35px",
        position: "absolute",
        top: "10px",
        left: "11px",
      }}
    />
  </div>
);

const TaskHeader = ({ task, time }: any) => (
  <div className="flex flex-col items-start gap-2.5 flex-1 min-w-0">
    <div className="flex items-start gap-2.5">
      <p className="self-stretch text-[rgb(148,_148,_148)] text-base font-black tracking-[0.01px] leading-[23px]">
        {task}
      </p>
      <div className="overflow-hidden flex items-start px-2 rounded bg-blue-600">
        <p className="text-white text-base font-medium tracking-[0.01px] leading-[23px]">
          Up Next!
        </p>
      </div>
    </div>
    <p className="w-full h-5 text-[rgb(148,_148,_148)] text-sm font-medium tracking-[0.01px] leading-[23px]">
      {time}
    </p>
  </div>
);
