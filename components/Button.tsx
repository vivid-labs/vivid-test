import { IconsAdd_24px } from "./IconsAdd_24px";
export const Button = ({
  override,
  style,
  state,
  showIcon,
  icon,
  labelText,
}: {
  override?: React.CSSProperties;
  style: string;
  state: string;
  showIcon: string;
  icon: React.ReactNode;
  labelText: string;
}) => {
  if (style === "Tonal" && state === "disabled" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(29,_27,_32,_0.12)]">
          {icon}
          <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "pressed" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(232,_222,_248)]"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(29,_25,_43,_0.12)]">
          {icon}
          <p className="text-[rgb(29,_25,_43)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "focused" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(232,_222,_248)]"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(29,_25,_43,_0.12)]">
          {icon}
          <p className="text-[rgb(29,_25,_43)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "hovered" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(232,_222,_248)]"
        style={{
          boxShadow:
            "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.30)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(29,_25,_43,_0.08)]">
          {icon}
          <p className="text-[rgb(29,_25,_43)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "enabled" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(232,_222,_248)]"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5">
          {icon}
          <p className="text-[rgb(29,_25,_43)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Tonal" &&
    state === "disabled" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(29,_27,_32,_0.12)]">
          <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "pressed" && showIcon === "False") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(232,_222,_248)]"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(29,_25,_43,_0.12)]">
          <p className="text-[rgb(29,_25,_43)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "focused" && showIcon === "False") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(232,_222,_248)]"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(29,_25,_43,_0.12)]">
          <p className="text-[rgb(29,_25,_43)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "hovered" && showIcon === "False") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(232,_222,_248)]"
        style={{
          boxShadow:
            "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.30)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(29,_25,_43,_0.08)]">
          <p className="text-[rgb(29,_25,_43)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "enabled" && showIcon === "False") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(232,_222,_248)]"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5">
          <p className="text-[rgb(29,_25,_43)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "disabled" &&
    showIcon === "True"
  ) {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(29,_27,_32,_0.12)]">
          {icon}
          <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "pressed" &&
    showIcon === "True"
  ) {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(247,_242,_250)]"
        style={{
          boxShadow:
            "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.30)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(103,_80,_164,_0.12)]">
          {icon}
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "focused" &&
    showIcon === "True"
  ) {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(247,_242,_250)]"
        style={{
          boxShadow:
            "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.30)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(103,_80,_164,_0.12)]">
          {icon}
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "hovered" &&
    showIcon === "True"
  ) {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(247,_242,_250)]"
        style={{
          boxShadow:
            "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.30)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(103,_80,_164,_0.08)]">
          {icon}
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "enabled" &&
    showIcon === "True"
  ) {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(247,_242,_250)]"
        style={{
          boxShadow:
            "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.30)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5">
          {icon}
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "disabled" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(29,_27,_32,_0.12)]">
          <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "pressed" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(247,_242,_250)]"
        style={{
          boxShadow:
            "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.30)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(103,_80,_164,_0.12)]">
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "focused" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(247,_242,_250)]"
        style={{
          boxShadow:
            "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.30)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(103,_80,_164,_0.12)]">
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "hovered" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(247,_242,_250)]"
        style={{
          boxShadow:
            "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.30)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(103,_80,_164,_0.08)]">
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Elevated" &&
    state === "enabled" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(247,_242,_250)]"
        style={{
          boxShadow:
            "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.30)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center px-6 py-2.5">
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "disabled" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-3 pr-4 py-2.5">
          {icon}
          <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "pressed" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-3 pr-4 py-2.5 bg-[rgba(103,_80,_164,_0.12)]">
          {icon}
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "focused" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-3 pr-4 py-2.5 bg-[rgba(103,_80,_164,_0.12)]">
          {icon}
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "hovered" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-3 pr-4 py-2.5 bg-[rgba(103,_80,_164,_0.08)]">
          {icon}
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "enabled" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-3 pr-4 py-2.5">
          {icon}
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "disabled" && showIcon === "False") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center px-3 py-2.5">
          <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "pressed" && showIcon === "False") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center px-3 py-2.5 bg-[rgba(103,_80,_164,_0.12)]">
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "focused" && showIcon === "False") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center px-3 py-2.5 bg-[rgba(103,_80,_164,_0.12)]">
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "hovered" && showIcon === "False") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center px-3 py-2.5 bg-[rgba(103,_80,_164,_0.08)]">
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Text" && state === "enabled" && showIcon === "False") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center px-3 py-2.5">
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "disabled" &&
    showIcon === "True"
  ) {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgba(29,_27,_32,_0.12)] border"
        style={override}
      >
        <div className="flex items-center gap-2 pl-4 pr-6 py-2.5">
          {icon}
          <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "pressed" &&
    showIcon === "True"
  ) {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgb(121,_116,_126)] border"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(103,_80,_164,_0.12)]">
          {icon}
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "focused" &&
    showIcon === "True"
  ) {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgb(103,_80,_164)] border"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(103,_80,_164,_0.12)]">
          {icon}
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "hovered" &&
    showIcon === "True"
  ) {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgb(121,_116,_126)] border"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(103,_80,_164,_0.08)]">
          {icon}
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "enabled" &&
    showIcon === "True"
  ) {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgb(121,_116,_126)] border"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5">
          {icon}
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "disabled" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full border-solid border-[rgba(29,_27,_32,_0.12)] border"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5">
          <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "pressed" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full border-solid border-[rgb(121,_116,_126)] border"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(103,_80,_164,_0.12)]">
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "focused" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full border-solid border-[rgb(103,_80,_164)] border"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(103,_80,_164,_0.12)]">
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "hovered" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full border-solid border-[rgb(121,_116,_126)] border"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(103,_80,_164,_0.08)]">
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Outlined" &&
    state === "enabled" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full border-solid border-[rgb(121,_116,_126)] border"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5">
          <p className="text-[rgb(103,_80,_164)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Filled" &&
    state === "disabled" &&
    showIcon === "True"
  ) {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(29,_27,_32,_0.12)]">
          {icon}
          <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Filled" && state === "pressed" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(103,_80,_164)]"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(255,_255,_255,_0.12)]">
          {icon}
          <p className="text-white text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Filled" && state === "focused" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(103,_80,_164)]"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 rounded bg-[rgba(255,_255,_255,_0.12)]">
          {icon}
          <p className="text-white text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Filled" && state === "hovered" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(103,_80,_164)]"
        style={{
          boxShadow:
            "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.30)",
          ...override,
        }}
      >
        <div className="overflow-hidden flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 rounded bg-[rgba(255,_255,_255,_0.08)]">
          {icon}
          <p className="text-white text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Filled" && state === "enabled" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(103,_80,_164)]"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5">
          {icon}
          <p className="text-white text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Filled" &&
    state === "disabled" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(29,_27,_32,_0.12)]">
          <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Filled" &&
    state === "pressed" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(103,_80,_164)]"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center px-6 py-2.5 bg-[rgba(255,_255,_255,_0.12)]">
          <p className="text-white text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Filled" &&
    state === "focused" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(103,_80,_164)]"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center px-6 py-2.5 bg-[rgba(255,_255,_255,_0.12)]">
          <p className="text-white text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Filled" &&
    state === "hovered" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(103,_80,_164)]"
        style={{
          boxShadow:
            "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.30)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(255,_255,_255,_0.08)]">
          <p className="text-white text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (
    style === "Filled" &&
    state === "enabled" &&
    showIcon === "False"
  ) {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(103,_80,_164)]"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5">
          <p className="text-white text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
