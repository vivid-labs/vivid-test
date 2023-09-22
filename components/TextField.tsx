import { IconButton } from "./IconButton";
import { IconsSearch_24px } from "./IconsSearch_24px";
import caret from "./caret.svg";
import caretImage from "./caretImage.svg";
import { IconsCancel_24px } from "./IconsCancel_24px";
import { IconsError_24px } from "./IconsError_24px";
import activeIndicatorImage3 from "./activeIndicatorImage3.svg";
import activeIndicatorImage2 from "./activeIndicatorImage2.svg";
import activeIndicatorImage1 from "./activeIndicatorImage1.svg";
import activeIndicatorImage from "./activeIndicatorImage.svg";
import activeIndicator from "./activeIndicator.svg";
export const TextField = ({
  override,
  style,
  state,
  textConfigurations,
  leadingIcon,
  trailingIcon,
  placeholderText,
  labelText,
  showSupportingText,
  supportingText,
  inputText,
}: {
  override?: React.CSSProperties;
  style: string;
  state: string;
  textConfigurations: string;
  leadingIcon: string;
  trailingIcon: string;
  placeholderText: string;
  labelText: string;
  showSupportingText: boolean;
  supportingText: string;
  inputText: string;
}) => {
  if (
    style === "outlined" &&
    state === "disabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full">
          <div className="flex items-center pr-4 py-1 rounded w-full border-solid border-[rgba(29,_27,_32,_0.12)] border">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
              override={{
                opacity: "0.38",
              }}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "error" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(179,_38,_30)] border-[0.125rem]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "hovered" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14 border-solid border-[rgb(29,_27,_32)] border-0"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(29,_27,_32)] border">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "focused" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(103,_80,_164)] border-[0.125rem]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "enabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(121,_116,_126)] border">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "disabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full">
          <div className="flex items-center pr-4 py-1 rounded w-full border-solid border-[rgba(29,_27,_32,_0.12)] border">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
              override={{
                opacity: "0.38",
              }}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  Label
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
          <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
            Supporting text
          </p>
        </div>
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "error" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(179,_38,_30)] border-[0.125rem]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "hovered" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14 border-solid border-[rgb(29,_27,_32)] border-0"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(29,_27,_32)] border">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "focused" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(103,_80,_164)] border-[0.125rem]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">{inputText}</div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "enabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(121,_116,_126)] border">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "disabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full">
          <div className="flex items-center pr-4 py-1 rounded w-full border-solid border-[rgba(121,_116,_126,_0.12)] border">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
              override={{
                opacity: "0.38",
              }}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  Input
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  Label
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
          <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
            Supporting text
          </p>
        </div>
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "error" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(179,_38,_30)] border-[0.125rem]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caretImage.src} />
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "hovered" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14 border-solid border-[rgb(29,_27,_32)] border-0"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(29,_27,_32)] border">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "focused" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(103,_80,_164)] border-[0.125rem]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caret.src} />
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "enabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(121,_116,_126)] border">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "disabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full">
          <div className="flex items-center pl-4 py-2 rounded w-full border-solid border-[rgba(29,_27,_32,_0.12)] border">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "error" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(179,_38,_30)] border-[0.125rem]">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "hovered" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14 border-solid border-[rgb(29,_27,_32)] border-0"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(29,_27,_32)] border">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "focused" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(103,_80,_164)] border-[0.125rem]">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "enabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(121,_116,_126)] border">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "disabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full">
          <div className="flex items-center pl-4 py-2 rounded w-full border-solid border-[rgba(29,_27,_32,_0.12)] border">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  Label
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
          <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
            Supporting text
          </p>
        </div>
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "error" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(179,_38,_30)] border-[0.125rem]">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "hovered" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14 border-solid border-[rgb(29,_27,_32)] border-0"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(29,_27,_32)] border">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "focused" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(103,_80,_164)] border-[0.125rem]">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">{inputText}</div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "enabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(121,_116,_126)] border">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "disabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full">
          <div className="flex items-center pl-4 py-2 rounded w-full border-solid border-[rgba(121,_116,_126,_0.12)] border">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  Input
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  Label
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
          <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
            Supporting text
          </p>
        </div>
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "error" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(179,_38,_30)] border-[0.125rem]">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caretImage.src} />
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "hovered" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14 border-solid border-[rgb(29,_27,_32)] border-0"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(29,_27,_32)] border">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "focused" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(103,_80,_164)] border-[0.125rem]">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caret.src} />
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "enabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(121,_116,_126)] border">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "disabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full">
          <div className="flex items-center py-1 rounded w-full border-solid border-[rgba(29,_27,_32,_0.12)] border">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
              override={{
                opacity: "0.38",
              }}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
              override={{
                opacity: "0.38",
              }}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "error" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(179,_38,_30)] border-[0.125rem]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsError_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "hovered" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14 border-solid border-[rgb(29,_27,_32)] border-0"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(29,_27,_32)] border">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "focused" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(103,_80,_164)] border-[0.125rem]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "enabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(121,_116,_126)] border">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "disabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full">
          <div className="flex items-center py-1 rounded w-full border-solid border-[rgba(29,_27,_32,_0.12)] border">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
              override={{
                opacity: "0.38",
              }}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  Label
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
              override={{
                opacity: "0.38",
              }}
            />
          </div>
        </div>
        <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
          <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
            Supporting text
          </p>
        </div>
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "error" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(179,_38,_30)] border-[0.125rem]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsError_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "hovered" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14 border-solid border-[rgb(29,_27,_32)] border-0"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(29,_27,_32)] border">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "focused" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(103,_80,_164)] border-[0.125rem]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">{inputText}</div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "enabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(121,_116,_126)] border">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "disabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full">
          <div className="flex items-center py-1 rounded w-full border-solid border-[rgba(121,_116,_126,_0.12)] border">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
              override={{
                opacity: "0.38",
              }}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  Input
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  Label
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
              override={{
                opacity: "0.38",
              }}
            />
          </div>
        </div>
        <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
          <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
            Supporting text
          </p>
        </div>
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "error" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(179,_38,_30)] border-[0.125rem]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caretImage.src} />
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsError_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "hovered" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14 border-solid border-[rgb(29,_27,_32)] border-0"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(29,_27,_32)] border">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "focused" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(103,_80,_164)] border-[0.125rem]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caret.src} />
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "enabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(121,_116,_126)] border">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[36px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "disabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full">
          <div className="flex items-center pl-4 py-1 rounded w-full border-solid border-[rgba(29,_27,_32,_0.12)] border">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
              override={{
                opacity: "0.38",
              }}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "error" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(179,_38,_30)] border-[0.125rem]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsError_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "hovered" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14 border-solid border-[rgb(29,_27,_32)] border-0"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(29,_27,_32)] border">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "focused" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(103,_80,_164)] border-[0.125rem]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "enabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(121,_116,_126)] border">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "disabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full">
          <div className="flex items-center pl-4 py-1 rounded w-full border-solid border-[rgba(29,_27,_32,_0.12)] border">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  Label
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
              override={{
                opacity: "0.38",
              }}
            />
          </div>
        </div>
        <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
          <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
            Supporting text
          </p>
        </div>
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "error" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(179,_38,_30)] border-[0.125rem]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsError_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "hovered" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14 border-solid border-[rgb(29,_27,_32)] border-0"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(29,_27,_32)] border">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "focused" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(103,_80,_164)] border-[0.125rem]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">{inputText}</div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "enabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(121,_116,_126)] border">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "disabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full">
          <div className="flex items-center pl-4 py-1 rounded w-full border-solid border-[rgba(121,_116,_126,_0.12)] border">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  Input
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="opacity-[0.38] text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  Label
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
              override={{
                opacity: "0.38",
              }}
            />
          </div>
        </div>
        <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
          <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
            Supporting text
          </p>
        </div>
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "error" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(179,_38,_30)] border-[0.125rem]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caretImage.src} />
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsError_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "hovered" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(29,_27,_32)] border">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "focused" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(103,_80,_164)] border-[0.125rem]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caret.src} />
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "outlined" &&
    state === "enabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded w-full border-solid border-[rgb(121,_116,_126)] border">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start relative h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
              <div className="flex items-center px-1 absolute -left-[4px] -top-[16px] bg-[rgb(254,_247,_255)]">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "disabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="opacity-[0.04] absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(29,_27,_32)] rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] opacity-[0.38] w-full">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage3.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "error" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage2.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "hovered" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgba(29,_27,_32,_0.08)]">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage1.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "focused" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "enabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicator.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "disabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="opacity-[0.04] absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(29,_27,_32)] rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] opacity-[0.38] w-full">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage3.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "error" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage2.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "hovered" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgba(29,_27,_32,_0.08)]">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage1.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "focused" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center h-6">{inputText}</div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "enabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage1.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "disabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="opacity-[0.04] absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(29,_27,_32)] rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] opacity-[0.38] w-full">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage3.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "error" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caretImage.src} />
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage2.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "hovered" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgba(29,_27,_32,_0.08)]">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage1.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "focused" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caret.src} />
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "enabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pr-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicator.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "disabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="opacity-[0.04] absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(29,_27,_32)] rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] opacity-[0.38] w-full">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage3.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "error" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center px-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage2.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "hovered" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center px-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgba(29,_27,_32,_0.08)]">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage1.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "focused" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center px-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "enabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center px-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicator.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "disabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="opacity-[0.04] absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(29,_27,_32)] rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] opacity-[0.38] w-full">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage3.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "error" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center px-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage2.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "hovered" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center px-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgba(29,_27,_32,_0.08)]">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage1.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "focused" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center px-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center h-6">{inputText}</div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "enabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center px-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicator.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "disabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="opacity-[0.04] absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(29,_27,_32)] rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] opacity-[0.38] w-full">
          <div className="flex items-center pl-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage3.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "error" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center px-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caretImage.src} />
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage2.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "hovered" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center px-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgba(29,_27,_32,_0.08)]">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage1.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "focused" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center px-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caret.src} />
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "enabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "False"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center px-4 py-2 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicator.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "disabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="opacity-[0.04] absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(29,_27,_32)] rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] opacity-[0.38] w-full">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage3.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "error" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsError_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage2.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "hovered" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgba(29,_27,_32,_0.08)]">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage1.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "focused" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "enabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicator.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "disabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="opacity-[0.04] absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(29,_27,_32)] rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] opacity-[0.38] w-full">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage3.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "error" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsError_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage2.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "hovered" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgba(29,_27,_32,_0.08)]">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage1.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "focused" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center h-6">{inputText}</div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "enabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicator.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "disabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="opacity-[0.04] absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(29,_27,_32)] rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] opacity-[0.38] w-full">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage3.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "error" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caretImage.src} />
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsError_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage2.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "hovered" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgba(29,_27,_32,_0.08)]">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage1.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "focused" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caret.src} />
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "enabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "true" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsSearch_24px />}
            />
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicator.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "disabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="opacity-[0.04] absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(29,_27,_32)] rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] opacity-[0.38] w-full">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage3.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "error" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsError_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage2.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "hovered" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgba(29,_27,_32,_0.08)]">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage1.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "focused" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "enabled" &&
    textConfigurations === "placeholder-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-start">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {placeholderText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicator.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "disabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="opacity-[0.04] absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(29,_27,_32)] rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] opacity-[0.38] w-full">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage3.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "error" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsError_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage2.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "hovered" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgba(29,_27,_32,_0.08)]">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage1.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "focused" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center h-6">{inputText}</div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "enabled" &&
    textConfigurations === "label-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-base font-normal tracking-[0.5px] leading-6">
                  {labelText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicator.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "disabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="opacity-[0.04] absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(29,_27,_32)] rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] opacity-[0.38] w-full">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage3.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 opacity-[0.38] w-full">
            <p className="flex-1 min-w-0 text-[rgb(29,_27,_32)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "error" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caretImage.src} />
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsError_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage2.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(179,_38,_30)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "hovered" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgba(29,_27,_32,_0.08)]">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage1.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "focused" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(103,_80,_164)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
                <img className="w-0 h-4" src={caret.src} />
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicatorImage.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else if (
    style === "filled" &&
    state === "enabled" &&
    textConfigurations === "input-text" &&
    leadingIcon === "false" &&
    trailingIcon === "True"
  ) {
    return (
      <div
        className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-[210px] h-14"
        style={override}
      >
        <div className="flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] w-full bg-[rgb(230,_224,_233)]">
          <div className="flex items-center pl-4 py-1 rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="flex flex-col justify-center items-start h-10 flex-1 min-w-0">
              <div className="flex items-center">
                <p className="text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
                  {labelText}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[rgb(29,_27,_32)] text-base font-normal tracking-[0.5px] leading-6">
                  {inputText}
                </p>
              </div>
            </div>
            <IconButton
              style="standard"
              state="enabled"
              icon={<IconsCancel_24px />}
            />
          </div>
        </div>
        <img className="w-full h-0" src={activeIndicator.src} />
        {showSupportingText ? (
          <div className="flex items-start pt-1 px-4 w-full">
            <p className="flex-1 min-w-0 text-[rgb(73,_69,_79)] text-xs font-normal leading-4">
              {supportingText}
            </p>
          </div>
        ) : null}
      </div>
    );
  } else {
    return null;
  }
};
