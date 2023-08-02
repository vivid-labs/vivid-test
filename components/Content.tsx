import content from "./content.jpg";
import { InviteEmail } from "./InviteEmail";
import { Button } from "./Button";
export const Content = ({ override }: { override?: any }) => {
  return (
    <div
      className="relative flex w-full flex-shrink-0 flex-col items-start overflow-hidden px-[429px] py-52 font-[Avenir]"
      style={override}
    >
      <img className="absolute h-full w-full object-cover" src={content.src} />
      <div className="relative flex w-full flex-shrink-0 flex-col items-start justify-center gap-5 overflow-hidden rounded-[0.875rem] bg-white px-5 py-6 [box-shadow:0px_4px_10px_4px_rgba(0,_0,_0,_0.15)]">
        <div className="relative flex w-full flex-shrink-0 items-center overflow-hidden">
          <p className="text-center text-3xl font-black text-[rgb(244,_86,_154)]">
            Invite Teammates
          </p>
        </div>
        <div className="relative flex w-full flex-shrink-0 flex-col items-start gap-2">
          <div className="relative flex h-[120px] w-full flex-shrink-0 items-start overflow-hidden rounded-[5px] border border-solid border-[rgb(217,_217,_217)] bg-[rgb(245,_241,_241)] px-3 py-2">
            <div className="relative flex min-w-[0rem] flex-1 flex-shrink-0 items-center gap-2.5">
              <InviteEmail email="jorge@vivid.lol" />
              <p className="flex flex-col justify-center whitespace-nowrap text-center text-[15px] font-medium text-[rgb(148,_148,_148)]">
                Enter teammate emails
              </p>
            </div>
          </div>
          <p className="flex flex-col justify-center whitespace-nowrap text-center text-[15px] font-medium text-[rgb(148,_148,_148)]">
            1 additional seat invited
          </p>
        </div>
        <Button
          type="Primary"
          text="Invite!"
          override={{
            height: "fit-content",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    </div>
  );
};
