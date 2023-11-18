import { IconsSettings_24px } from "./IconsSettings_24px";

export const IconButtonDark = ({
  override,
  style,
  state,
  icon,
}: {
  override?: React.CSSProperties;
  style: string;
  state: string;
  icon: React.ReactNode;
}) => {
  if (style === "outlined" && state === "disabled") {
    return (
      <div
        className="flex flex-col justify-center items-center p-2 w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgba(230,_224,_233,_0.12)] border">
          <div className="flex justify-center items-center p-2">{icon}</div>
        </div>
      </div>
    );
  } else if (style === "outlined" && state === "pressed") {
    return (
      <div
        className="flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgb(147,_143,_153)] border">
          <div className="flex justify-center items-center p-2 bg-[rgba(202,_196,_208,_0.12)]">
            {icon}
          </div>
        </div>
      </div>
    );
  } else if (style === "outlined" && state === "focused") {
    return (
      <div
        className="flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgb(147,_143,_153)] border">
          <div className="flex justify-center items-center p-2 bg-[rgba(202,_196,_208,_0.12)]">
            {icon}
          </div>
        </div>
      </div>
    );
  } else if (style === "outlined" && state === "hovered") {
    return (
      <div
        className="flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgb(147,_143,_153)] border">
          <div className="flex justify-center items-center p-2 bg-[rgba(202,_196,_208,_0.08)]">
            {icon}
          </div>
        </div>
      </div>
    );
  } else if (style === "outlined" && state === "enabled") {
    return (
      <div
        className="flex flex-col justify-center items-center px-2 w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgb(147,_143,_153)] border">
          <div className="flex justify-center items-center p-2">{icon}</div>
        </div>
      </div>
    );
  } else if (style === "tonal" && state === "disabled") {
    return (
      <div
        className="flex flex-col justify-center items-center p-2 w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full bg-[rgba(230,_224,_233,_0.12)]">
          <div className="flex justify-center items-center p-2">{icon}</div>
        </div>
      </div>
    );
  } else if (style === "tonal" && state === "pressed") {
    return (
      <div
        className="flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(74,_68,_88)]">
          <div className="flex justify-center items-center p-2 bg-[rgba(232,_222,_248,_0.12)]">
            {icon}
          </div>
        </div>
      </div>
    );
  } else if (style === "tonal" && state === "focused") {
    return (
      <div
        className="flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(74,_68,_88)]">
          <div className="flex justify-center items-center p-2 bg-[rgba(232,_222,_248,_0.12)]">
            {icon}
          </div>
        </div>
      </div>
    );
  } else if (style === "tonal" && state === "hovered") {
    return (
      <div
        className="flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(74,_68,_88)]">
          <div className="flex justify-center items-center p-2 bg-[rgba(232,_222,_248,_0.08)]">
            {icon}
          </div>
        </div>
      </div>
    );
  } else if (style === "tonal" && state === "enabled") {
    return (
      <div
        className="flex flex-col justify-center items-center p-2 w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(74,_68,_88)]">
          <div className="flex justify-center items-center p-2">{icon}</div>
        </div>
      </div>
    );
  } else if (style === "filled" && state === "disabled") {
    return (
      <div
        className="flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full bg-[rgba(230,_224,_233,_0.12)]">
          <div className="flex justify-center items-center p-2">{icon}</div>
        </div>
      </div>
    );
  } else if (style === "filled" && state === "pressed") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(208,_188,_255)]">
          <div className="flex justify-center items-center p-2 bg-[rgba(56,_30,_114,_0.12)]">
            {icon}
          </div>
        </div>
      </div>
    );
  } else if (style === "filled" && state === "focused") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(208,_188,_255)]">
          <div className="flex justify-center items-center p-2 bg-[rgba(56,_30,_114,_0.12)]">
            {icon}
          </div>
        </div>
      </div>
    );
  } else if (style === "filled" && state === "hovered") {
    return (
      <div
        className="flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(208,_188,_255)]">
          <div className="flex justify-center items-center p-2 bg-[rgba(56,_30,_114,_0.08)]">
            {icon}
          </div>
        </div>
      </div>
    );
  } else if (style === "filled" && state === "enabled") {
    return (
      <div
        className="flex flex-col justify-center items-center p-2 w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(208,_188,_255)]">
          <div className="flex justify-center items-center p-2">{icon}</div>
        </div>
      </div>
    );
  } else if (style === "standard" && state === "disabled") {
    return (
      <div
        className="flex flex-col justify-center items-center opacity-[0.38] w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full">
          <div className="flex justify-center items-center p-2">{icon}</div>
        </div>
      </div>
    );
  } else if (style === "standard" && state === "pressed") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full">
          <div className="flex justify-center items-center p-2 bg-[rgba(202,_196,_208,_0.12)]">
            {icon}
          </div>
        </div>
      </div>
    );
  } else if (style === "standard" && state === "focused") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full">
          <div className="flex justify-center items-center p-2 bg-[rgba(202,_196,_208,_0.12)]">
            {icon}
          </div>
        </div>
      </div>
    );
  } else if (style === "standard" && state === "hovered") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full">
          <div className="flex justify-center items-center p-2 bg-[rgba(202,_196,_208,_0.08)]">
            {icon}
          </div>
        </div>
      </div>
    );
  } else if (style === "standard" && state === "enabled") {
    return (
      <div
        className="flex flex-col justify-center items-center w-12 h-12"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center rounded-full">
          <div className="flex justify-center items-center p-2">{icon}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
