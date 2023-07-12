import content from "./content.jpg";
import { InviteEmail } from "./InviteEmail";
import { Button } from "./Button";


export const Content = ({
  override
}: {
  override?: any;
}) => {
  

  return <div style={override} className="overflow-hidden flex flex-col items-start gap-[10px] px-[429px] py-[208px] relative w-full flex-shrink-0" figma-id="29:763"><img src={content.src} className="object-cover opacity-100 absolute h-full w-full" figma-id="{\"objectFit\":\"cover\",\"opacity\":1}d2e2e0e68f0404c71db06348976ba084f36ad43a" /><div className="overflow-hidden flex flex-col justify-center items-start gap-5 px-[20px] py-[24px] rounded-[14px] relative [box-shadow:0px_4px_10px_4px_rgb(0,_0,_0,_0.15)] w-full flex-shrink-0 bg-[rgb(255,_255,_255)]" figma-id="29:764"><div className="overflow-hidden flex flex-row items-center gap-2 relative w-full flex-shrink-0" figma-id="29:765"><p className="text-center flex-shrink-0 flex-1 min-w-[0rem] text-[rgb(244,_86,_154)] text-[30px] font-[Avenir] font-black" figma-id="29:766">Invite Teammates</p></div><div className="flex flex-col items-start gap-2 relative w-full flex-shrink-0" figma-id="29:811"><div className="overflow-hidden flex flex-row items-start gap-3 px-[12px] py-[8px] rounded-[5px] relative w-full h-[7.5rem] flex-shrink-0 border-solid border-[rgb(217,_217,_217)] border bg-[rgb(245,_241,_241)]" figma-id="29:788"><div className="flex flex-row items-center gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]" figma-id="29:809"><InviteEmail /><p className="whitespace-nowrap text-center flex flex-col justify-center flex-shrink-0 text-[rgb(148,_148,_148)] text-[15px] font-[Avenir] font-medium" figma-id="29:808">Enter teammate emails</p></div></div><p className="whitespace-nowrap text-center flex flex-col justify-center flex-shrink-0 text-[rgb(148,_148,_148)] text-[15px] font-[Avenir] font-medium" figma-id="29:810">1 additional seat invited</p></div><Button type="Primary" text="Invite!" override={{
        height: "fit-content",
        width: "100%"
      }} /></div></div>;
};