import tryIt from "./tryIt.svg";
import image_15 from "./image_15.png";
import { SystemHandPointing } from "./SystemHandPointing";
import { PrimaryButton } from "./PrimaryButton";

export const SeeUsageOrSourceWithAnimaPlugin = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
        height: "658px",
        backgroundColor: "rgb(255, 248, 233)",
        fontFamily: "Mulish",
        ...override,
      }}
    >
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "80px 40px",
          width: "400px",
          height: "100%",
          backgroundColor: "rgb(0, 147, 121)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "40px",
            height: "fit-content",
            width: "fit-content",
          }}
        >
          <PluginInspect />
          <ToggleToSwitchBetweenUsageAndSource />
        </div>
        <Disclaimer />
      </div>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          height: "100%",
          flex: "1 1 0%",
          minWidth: "0px",
          backgroundColor: "rgb(236, 236, 235)",
        }}
      >
        <div>
          <AiChatContainer />
          <Header />
        </div>
        <ToggleToViewSource />
        <ChatIntroduction />
        <SelectMe />
        <SelectTheButton />
        <TryItOut />
      </div>
    </div>
  );
};

const Disclaimer = () => (
  <img
    src={tryIt.src}
    style={{
      width: "108px",
      height: "54px",
    }}
  />
);

const PluginInspect = () => (
  <p
    style={{
      height: "fit-content",
      color: "rgb(255, 255, 255)",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "1.20em",
    }}
  >
    In the plugin inspect
  </p>
);

const ToggleToSwitchBetweenUsageAndSource = () => (
  <p
    style={{
      height: "fit-content",
      color: "rgb(255, 255, 255)",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "1.50em",
    }}
  >
    Toggle to switch between usage and source.
  </p>
);

const ToggleToViewSource = () => (
  <p
    style={{
      width: "fit-content",
      whiteSpace: "nowrap",
      height: "fit-content",
      color: "rgb(0, 0, 0)",
      fontSize: "12.91px",
      fontWeight: 700,
      lineHeight: "19.36px",
    }}
  >
    Toggle to view source
  </p>
);

const ChatIntroduction = () => (
  <SystemHandPointing
    override={{
      position: "absolute",
      top: "216px",
      left: "758px",
    }}
  />
);

const SelectMe = () => (
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
);

const SelectTheButton = () => (
  <p
    style={{
      width: "fit-content",
      whiteSpace: "nowrap",
      height: "fit-content",
      color: "rgb(0, 0, 0)",
      fontSize: "12.91px",
      fontWeight: 700,
      lineHeight: "19.36px",
    }}
  >
    Select the button
  </p>
);

const TryItOut = () => (
  <p
    style={{
      width: "fit-content",
      whiteSpace: "nowrap",
      height: "fit-content",
      color: "rgb(0, 147, 121)",
      fontSize: "44px",
      fontFamily: "Caveat",
      fontWeight: 400,
      lineHeight: "1.20em",
    }}
  >
    Try it out
  </p>
);

const AiChatContainer = () => (
  <div
    style={{
      position: "absolute",
      width: "453px",
      left: "368px",
      height: "235px",
      top: "180px",
      backgroundColor: "rgb(255, 255, 255)",
      borderRadius: "8px",
    }}
  />
);

const Header = () => (
  <div
    style={{
      position: "absolute",
      width: "453px",
      left: "368px",
      height: "222px",
      top: "180px",
      transformOrigin: "top left",
      borderRadius: "8px",
      overflow: "hidden",
    }}
  >
    <img
      style={{
        transform: "scale(100%, 282.88%)",
        transformOrigin: "top left",
        height: "100%",
        width: "100%",
      }}
      src={image_15.src}
    />
  </div>
);
