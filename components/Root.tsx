import combo from "./combo.png";
import vector_2 from "./vector_2.svg";
import polygon_1 from "./polygon_1.svg";
import polygon_2 from "./polygon_2.svg";
import star_1 from "./star_1.svg";
import line_1 from "./line_1.svg";
import group_1 from "./group_1.svg";
import flipCrop from "./flipCrop.png";
import { Component } from "./Component";

export const Root = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="flex w-full flex-col items-start gap-2 p-2 font-[Arial]"
      style={override}
    >
      <VividId />
      <RedBox />
      <div className="flex items-start gap-2">
        <VividCard />
        <Header />
      </div>
      <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <GradientBackground />
        <LinearGradient />
        <Disclaimer />
        <DisclaimerComponent />
        <RadialGradient />
        <RedGradientBox />
        <BackgroundCircle />
        <LinearGradientComponent />
        <ConicRadialLinearGradient />
      </div>
      <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <p className="text-[8px] font-normal text-white">Lorem </p>
        <GradientText />
        <p className="text-[8px] font-normal text-white">Lorem </p>
        <p className="text-[8px] font-[Times_New_Roman] font-normal text-white">
          Lorem
        </p>
        <p className="text-[8px] font-normal italic text-white">Lorem</p>
        <p className="text-[8px] font-bold text-white">Lorem</p>
        <p className="text-[8px] font-bold italic text-white">Lorem</p>
        <p className="text-base font-normal text-white">Lorem </p>
        <p className="text-[8px] font-normal tracking-[0.3em] text-white">
          Lorem{" "}
        </p>
        <p className="text-[8px] font-normal leading-[15px] text-white">
          Lorem
          <br />
          Ipsum
        </p>
        <p className="text-[8px] font-normal leading-[0px] text-white">Lorem</p>
        <p className="text-[8px] font-normal text-white">
          Lorem
          <br />
          Ipsum
        </p>
        <p className="text-[8px] font-normal text-white underline">Lorem </p>
        <p className="text-[8px] font-normal text-white line-through">Lorem </p>
        <p className="text-[8px] font-normal text-white">Lorem </p>
      </div>
      <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <AiChatBackground />
        <ConicGradientRadialGradientLinearGradient />
        <div className="h-[30px] w-[30px] bg-[rgba(36,_255,_0,_0.79)]" />
        <BackgroundGradient />
        <img className="h-[30px] w-[30px] object-cover" src={combo.src} />
        <div className="h-[30px] w-[30px] origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left -translate-x-[78.4%] translate-y-[135.5%] -rotate-[71.88deg] scale-x-[96.46%] scale-y-[34.74%] transform"
            src={combo.src}
          />
        </div>
        <AiChatIntroduction />
        <div className="relative h-[30px] w-[30px] overflow-hidden">
          <div className="absolute h-full w-full bg-[rgb(0,_255,_255)]" />
          <img
            className="absolute h-full w-full object-cover opacity-50"
            src={combo.src}
          />
          <ConicGradient />
          <img
            className="absolute h-full w-full origin-top-left -translate-x-[78.4%] translate-y-[135.5%] -rotate-[71.88deg] scale-x-[96.46%] scale-y-[34.74%] transform"
            src={combo.src}
          />
          <RadialGradientBackground />
          <img
            className="absolute h-full w-full origin-top-left -translate-y-[4.12%] translate-x-[2.9%] rotate-[10.87deg] scale-x-[96.46%] scale-y-[34.74%] transform"
            src={combo.src}
          />
          <GradientBackgroundComponent />
        </div>
      </div>
      <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <div className="h-[30px] w-[30px] bg-[rgb(191,_43,_43)]" />
        <div className="w-2.5 self-stretch bg-[rgb(191,_43,_43)]" />
        <AiChatDisclaimer />
        <ChatHeader />
        <div className="h-[30px] w-[30px] rounded-lg bg-[rgb(191,_43,_43)] [rotate:0deg]" />
        <div className="h-[30px] w-[30px] rounded-bl-[8px] rounded-br-[6px] rounded-tl-[2px] rounded-tr-[4px] bg-[rgb(191,_43,_43)] [rotate:0deg]" />
        <GradientBox />
        <VividGradient />
        <div className="h-[30px] w-[30px] border-[0.25rem] border-solid border-[rgb(232,_149,_114)] bg-[rgb(191,_43,_43)]" />
      </div>
      <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <div className="relative h-[34px] w-[34px] overflow-hidden bg-[rgb(191,_43,_43)]">
          <p className="absolute left-[11px] top-[11.11px] h-2.5 w-[13px] font-[Inter] text-xs font-normal text-white">
            T
          </p>
        </div>
        <div className="relative h-[34px] w-[34px] overflow-hidden bg-[rgb(191,_43,_43)] [rotate:36.6deg]">
          <p className="absolute left-[11px] top-[11.11px] h-2.5 w-[13px] font-[Inter] text-xs font-normal text-white">
            T
          </p>
        </div>
        <div className="relative h-[34px] w-[34px] overflow-hidden bg-[rgb(191,_43,_43)] [rotate:128.5deg]">
          <p className="absolute left-[11px] top-[11.11px] h-2.5 w-[13px] font-[Inter] text-xs font-normal text-white">
            T
          </p>
        </div>
        <div className="relative h-[34px] w-[34px] overflow-hidden bg-[rgb(191,_43,_43)] [rotate:-141.9deg]">
          <p className="absolute left-[11px] top-[11.11px] h-2.5 w-[13px] font-[Inter] text-xs font-normal text-white">
            T
          </p>
        </div>
        <div className="relative h-[34px] w-[34px] overflow-hidden bg-[rgb(191,_43,_43)] [rotate:-51.3deg]">
          <p className="absolute left-[11px] top-[11.11px] h-2.5 w-[13px] font-[Inter] text-xs font-normal text-white">
            T
          </p>
        </div>
        <HeaderComponent />
        <LinearGradientBox />
      </div>
      <UserProfile />
      <SemanticName />
      <FlipCropImageContainer />
      <FlipCropPreview />
      <FlipCropComponent />
      <FlexContainer />
      <ChatDisclaimer />
    </div>
  );
};

const VividId = () => (
  <div className="flex items-start gap-2">
    <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
      <div className="h-[30px] w-[30px] bg-[rgb(191,_43,_43)] [rotate:-9deg]" />
      <div className="h-[30px] w-[30px] overflow-hidden bg-[rgb(191,_43,_43)]" />
      <div className="h-[30px] w-[30px] rounded bg-[rgb(191,_43,_43)]" />
      <div className="h-[30px] w-[30px] rounded-bl-[7px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[5px] bg-[rgb(191,_43,_43)]" />
    </div>
    <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
      <div className="flex h-[30px] w-[30px] flex-col items-center justify-center bg-[rgb(191,_43,_43)]">
        <div className="h-1 w-1 overflow-hidden bg-white" />
      </div>
      <div className="flex h-[30px] w-[30px] items-center justify-center bg-[rgb(191,_43,_43)] p-1">
        <div className="h-full min-w-0 flex-1 overflow-hidden bg-white" />
      </div>
      <div className="flex h-[30px] w-[30px] items-center justify-center bg-[rgb(191,_43,_43)] p-1">
        <div className="h-[5px] min-w-0 flex-1 overflow-hidden bg-white" />
      </div>
      <div className="flex h-[30px] w-[30px] items-center justify-center bg-[rgb(191,_43,_43)] p-1">
        <div className="h-full w-[5px] overflow-hidden bg-white" />
      </div>
      <div className="flex flex-col items-center justify-center bg-[rgb(191,_43,_43)] p-1">
        <div className="h-2.5 w-2.5 overflow-hidden bg-white" />
      </div>
    </div>
  </div>
);

const RedBox = () => (
  <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
    <div className="flex h-[30px] w-[30px] flex-col items-start bg-[rgb(191,_43,_43)]">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
    </div>
    <div className="flex h-[30px] w-[30px] items-start bg-[rgb(191,_43,_43)]">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
    </div>
    <div className="flex h-[30px] w-[30px] items-start justify-center bg-[rgb(191,_43,_43)]">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
    </div>
    <div className="flex h-[30px] w-[30px] items-end justify-end bg-[rgb(191,_43,_43)]">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
    </div>
    <div className="flex h-[30px] w-[30px] items-center justify-between bg-[rgb(191,_43,_43)]">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
    </div>
    <div className="flex h-[30px] w-[30px] items-start bg-[rgb(191,_43,_43)] px-[5px] py-2.5">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
    </div>
    <div className="flex h-[30px] w-[30px] items-start gap-[5px] bg-[rgb(191,_43,_43)]">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
    </div>
    <div className="flex h-[30px] w-[30px] items-center justify-between bg-[rgb(191,_43,_43)] pb-2.5 pl-1 pr-2 pt-1.5">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
    </div>
    <div className="flex items-center justify-center gap-1 bg-[rgb(191,_43,_43)] p-1">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
    </div>
    <div className="flex items-center justify-center gap-1 bg-[rgb(191,_43,_43)] p-1">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-3 w-1 overflow-hidden bg-white" />
      <div className="w-1 self-stretch overflow-hidden bg-white" />
    </div>
  </div>
);

const UserProfile = () => (
  <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
    <p className="text-[8px] font-normal text-white">Lorem </p>
    <p className="w-[34px] text-[8px] font-normal text-white">Lorem Ipsum </p>
    <p className="h-5 w-8 text-[8px] font-normal text-white">Lorem </p>
    <p className="h-4 w-[19px] overflow-hidden overflow-ellipsis text-[8px] font-normal text-white">
      Lorem{" "}
    </p>
    <p className="w-9 text-[8px] font-normal text-white">Lorem </p>
    <p className="w-[33px] text-[8px] font-normal text-white">Lorem </p>
    <p className="w-[33px] text-[8px] font-normal text-white">Lor em Ips um</p>
    <p className="h-5 w-[33px] text-[8px] font-normal text-white">Lorem </p>
    <p className="h-5 w-[33px] text-[8px] font-normal text-white">Lorem </p>
    <p className="h-5 w-[33px] text-[8px] font-normal text-white">Lorem </p>
    <p className="text-[8px] font-normal text-white [filter:blur(1px)_drop-shadow(0px_4px_2px_rgb(255,_0,_0))]">
      Lorem{" "}
    </p>
  </div>
);

const SemanticName = () => (
  <div className="relative flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
    <img className="h-[35px] w-[25px]" src={vector_2.src} />
    <img className="h-[35px] w-[25px]" src={vector_2.src} />
    <img className="h-[51px] w-[19px]" src={polygon_1.src} />
    <img className="h-[51px] w-[19px]" src={polygon_2.src} />
    <img className="h-[21px] w-[41px]" src={star_1.src} />
    <img className="h-0 w-12 [rotate:-37.3deg]" src={line_1.src} />
    <img className="h-10 w-[38px] [rotate:25.5deg]" src={group_1.src} />
    <p className="h-[21px] w-[33px] font-[Inter] text-[6px] font-semibold text-white">
      To prevent grouping
    </p>
  </div>
);

const FlipCropImageContainer = () => (
  <div className="flex items-center gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
    <img className="h-10 w-8 object-cover" src={flipCrop.src} />
    <img className="h-10 w-8 object-contain" src={flipCrop.src} />
    <img className="h-10 w-8 object-none" src={flipCrop.src} />
    <img
      className="h-10 w-8 rounded-lg border border-solid border-[rgb(226,_19,_19)] object-cover opacity-80 [rotate:-9deg]"
      style={{
        boxShadow: "0px 4px 4px rgb(255, 255, 255)",
      }}
      src={flipCrop.src}
    />
    <img
      className="h-[45px] w-[83px] rounded-[50%] border border-solid border-[rgb(255,_0,_0)] object-cover"
      src={flipCrop.src}
    />
  </div>
);

const FlipCropPreview = () => (
  <div className="flex items-center gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
    <div className="h-[27px] w-[27px] origin-top-left overflow-hidden">
      <img
        className="h-full w-full origin-top-left scale-y-[98.37%] transform"
        src={flipCrop.src}
      />
    </div>
    <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
      <img
        className="h-full w-full origin-top-left translate-x-[142.86%] scale-x-[25.93%] transform"
        src={flipCrop.src}
      />
    </div>
    <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
      <img
        className="h-full w-full origin-top-left -translate-x-[2.8%] translate-y-[230.97%] scale-x-[109.91%] scale-y-[16.85%] transform"
        src={flipCrop.src}
      />
    </div>
    <div className="h-[27px] w-[27px] origin-top-left overflow-hidden">
      <img
        className="h-full w-full origin-top-left -translate-y-[49.42%] translate-x-[16.85%] rotate-[45.45deg] scale-x-[109.05%] scale-y-[18.66%] transform"
        src={flipCrop.src}
      />
    </div>
    <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
      <img
        className="h-full w-full origin-top-left translate-x-[60.37%] scale-x-[109.91%] transform"
        src={flipCrop.src}
      />
    </div>
    <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
      <img
        className="h-full w-full origin-top-left -translate-x-[4.51%] -translate-y-[81.14%] scale-x-[109.91%] transform"
        src={flipCrop.src}
      />
    </div>
    <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
      <img
        className="h-full w-full origin-top-left -translate-y-[46.81%] translate-x-[17.52%] rotate-[42.3deg] scale-x-[114.97%] scale-y-[104.61%] transform"
        src={flipCrop.src}
      />
    </div>
    <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
      <img
        className="h-full w-full origin-top-left -translate-x-[46.81%] -translate-y-[117.52%] rotate-[137.7deg] scale-x-[114.97%] scale-y-[104.61%] transform"
        src={flipCrop.src}
      />
    </div>
    <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
      <img
        className="h-full w-full origin-top-left -translate-x-[117.52%] -translate-y-[53.19%] -rotate-[137.7deg] scale-x-[114.97%] scale-y-[104.61%] transform"
        src={flipCrop.src}
      />
    </div>
    <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
      <img
        className="h-full w-full origin-top-left -translate-x-[53.19%] translate-y-[17.52%] -rotate-[42.3deg] scale-x-[114.97%] scale-y-[104.61%] transform"
        src={flipCrop.src}
      />
    </div>
    <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
      <img
        className="h-full w-full origin-top-left -translate-x-[4.51%] rotate-0 scale-x-[109.91%] transform"
        src={flipCrop.src}
      />
    </div>
    <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
      <img
        className="h-full w-full origin-top-left translate-x-[35.17%] translate-y-[17.99%] -rotate-[26.7deg] scale-x-[40.31%] scale-y-[186.1%] transform"
        src={flipCrop.src}
      />
    </div>
  </div>
);

const FlipCropComponent = () => (
  <div className="flex items-center gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
    <img className="h-[27px] w-[27px] object-cover" src={flipCrop.src} />
    <img
      className="h-[27px] w-[27px] scale-x-[-100%] transform object-cover"
      src={flipCrop.src}
    />
    <img
      className="h-[27px] w-[27px] scale-x-[-100%] transform object-cover [rotate:-180deg]"
      src={flipCrop.src}
    />
    <img
      className="h-[27px] w-[27px] object-cover [rotate:180deg]"
      src={flipCrop.src}
    />
    <div className="h-[27px] w-[27px] origin-top-left overflow-hidden">
      <img
        className="h-full w-full origin-top-left -translate-y-[60.09%] translate-x-[85.01%] rotate-[51.94deg] scale-x-[55.72%] scale-y-[84.75%] transform"
        src={flipCrop.src}
      />
    </div>
  </div>
);

const FlexContainer = () => (
  <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
    <Component />
    <Component
      override={{
        borderWidth: "4px",
        borderColor: "rgb(105, 135, 240)",
        borderRadius: "10px",
        backgroundColor: "rgb(255, 18, 18)",
        boxShadow: "0px 4px 4px rgb(0, 255, 71)",
        rotate: "38.9deg",
        overflow: "visible",
      }}
    />
  </div>
);

const ChatDisclaimer = () => (
  <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
    <div className="relative flex h-[30px] w-[30px] flex-col items-start bg-[rgb(191,_43,_43)]">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="absolute left-2.5 top-1 h-1 w-1 overflow-hidden bg-white" />
    </div>
    <div className="relative flex h-[30px] w-[30px] items-start bg-[rgb(191,_43,_43)]">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="absolute bottom-4 right-[22px] h-1 w-1 overflow-hidden bg-white" />
    </div>
    <div className="relative flex h-[30px] w-[30px] items-start justify-center bg-[rgb(191,_43,_43)]">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="absolute bottom-[13.38px] left-2 right-[9px] top-[12.62px] h-auto w-auto overflow-hidden bg-white" />
    </div>
    <div className="relative flex h-[30px] w-[30px] items-end justify-end bg-[rgb(191,_43,_43)]">
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="h-1 w-1 overflow-hidden bg-white" />
      <div className="absolute bottom-[44.61%] left-[43.33%] right-[43.33%] top-[42.06%] h-[13.33%] w-[13.33%] overflow-hidden bg-white" />
    </div>
  </div>
);

const VividCard = () => (
  <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
    <div className="h-[30px] w-[30px] bg-[rgb(191,_43,_43)] opacity-60" />
    <div className="h-[30px] w-[30px] bg-[rgba(191,_43,_43,_0.4)]" />
    <div
      className="h-[30px] w-[30px]"
      style={{
        background:
          "linear-gradient(rgba(36, 0, 255, 0.20), rgba(36, 0, 255, 0.20)), linear-gradient(rgba(191, 43, 43, 0.40), rgba(191, 43, 43, 0.40))",
      }}
    />
    <div className="h-[30px] w-[30px] border border-solid border-[rgb(232,_149,_114)] bg-[rgb(191,_43,_43)]" />
    <div className="h-[30px] w-[30px] border-[0.25rem] border-solid border-[rgb(232,_149,_114)] bg-[rgb(191,_43,_43)]" />
    <div className="h-[30px] w-[30px] border-b-[0.25rem] border-l border-r-[3px] border-t-[0.125rem] border-solid border-[rgb(232,_149,_114)] bg-[rgb(191,_43,_43)]" />
  </div>
);

const Header = () => (
  <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
    <div
      className="h-[30px] w-[30px] bg-[rgb(191,_43,_43)]"
      style={{
        boxShadow: "0px 4px 4px rgb(255, 255, 255)",
      }}
    />
    <div className="h-[30px] w-[30px] bg-[rgb(191,_43,_43)] blur-[2px] filter" />
    <div
      className="h-[30px] w-[30px] bg-[rgb(191,_43,_43)]"
      style={{
        boxShadow: "inset 0px 4px 4px rgb(0, 0, 0)",
      }}
    />
  </div>
);

const GradientBackground = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const LinearGradient = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "linear-gradient(235deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const Disclaimer = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "radial-gradient(rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const DisclaimerComponent = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "radial-gradient(rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const RadialGradient = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "radial-gradient(rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const RedGradientBox = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "conic-gradient(from 180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const BackgroundCircle = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "conic-gradient(from 216deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const LinearGradientComponent = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "linear-gradient(180deg, rgb(191, 43, 43, 0.50) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const ConicRadialLinearGradient = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "conic-gradient(from 180deg, rgb(36, 0, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(rgb(82, 255, 0, 0.20) 0%, rgba(216, 15, 15, 0.00) 100%), linear-gradient(180deg, rgb(191, 43, 43, 0.50) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const GradientText = () => (
  <p
    className="bg-clip-text text-[8px] font-normal text-transparent"
    style={{
      background:
        "linear-gradient(180deg, rgb(255, 0, 0) 0%, rgba(255, 255, 255, 0.00) 100%), conic-gradient(from 180deg, rgb(0, 66, 255, 0.60) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(rgb(0, 255, 41, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%, rgba(0, 0, 0, 0.00) 100%)",
    }}
  >
    Lorem{" "}
  </p>
);

const AiChatBackground = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}
  />
);

const ConicGradientRadialGradientLinearGradient = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "conic-gradient(from 180deg, rgb(36, 255, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(rgb(82, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}
  />
);

const BackgroundGradient = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "linear-gradient(rgba(255, 0, 0, 0.49), rgba(255, 0, 0, 0.49)), linear-gradient(rgba(36, 255, 0, 0.79), rgba(36, 255, 0, 0.79))",
    }}
  />
);

const AiChatIntroduction = () => (
  <div className="relative h-[30px] w-[30px] overflow-hidden">
    <img className="absolute h-full w-full object-cover" src={combo.src} />
    <img
      className="absolute h-full w-full origin-top-left -translate-x-[78.4%] translate-y-[135.5%] -rotate-[71.88deg] scale-x-[96.46%] scale-y-[34.74%] transform"
      src={combo.src}
    />
    <img
      className="absolute h-full w-full origin-top-left -translate-y-[4.12%] translate-x-[2.9%] rotate-[10.87deg] scale-x-[96.46%] scale-y-[34.74%] transform"
      src={combo.src}
    />
  </div>
);

const ConicGradient = () => (
  <div
    className="absolute h-full w-full"
    style={{
      background:
        "conic-gradient(from 180deg, rgb(36, 255, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}
  />
);

const RadialGradientBackground = () => (
  <div
    className="absolute h-full w-full"
    style={{
      background:
        "radial-gradient(rgb(82, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}
  />
);

const GradientBackgroundComponent = () => (
  <div
    className="absolute h-full w-full"
    style={{
      background:
        "linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}
  />
);

const AiChatDisclaimer = () => (
  <div
    className="h-[30px] w-[30px] [rotate:-80.6deg]"
    style={{
      background:
        "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const ChatHeader = () => (
  <div
    className="h-[30px] w-[30px] [rotate:123.5deg]"
    style={{
      background:
        "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const GradientBox = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "linear-gradient(rgba(5, 0, 255, 0.50), rgba(5, 0, 255, 0.50)), linear-gradient(rgba(255, 0, 0, 0.52), rgba(255, 0, 0, 0.52))",
    }}
  />
);

const VividGradient = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "conic-gradient(from 180deg, rgb(36, 255, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(rgb(82, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}
  />
);

const HeaderComponent = () => (
  <div
    className="h-[30px] w-[30px] [rotate:0deg]"
    style={{
      background:
        "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const LinearGradientBox = () => (
  <div
    className="h-[30px] w-[30px] [rotate:50.6deg]"
    style={{
      background:
        "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);
