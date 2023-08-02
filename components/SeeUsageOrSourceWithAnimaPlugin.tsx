import tryIt from "./tryIt.svg";
import image_15 from "./image_15.png";
import { SystemHandPointing } from "./SystemHandPointing";
import { PrimaryButton } from "./PrimaryButton";
export const SeeUsageOrSourceWithAnimaPlugin = ({
  override,
}: {
  override?: any;
}) => {
  return (
    <div
      className="overflow-hidden flex items-start relative w-full h-[658px] flex-shrink-0 bg-[rgb(255,_248,_233)] font-[Mulish]"
      style={override}
    >
      <div className="overflow-hidden flex flex-col justify-between items-start px-10 py-20 relative w-[400px] h-full flex-shrink-0 bg-[rgb(0,_147,_121)]">
        <div className="flex flex-col items-start gap-10 relative flex-shrink-0">
          <p className="text-white text-[32px] font-bold leading-[1.2em]">
            In the plugin inspect
          </p>
          <p className="text-white text-base font-normal leading-[1.5em]">
            Toggle to switch between usage and source.
          </p>
        </div>
        <img
          className="w-[107.62px] h-[54.08px] flex-shrink-0"
          src={tryIt.src}
        />
      </div>
      <div className="overflow-hidden relative h-full flex-shrink-0 flex-1 min-w-[0rem] bg-[rgb(236,_236,_235)]">
        <div className="">
          <div className="absolute w-[453px] left-[368px] h-[235px] top-[180px] bg-white rounded-lg" />
          <div className="absolute w-[453px] left-[368px] h-[222px] top-[180px] origin-top-left rounded-lg overflow-hidden">
            <img
              className="transform scale-x-[100%] scale-y-[282.88%] origin-top-left h-full w-full"
              src={image_15.src}
            />
          </div>
        </div>
        <p className="whitespace-nowrap text-black text-[12.91px] font-bold leading-[19.36px]">
          Toggle to view source
        </p>
        <SystemHandPointing
          override={{
            position: "absolute",
            top: "216px",
            left: "758px",
          }}
        />
        <PrimaryButton
          state="Default"
          type="Primary"
          showIcon={true}
          text="Select Me"
          override={{
            height: "40px",
            width: "fit-content",
            position: "absolute",
            top: "185px",
            left: "79.5px",
          }}
        />
        <p className="whitespace-nowrap text-black text-[12.91px] font-bold leading-[19.36px]">
          Select the button
        </p>
        <p className="whitespace-nowrap text-[rgb(0,_147,_121)] text-[44px] font-[Caveat] font-normal leading-[1.2em]">
          Try it out
        </p>
      </div>
    </div>
  );
};
