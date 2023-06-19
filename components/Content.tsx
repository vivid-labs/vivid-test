import group from "./group.svg";
import { Feature } from "./Feature";
import { Button } from "./Button";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";

export const Content = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col justify-center items-center gap-[10px] pl-[6.25rem] pr-[6.25rem] relative w-[1440px] flex-shrink-0 bg-[rgb(255,_255,_255)]"
    >
      <div className="overflow-hidden flex flex-row justify-center items-center gap-[10px] p-[2px] relative w-full h-[519px] flex-shrink-0">
        <div className="flex flex-col justify-start items-start gap-[160.38px] pl-[10px] pr-[10px] pt-7 pb-9 relative h-full flex-shrink-0 flex-1 min-w-[0rem]">
          <div className="flex flex-col justify-start items-start gap-[25px] relative w-full flex-shrink-0">
            <div className="flex flex-col justify-start items-start gap-2 relative flex-shrink-0">
              <div className="relative w-[520px] h-[19px] flex-shrink-0">
                <div className="overflow-hidden absolute w-4 left-[0rem] h-[15.31px]">
                  <div className="absolute w-4 h-[15.31px] top-[0rem]">
                    <img
                      src={group.src}
                      className="absolute left-[0.29px] right-[0.32px] w-auto top-[0.16px] bottom-[0.35px] h-auto"
                    />
                  </div>
                </div>
                <p className="whitespace-nowrap flex flex-col justify-center absolute left-5 -top-px text-[rgb(244,_86,_154)] text-[13.5px] font-[Avenir] font-medium tracking-[0.049949999898672104px] leading-[19px]">
                  Free for 1 month in beta
                </p>
              </div>
              <p className="whitespace-nowrap flex flex-col justify-center flex-shrink-0 text-[rgb(18,_18,_18)] text-[36px] font-[Avenir] font-extrabold tracking-[-0.8496000170707703px] leading-10">
                Vivid Teams
              </p>
            </div>
            <div className="flex flex-row justify-start items-start pr-[30px] relative w-full flex-shrink-0">
              <p className="flex flex-col justify-center flex-shrink-0 flex-1 min-w-[0rem] text-[rgb(18,_18,_18)] text-[16px] font-[Avenir] font-normal tracking-[0.00800000037997961px] leading-[23px]">
                Manage your entire design system in Figma. Let developers focus
                on functionality while designers own the UI. Ship faster.{" "}
              </p>
            </div>
            <div className="flex flex-row justify-start items-start gap-4 relative w-full flex-shrink-0">
              <Feature
                heading="Create PRs in GitHub"
                description="Generate summaries, action items & insights"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
              />
              <Feature
                heading="Reuse Components"
                description="Generate summaries, action items & insights"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
              />
              <Feature
                heading="Call existing components"
                description="Generate summaries, action items & insights"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
              />
            </div>
          </div>
          <div className="flex flex-row justify-start items-start gap-3 pr-[389.42px] relative flex-shrink-0">
            <Button type="Primary" text="Get started" />
            <Button type="Secondary" text="I like shipping slowly" />
          </div>
        </div>
        <div className="overflow-hidden relative rounded-tl-[7px] rounded-br-[12px] [box-shadow:0px_4px_18px_rgb(0,_0,_0,_0.3)] w-[531px] h-[451px] flex-shrink-0">
          <div className="absolute w-[666.25px] h-[450.38px] origin-top-left opacity-100 overflow-hidden">
            <img
              src={pictureAiMobileDesktopPng.src}
              className="transform rotate-0 scale-[100%] translate-x-[0%] translate-y-[0%] origin-top-left h-full w-full"
            />
          </div>
          <p className="text-center flex flex-col justify-center absolute w-[16.75rem] h-[103px] text-[rgb(255,_252,_252)] text-[16px] font-[Inter] font-semibold tracking-[0.00800000037997961px] leading-[23px]">
            DEMO IMAGE/GIF
          </p>
        </div>
      </div>
    </div>
  );
};
