import content from "./content.jpg";
import { InviteEmail } from "./InviteEmail";
import { Button } from "./Button";

export const Content = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden relative w-[1440px] h-[799px] flex-shrink-0"
    >
      <img
        src={content.src}
        className="object-cover opacity-100 absolute h-full w-full"
      />
      <div className="overflow-hidden flex flex-col justify-center items-start gap-5 p-6 rounded-[14px] absolute [box-shadow:0px_4px_10px_4px_rgb(0,_0,_0,_0.15)] w-[581px] bg-[rgb(255,_255,_255)]">
        <div className="overflow-hidden flex flex-row justify-start items-center gap-2 relative w-full flex-shrink-0">
          <p className="text-center flex-shrink-0 flex-1 [0rem] text-[rgb(244,_86,_154)] text-[30px] font-[Avenir] font-extrabold">
            Invite Teammates
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 relative flex-shrink-0">
          <div className="overflow-hidden flex flex-row justify-start items-start gap-3 pl-3 pr-3 pt-2 pb-2 rounded-[5px] relative w-[533px] h-[7.5rem] flex-shrink-0 border border-solid border-[rgb(217,_217,_217)] bg-[rgb(245,_241,_241)]">
            <div className="flex flex-row justify-start items-center gap-[10px] relative flex-shrink-0 flex-1 [0rem]">
              <InviteEmail />
              <p className="whitespace-nowrap text-center flex flex-col justify-center flex-shrink-0 text-[rgb(148,_148,_148)] text-[15px] font-[Avenir] font-medium">
                Enter teammate emails
              </p>
            </div>
          </div>
          <p className="whitespace-nowrap text-center flex flex-col justify-center flex-shrink-0 text-[rgb(148,_148,_148)] text-[15px] font-[Avenir] font-medium">
            1 additional seat invited
          </p>
        </div>
        <Button
          type="Primary"
          text="Invite!"
          override={{
            height: "fit-content",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};
