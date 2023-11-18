import { IconsAdd_24px } from "./IconsAdd_24px";

export const ButtonDark = ({
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
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(230,_224,_233,_0.12)]">
          {icon}
          <p className="opacity-[0.38] text-[rgb(230,_224,_233)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "pressed" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(74,_68,_88)]"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(232,_222,_248,_0.12)]">
          {icon}
          <p className="text-[rgb(232,_222,_248)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "focused" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(74,_68,_88)]"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(232,_222,_248,_0.12)]">
          {icon}
          <p className="text-[rgb(232,_222,_248)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "hovered" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(74,_68,_88)]"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(232,_222,_248,_0.08)]">
          {icon}
          <p className="text-[rgb(232,_222,_248)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "enabled" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(74,_68,_88)]"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5">
          {icon}
          <p className="text-[rgb(232,_222,_248)] text-sm font-medium tracking-[0.1px] leading-5">
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
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(230,_224,_233,_0.12)]">
          <p className="opacity-[0.38] text-[rgb(230,_224,_233)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "pressed" && showIcon === "False") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(74,_68,_88)]"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(232,_222,_248,_0.12)]">
          <p className="text-[rgb(232,_222,_248)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "focused" && showIcon === "False") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(74,_68,_88)]"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(232,_222,_248,_0.12)]">
          <p className="text-[rgb(232,_222,_248)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "hovered" && showIcon === "False") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(74,_68,_88)]"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(232,_222,_248,_0.08)]">
          <p className="text-[rgb(232,_222,_248)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Tonal" && state === "enabled" && showIcon === "False") {
    return (
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(74,_68,_88)]"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5">
          <p className="text-[rgb(232,_222,_248)] text-sm font-medium tracking-[0.1px] leading-5">
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
        <div className="flex items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(230,_224,_233,_0.12)]">
          {icon}
          <p className="opacity-[0.38] text-[rgb(230,_224,_233)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(29,_27,_32)]"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(208,_188,_255,_0.12)]">
          {icon}
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(29,_27,_32)]"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(208,_188,_255,_0.12)]">
          {icon}
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(29,_27,_32)]"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(208,_188,_255,_0.08)]">
          {icon}
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(29,_27,_32)]"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5">
          {icon}
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(230,_224,_233,_0.12)]">
          <p className="opacity-[0.38] text-[rgb(230,_224,_233)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(29,_27,_32)]"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(208,_188,_255,_0.12)]">
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(29,_27,_32)]"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(208,_188,_255,_0.12)]">
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(29,_27,_32)]"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(208,_188,_255,_0.08)]">
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(29,_27,_32)]"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center px-6 py-2.5">
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
          <p className="opacity-[0.38] text-[rgb(230,_224,_233)] text-sm font-medium tracking-[0.1px] leading-5">
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
        <div className="flex justify-center items-center gap-2 pl-3 pr-4 py-2.5 bg-[rgba(208,_188,_255,_0.12)]">
          {icon}
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        <div className="flex justify-center items-center gap-2 pl-3 pr-4 py-2.5 bg-[rgba(208,_188,_255,_0.12)]">
          {icon}
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        <div className="flex justify-center items-center gap-2 pl-3 pr-4 py-2.5 bg-[rgba(208,_188,_255,_0.08)]">
          {icon}
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
          <p className="opacity-[0.38] text-[rgb(230,_224,_233)] text-sm font-medium tracking-[0.1px] leading-5">
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
        <div className="flex justify-center items-center px-3 py-2.5 bg-[rgba(208,_188,_255,_0.12)]">
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        <div className="flex justify-center items-center px-3 py-2.5 bg-[rgba(208,_188,_255,_0.12)]">
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        <div className="flex justify-center items-center px-3 py-2.5 bg-[rgba(208,_188,_255,_0.08)]">
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgba(230,_224,_233,_0.12)] border"
        style={override}
      >
        <div className="flex items-center gap-2 pl-4 pr-6 py-2.5">
          {icon}
          <p className="opacity-[0.38] text-[rgb(230,_224,_233)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgb(147,_143,_153)] border"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(208,_188,_255,_0.12)]">
          {icon}
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgb(208,_188,_255)] border"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(208,_188,_255,_0.12)]">
          {icon}
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgb(147,_143,_153)] border"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(208,_188,_255,_0.08)]">
          {icon}
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex justify-center items-center rounded-full border-solid border-[rgb(147,_143,_153)] border"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5">
          {icon}
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex flex-col justify-center items-center rounded-full border-solid border-[rgba(230,_224,_233,_0.12)] border"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5">
          <p className="opacity-[0.38] text-[rgb(230,_224,_233)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex flex-col justify-center items-center rounded-full border-solid border-[rgb(147,_143,_153)] border"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(208,_188,_255,_0.12)]">
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex flex-col justify-center items-center rounded-full border-solid border-[rgb(208,_188,_255)] border"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(208,_188,_255,_0.12)]">
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex flex-col justify-center items-center rounded-full border-solid border-[rgb(147,_143,_153)] border"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(208,_188,_255,_0.08)]">
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex flex-col justify-center items-center rounded-full border-solid border-[rgb(147,_143,_153)] border"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5">
          <p className="text-[rgb(208,_188,_255)] text-sm font-medium tracking-[0.1px] leading-5">
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
        <div className="flex items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(230,_224,_233,_0.12)]">
          {icon}
          <p className="opacity-[0.38] text-[rgb(230,_224,_233)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Filled" && state === "pressed" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(208,_188,_255)]"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 bg-[rgba(56,_30,_114,_0.12)]">
          {icon}
          <p className="text-[rgb(56,_30,_114)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Filled" && state === "focused" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(208,_188,_255)]"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 rounded bg-[rgba(56,_30,_114,_0.12)]">
          {icon}
          <p className="text-[rgb(56,_30,_114)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Filled" && state === "hovered" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(208,_188,_255)]"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
          ...override,
        }}
      >
        <div className="overflow-hidden flex justify-center items-center gap-2 pl-4 pr-6 py-2.5 rounded bg-[rgba(56,_30,_114,_0.08)]">
          {icon}
          <p className="text-[rgb(56,_30,_114)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else if (style === "Filled" && state === "enabled" && showIcon === "True") {
    return (
      <div
        className="overflow-hidden flex justify-center items-center rounded-full bg-[rgb(208,_188,_255)]"
        style={override}
      >
        <div className="flex justify-center items-center gap-2 pl-4 pr-6 py-2.5">
          {icon}
          <p className="text-[rgb(56,_30,_114)] text-sm font-medium tracking-[0.1px] leading-5">
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
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(230,_224,_233,_0.12)]">
          <p className="opacity-[0.38] text-[rgb(230,_224,_233)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(208,_188,_255)]"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center px-6 py-2.5 bg-[rgba(56,_30,_114,_0.12)]">
          <p className="text-[rgb(56,_30,_114)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(208,_188,_255)]"
        style={override}
      >
        <div className="overflow-hidden flex justify-center items-center px-6 py-2.5 bg-[rgba(56,_30,_114,_0.12)]">
          <p className="text-[rgb(56,_30,_114)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(208,_188,_255)]"
        style={{
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
          ...override,
        }}
      >
        <div className="flex justify-center items-center px-6 py-2.5 bg-[rgba(56,_30,_114,_0.08)]">
          <p className="text-[rgb(56,_30,_114)] text-sm font-medium tracking-[0.1px] leading-5">
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
        className="overflow-hidden flex flex-col justify-center items-center rounded-full bg-[rgb(208,_188,_255)]"
        style={override}
      >
        <div className="flex justify-center items-center px-6 py-2.5">
          <p className="text-[rgb(56,_30,_114)] text-sm font-medium tracking-[0.1px] leading-5">
            {labelText}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
