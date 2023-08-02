import { Dropdown } from "./Dropdown";
export const Frame_5 = ({ override }: { override?: any }) => {
  return (
    <div
      className="overflow-hidden relative w-full h-[46px] flex-shrink-0 bg-[rgb(109,_21,_21)] font-[Inter]"
      style={override}
    >
      <Dropdown
        status="Open"
        version="Web"
        override={{
          position: "absolute",
          top: "13px",
          left: "21px",
        }}
      />
    </div>
  );
};
