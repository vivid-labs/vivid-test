import { UserAvatar } from "./UserAvatar";
import { Checkbox } from "./Checkbox";
import line_1 from "./line_1.svg";
import { IconButton } from "./IconButton";
import { CommentIcon } from "./CommentIcon";

export const RequestRow = ({
  override,
  name,
  eMail,
}: {
  override?: React.CSSProperties;
  name: string;
  eMail: string;
}) => {
  return (
    <div
      className="overflow-hidden flex items-center pl-[54px] pr-3.5 relative w-[980px] h-[60px] border-solid border-gray-100 border-b bg-white"
      style={override}
    >
      <UserProfile name={name} eMail={eMail} />
      <p className="w-[117px] text-[rgb(3,_3,_3)] text-xs font-normal tracking-[-0.1px]">
        Aspen Rosser
      </p>
      <p className="w-[93px] text-[rgb(3,_3,_3)] text-xs font-normal tracking-[-0.1px]">
        Active
      </p>
      <p className="w-[89px] text-[rgb(3,_3,_3)] text-xs font-normal tracking-[-0.1px]">
        19 days ago
      </p>
      <p className="w-[124px] text-[rgb(3,_3,_3)] text-xs font-normal tracking-[-0.1px]">
        zoom-basic,
        <br />
        zoom-pro
      </p>
      <p className="w-[94px] text-[rgb(3,_3,_3)] text-xs font-normal tracking-[-0.1px]">
        Business
      </p>
      <AiNotes />
      <FirstOutput />
    </div>
  );
};

const UserProfile = ({ name, eMail }: any) => (
  <div className="overflow-hidden flex items-center gap-2 w-[184px]">
    <UserAvatar letters="HP" />
    <div className="overflow-hidden flex flex-col justify-center items-start gap-1">
      <p className="text-[rgb(3,_3,_3)] text-xs font-medium tracking-[-0.1px]">
        {name}
      </p>
      <p className="text-[rgb(123,_129,_138)] text-xs font-normal tracking-[-0.1px]">
        {eMail}
      </p>
    </div>
  </div>
);

const AiNotes = () => (
  <Checkbox
    override={{
      position: "absolute",
      top: "calc(50% - 8px)",
      left: "14px",
    }}
  />
);

const FirstOutput = () => (
  <div className="overflow-hidden flex items-center gap-4 px-px absolute w-[171px] right-0 h-[60px] bg-white">
    <UserAvatar letters="SP" />
    <img className="[rotate:90deg] w-6 h-0" src={line_1.src} />
    <div className="flex items-center gap-2">
      <IconButton icon="X" />
      <IconButton icon="Check" />
    </div>
    <CommentIcon />
  </div>
);
