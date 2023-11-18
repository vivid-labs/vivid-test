import { CardStateLayerOutlined } from "./CardStateLayerOutlined";
import { IconButtonDark } from "./IconButtonDark";
import { IconsMoreVert_24px } from "./IconsMoreVert_24px";
import media from "./media.png";
import { ButtonDark } from "./ButtonDark";
import { IconsAdd_24px } from "./IconsAdd_24px";

export const StyleOutlined = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="flex items-start rounded-xl relative w-full h-[480px] font-[Roboto]"
      style={override}
    >
      <CardStateLayerOutlinedComponent />
      <div className="overflow-hidden rounded-xl relative h-full flex-1 min-w-0 border-solid border-[rgb(73,_69,_79)] border">
        <div className="flex flex-col items-center absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full">
          <Header />
          <div className="relative w-full flex-1 min-h-0">
            <img
              className="absolute left-0 right-0 w-auto top-[0%] bottom-[0%] h-full object-cover"
              src={media.src}
            />
          </div>
          <div className="flex flex-col items-start gap-8 p-4 w-full">
            <TitleSubhead />
            <p className="w-full text-[rgb(202,_196,_208)] text-sm font-normal tracking-[0.25px] leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <ButtonToolbar />
          </div>
        </div>
      </div>
    </div>
  );
};

const CardStateLayerOutlinedComponent = () => (
  <CardStateLayerOutlined
    state="enabled"
    override={{
      backgroundColor: "rgb(20, 18, 24)",
      borderWidth: "1px",
      borderColor: "rgb(73, 69, 79)",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0%",
      left: "0%",
      right: "0%",
      bottom: "0%",
    }}
  />
);

const Header = () => (
  <div className="flex items-center pl-4 pr-1 py-3 w-full h-[72px]">
    <div className="flex items-center gap-4 flex-1 min-w-0">
      <div className="overflow-hidden relative w-10 h-10">
        <div className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full bg-[rgb(208,_188,_255)] rounded-[50%]" />
        <p className="absolute w-10 h-10 text-[rgb(20,_18,_24)] text-base font-medium tracking-[0.15px] leading-6">
          A
        </p>
      </div>
      <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
        <p className="w-full text-[rgb(230,_224,_233)] text-base font-medium tracking-[0.15px] leading-6">
          Header
        </p>
        <p className="w-[57px] text-[rgb(230,_224,_233)] text-sm font-normal tracking-[0.25px] leading-5">
          Subhead
        </p>
      </div>
    </div>
    <IconButtonDark
      style="standard"
      state="enabled"
      icon={<IconsMoreVert_24px />}
    />
  </div>
);

const TitleSubhead = () => (
  <div className="flex flex-col items-start w-full">
    <p className="w-[328px] text-[rgb(230,_224,_233)] text-base font-normal tracking-[0.5px] leading-6">
      Title
    </p>
    <p className="w-[328px] text-[rgb(202,_196,_208)] text-sm font-normal tracking-[0.25px] leading-5">
      Subhead
    </p>
  </div>
);

const ButtonToolbar = () => (
  <div className="flex justify-end items-start gap-2 w-full">
    <ButtonDark
      style="Outlined"
      state="enabled"
      showIcon="False"
      labelText="Enabled"
      icon={<IconsAdd_24px />}
    />
    <ButtonDark
      style="Filled"
      state="enabled"
      showIcon="False"
      labelText="Enabled"
      icon={<IconsAdd_24px />}
    />
  </div>
);
