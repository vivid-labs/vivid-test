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
      <ChatDisclaimer />
      <VividBox />
      <div className="flex items-start gap-2">
        <ComponentName />
        <VividComponent />
      </div>
      <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <LinearGradient />
        <VividGradient />
        <RadialGradient />
        <RadialGradientBox />
        <GradientBox />
        <ConicGradient />
        <HeaderComponent />
        <LinearGradientBox />
        <ConicGradientRadialGradientLinearGradient />
      </div>
      <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <p className="text-[8px] font-normal text-white">Lorem </p>
        <Disclaimer />
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
        <LinearGradientContainer />
        <GradientBackground />
        <div className="h-[30px] w-[30px] bg-[rgba(36,_255,_0,_0.79)]" />
        <GradientBoxComponent />
        <img className="h-[30px] w-[30px] object-cover" src={combo.src} />
        <AiChatModule />
        <AiChatComponent />
        <div className="relative h-[30px] w-[30px] overflow-hidden">
          <div className="absolute h-full w-full bg-[rgb(0,_255,_255)]" />
          <img
            className="absolute h-full w-full object-cover opacity-50"
            src={combo.src}
          />
          <ConicGradientBackground />
          <AiChatIntroduction />
          <BackgroundGradient />
          <ImageContainer />
          <BackgroundGradientComponent />
        </div>
      </div>
      <div className="flex items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <div className="h-[30px] w-[30px] bg-[rgb(191,_43,_43)]" />
        <div className="w-2.5 self-stretch bg-[rgb(191,_43,_43)]" />
        <RillaChatExperimental />
        <RotatingGradientBackground />
        <div className="h-[30px] w-[30px] rounded-lg bg-[rgb(191,_43,_43)] [rotate:0deg]" />
        <div className="h-[30px] w-[30px] rounded-bl-[8px] rounded-br-[6px] rounded-tl-[2px] rounded-tr-[4px] bg-[rgb(191,_43,_43)] [rotate:0deg]" />
        <AiChatBox />
        <GradientBox1 />
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
        <DisclaimerComponent />
        <LinearGradientBackground />
      </div>
      <AiChatDisclaimer />
      <Component1 />
      <FlipCropComponent />
      <div className="flex items-center gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <FlipCropImage />
        <FlipCropImageComponent />
        <FlipCrop />
        <FlipCropImage1 />
        <AiChatDisclaimerComponent />
        <FlipCropComponent />
        <FlipCropImage2 />
        <AiChatImage />
        <FlipCropImage3 />
        <ImgContainer />
        <Header1 />
        <TitleDisclaimer />
      </div>
      <div className="flex items-center gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <img className="h-[27px] w-[27px] object-cover" src={flipCrop.src} />
        <AiChatHeader />
        <RotateFlipImage />
        <img
          className="h-[27px] w-[27px] object-cover [rotate:180deg]"
          src={flipCrop.src}
        />
        <FlipCropImage4 />
      </div>
      <FlexContainer />
      <Header />
    </div>
  );
};

const ChatDisclaimer = () => (
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

const VividBox = () => (
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

const AiChatDisclaimer = () => (
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

const Component1 = () => (
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

const FlipCropComponent = () => (
  <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform: "scale(109.91%, 100%) translate(-4.51%, -81.14%)",
      }}
      src={flipCrop.src}
    />
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

const Header = () => (
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

const ComponentName = () => (
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

const VividComponent = () => (
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

const LinearGradient = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const VividGradient = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "linear-gradient(235deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
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

const RadialGradientBox = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "radial-gradient(rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const GradientBox = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "radial-gradient(rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const ConicGradient = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "conic-gradient(from 180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const HeaderComponent = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "conic-gradient(from 216deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const LinearGradientBox = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "linear-gradient(180deg, rgb(191, 43, 43, 0.50) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const ConicGradientRadialGradientLinearGradient = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "conic-gradient(from 180deg, rgb(36, 0, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(rgb(82, 255, 0, 0.20) 0%, rgba(216, 15, 15, 0.00) 100%), linear-gradient(180deg, rgb(191, 43, 43, 0.50) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const Disclaimer = () => (
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

const LinearGradientContainer = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}
  />
);

const GradientBackground = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "conic-gradient(from 180deg, rgb(36, 255, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(rgb(82, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}
  />
);

const GradientBoxComponent = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "linear-gradient(rgba(255, 0, 0, 0.49), rgba(255, 0, 0, 0.49)), linear-gradient(rgba(36, 255, 0, 0.79), rgba(36, 255, 0, 0.79))",
    }}
  />
);

const AiChatModule = () => (
  <div className="h-[30px] w-[30px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform:
          "rotate(-71.88deg) scale(96.46%, 34.74%) translate(-78.4%, 135.5%)",
      }}
      src={combo.src}
    />
  </div>
);

const AiChatComponent = () => (
  <div className="relative h-[30px] w-[30px] overflow-hidden">
    <img className="absolute h-full w-full object-cover" src={combo.src} />
    <img
      className="absolute h-full w-full origin-top-left"
      src={combo.src}
      style={{
        transform:
          "rotate(-71.88deg) scale(96.46%, 34.74%) translate(-78.4%, 135.5%)",
      }}
    />
    <img
      className="absolute h-full w-full origin-top-left"
      src={combo.src}
      style={{
        transform:
          "rotate(10.87deg) scale(96.46%, 34.74%) translate(2.9%, -4.12%)",
      }}
    />
  </div>
);

const ConicGradientBackground = () => (
  <div
    className="absolute h-full w-full"
    style={{
      background:
        "conic-gradient(from 180deg, rgb(36, 255, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}
  />
);

const AiChatIntroduction = () => (
  <img
    className="absolute h-full w-full origin-top-left"
    src={combo.src}
    style={{
      transform:
        "rotate(-71.88deg) scale(96.46%, 34.74%) translate(-78.4%, 135.5%)",
    }}
  />
);

const BackgroundGradient = () => (
  <div
    className="absolute h-full w-full"
    style={{
      background:
        "radial-gradient(rgb(82, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}
  />
);

const ImageContainer = () => (
  <img
    className="absolute h-full w-full origin-top-left"
    src={combo.src}
    style={{
      transform:
        "rotate(10.87deg) scale(96.46%, 34.74%) translate(2.9%, -4.12%)",
    }}
  />
);

const BackgroundGradientComponent = () => (
  <div
    className="absolute h-full w-full"
    style={{
      background:
        "linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}
  />
);

const RillaChatExperimental = () => (
  <div
    className="h-[30px] w-[30px] [rotate:-80.6deg]"
    style={{
      background:
        "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const RotatingGradientBackground = () => (
  <div
    className="h-[30px] w-[30px] [rotate:123.5deg]"
    style={{
      background:
        "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const AiChatBox = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "linear-gradient(rgba(5, 0, 255, 0.50), rgba(5, 0, 255, 0.50)), linear-gradient(rgba(255, 0, 0, 0.52), rgba(255, 0, 0, 0.52))",
    }}
  />
);

const GradientBox1 = () => (
  <div
    className="h-[30px] w-[30px]"
    style={{
      background:
        "conic-gradient(from 180deg, rgb(36, 255, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(rgb(82, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}
  />
);

const DisclaimerComponent = () => (
  <div
    className="h-[30px] w-[30px] [rotate:0deg]"
    style={{
      background:
        "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const LinearGradientBackground = () => (
  <div
    className="h-[30px] w-[30px] [rotate:50.6deg]"
    style={{
      background:
        "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
    }}
  />
);

const FlipCropImage = () => (
  <div className="h-[27px] w-[27px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform: "scale(100%, 98.37%) translate(0%, 0%)",
      }}
      src={flipCrop.src}
    />
  </div>
);

const FlipCropImageComponent = () => (
  <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform: "scale(25.93%, 100%) translate(142.86%, 0%)",
      }}
      src={flipCrop.src}
    />
  </div>
);

const FlipCrop = () => (
  <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform: "scale(109.91%, 16.85%) translate(-2.8%, 230.97%)",
      }}
      src={flipCrop.src}
    />
  </div>
);

const FlipCropImage1 = () => (
  <div className="h-[27px] w-[27px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform:
          "rotate(45.45deg) scale(109.05%, 18.66%) translate(16.85%, -49.42%)",
      }}
      src={flipCrop.src}
    />
  </div>
);

const AiChatDisclaimerComponent = () => (
  <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform: "scale(109.91%, 100%) translate(60.37%, 0%)",
      }}
      src={flipCrop.src}
    />
  </div>
);

const FlipCropImage2 = () => (
  <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform:
          "rotate(42.3deg) scale(114.97%, 104.61%) translate(17.52%, -46.81%)",
      }}
      src={flipCrop.src}
    />
  </div>
);

const AiChatImage = () => (
  <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform:
          "rotate(137.7deg) scale(114.97%, 104.61%) translate(-46.81%, -117.52%)",
      }}
      src={flipCrop.src}
    />
  </div>
);

const FlipCropImage3 = () => (
  <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform:
          "rotate(-137.7deg) scale(114.97%, 104.61%) translate(-117.52%, -53.19%)",
      }}
      src={flipCrop.src}
    />
  </div>
);

const ImgContainer = () => (
  <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform:
          "rotate(-42.3deg) scale(114.97%, 104.61%) translate(-53.19%, 17.52%)",
      }}
      src={flipCrop.src}
    />
  </div>
);

const Header1 = () => (
  <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform: "rotate(0deg) scale(109.91%, 100%) translate(-4.51%, 0%)",
      }}
      src={flipCrop.src}
    />
  </div>
);

const TitleDisclaimer = () => (
  <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform:
          "rotate(-26.7deg) scale(40.31%, 186.1%) translate(35.17%, 17.99%)",
      }}
      src={flipCrop.src}
    />
  </div>
);

const AiChatHeader = () => (
  <img
    className="h-[27px] w-[27px] object-cover"
    style={{
      transform: "scale(-100%, 100%)",
    }}
    src={flipCrop.src}
  />
);

const RotateFlipImage = () => (
  <img
    className="h-[27px] w-[27px] object-cover [rotate:-180deg]"
    style={{
      transform: "scale(-100%, 100%)",
    }}
    src={flipCrop.src}
  />
);

const FlipCropImage4 = () => (
  <div className="h-[27px] w-[27px] origin-top-left overflow-hidden">
    <img
      className="h-full w-full origin-top-left"
      style={{
        transform:
          "rotate(51.94deg) scale(55.72%, 84.75%) translate(85.01%, -60.09%)",
      }}
      src={flipCrop.src}
    />
  </div>
);
