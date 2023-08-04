import group from "./group.svg";
import * as React from "react";
export const CheckMark = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="relative flex h-[41px] w-[41px] flex-col items-start overflow-hidden"
      style={override}
    >
      <img className="min-h-0 w-full flex-1 flex-shrink-0" src={group.src} />
    </div>
  );
};
