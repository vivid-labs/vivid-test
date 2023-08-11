import backArrow from "./backArrow.svg";
import socialIcon from "./socialIcon.svg";
import screenshot_2023_08_10At_7_17_1 from "./screenshot_2023_08_10At_7_17_1.png";
import screenshot_2023_08_10At_7_19_1 from "./screenshot_2023_08_10At_7_19_1.png";
import body from "./body.png";
import { Button } from "./Button";
import group_1 from "./group_1.svg";

export const Screen = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex flex-col items-start gap-4 p-2 relative w-full h-[752px] bg-white font-[Inter]"
      style={override}
    >
      <div className="overflow-hidden flex justify-between items-center px-1 pb-2 relative w-full h-[30px] border-solid border-[rgb(246,_246,_246)] border-b-[3px]">
        <img className="[rotate:-180deg] w-5 h-0" src={backArrow.src} />
        <img className="w-[13px] h-[17px]" src={socialIcon.src} />
      </div>
      <BitcoinPriceExplanation />
      <ScreenshotDateAndPrice />
      <div className="overflow-hidden flex items-start w-full flex-1 min-h-0">
        <img className="h-full flex-1 min-w-0 object-contain" src={body.src} />
      </div>
      <ButtonGroup />
      <div className="overflow-hidden backdrop-filter backdrop-blur-[1px] absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgba(199,_199,_199,_0.43)]" />
      <LimitedTimeOrder />
    </div>
  );
};

const BitcoinPriceExplanation = () => (
  <div className="overflow-hidden flex items-center gap-2.5 w-full">
    <img
      className="w-[54px] h-[51px] object-cover"
      src={screenshot_2023_08_10At_7_17_1.src}
    />
    <p className="w-[272px] text-[rgb(90,_90,_90)] text-base font-semibold">
      On December 1st, 2027, Bitcoin price will be &#x24;81,045.74 of more?
    </p>
  </div>
);

const ScreenshotDateAndPrice = () => (
  <div className="overflow-hidden flex justify-between items-start w-full">
    <p className="text-[rgb(0,_87,_138)] text-[32px] font-bold">51.00</p>
    <img
      className="w-[127px] self-stretch object-cover"
      src={screenshot_2023_08_10At_7_19_1.src}
    />
  </div>
);

const ButtonGroup = () => (
  <div className="overflow-hidden flex justify-between items-start w-full">
    <Button text="Yes" />
    <Button
      text="Buy No"
      override={{
        backgroundColor: "rgb(229, 92, 20)",
      }}
    />
  </div>
);

const LimitedTimeOrder = () => (
  <div
    className="overflow-hidden flex flex-col justify-center items-center gap-2.5 px-10 py-6 rounded-xl absolute bg-white"
    style={{
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
    }}
  >
    <p className="w-[179px] text-[rgb(9,_85,_127)] text-lg font-bold">
      Limited Time Order!
    </p>
    <p className="text-black text-xs font-medium">
      Ether will close higher today?
    </p>
    <img
      className="absolute left-[234px] right-[13.39px] w-auto top-[11.5px] bottom-[193.67px] h-auto"
      src={group_1.src}
    />
    <Button text="Yes" />
    <Button
      text="No"
      override={{
        backgroundColor: "rgb(229, 92, 20)",
      }}
    />
  </div>
);
