import content from "./content.jpg";
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
          <p className="text-center flex-shrink-0 flex-1 min-w-[0rem] text-[rgb(244,_86,_154)] text-[30px] font-[Avenir] font-extrabold">
            Get started with Vivid Teams!
          </p>
        </div>
        <div className="overflow-hidden rounded-[5px] relative w-full h-[199px] flex-shrink-0 bg-[rgb(245,_241,_241)]">
          <p className="text-center flex flex-col justify-center absolute w-[470px] left-[34px] h-[146px] top-[22px] text-[rgb(0,_0,_0)] text-[16px] font-[Avenir] font-medium tracking-[0.00800000037997961px] leading-[23px]">
            Vivid will now take you to GitHub and ask you to do some stuff. When
            you’re done with that stuff, come back to edit this copy to reflect
            what actually needs to get done, make this styling a bit prettier,
            and then move on!
          </p>
        </div>
        <div className="flex flex-row justify-start items-center gap-5 relative w-full flex-shrink-0">
          <Button
            type="Secondary"
            text="I'll do this later"
            override={{
              height: "fit-content",
              flex: "1 1 0%",
            }}
          />
          <Button
            type="Primary"
            text="Take me to GitHub!"
            override={{
              height: "fit-content",
              flex: "1 1 0%",
            }}
          />
        </div>
      </div>
    </div>
  );
};
