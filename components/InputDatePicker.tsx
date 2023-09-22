import { IconButton } from "./IconButton";
import { IconsToday_24px } from "./IconsToday_24px";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { IconsAdd_24px } from "./IconsAdd_24px";
export const InputDatePicker = ({
  override,
  type,
  supportingText,
  headlinePlural,
  headline,
}: {
  override?: React.CSSProperties;
  type: string;
  supportingText: string;
  headlinePlural: string;
  headline: string;
}) => {
  switch (type) {
    case "Range":
      return (
        <div
          className="overflow-hidden flex flex-col items-center rounded-[1.75rem] w-[328px] bg-[rgb(236,_230,_240)]"
          style={override}
        >
          <div className="flex flex-col items-start gap-9 pt-4 pr-3 pb-2 pl-6 w-full border-solid border-[rgb(202,_196,_208)] border-b">
            <p className="w-full text-[rgb(73,_69,_79)] text-sm font-medium tracking-[0.1px] leading-5">
              {supportingText}
            </p>
            <div className="flex items-center gap-[1px] w-full">
              <p className="flex-1 min-w-0 self-stretch text-[rgb(29,_27,_32)] text-[32px] font-normal leading-10">
                {headlinePlural}
              </p>
              <IconButton
                style="standard"
                state="enabled"
                icon={<IconsToday_24px />}
              />
            </div>
          </div>
          <div className="flex items-start gap-3 pt-[18px] px-6 pb-4 w-full">
            <TextField
              style="outlined"
              state="focused"
              textConfigurations="input-text"
              leadingIcon="false"
              trailingIcon="False"
              inputText="mm/dd/yyyy"
              supportingText="Supporting text"
              labelText="Date"
              placeholderText="Placeholder"
              showSupportingText={true}
              override={{
                height: "56px",
                flex: "1 1 0%",
              }}
            />
            <TextField
              style="outlined"
              state="enabled"
              textConfigurations="label-text"
              leadingIcon="false"
              trailingIcon="False"
              inputText="Input"
              supportingText="Supporting text"
              labelText="End date"
              placeholderText="Placeholder"
              showSupportingText={true}
              override={{
                height: "56px",
                flex: "1 1 0%",
              }}
            />
          </div>
          <div className="flex justify-end items-end gap-2 pt-2 px-3 pb-3 w-full">
            <Button
              style="Text"
              state="enabled"
              showIcon="False"
              labelText="Cancel"
              icon={<IconsAdd_24px />}
              override={{
                height: "fit-content",
                width: "fit-content",
              }}
            />
            <Button
              style="Text"
              state="enabled"
              showIcon="False"
              labelText="OK"
              icon={<IconsAdd_24px />}
            />
          </div>
        </div>
      );
    case "Single Input":
      return (
        <div
          className="overflow-hidden flex flex-col items-center rounded-[1.75rem] w-[328px] bg-[rgb(236,_230,_240)]"
          style={override}
        >
          <div className="flex flex-col items-start gap-9 pt-4 pr-3 pb-2 pl-6 w-full border-solid border-[rgb(202,_196,_208)] border-b">
            <p className="text-[rgb(73,_69,_79)] text-sm font-medium tracking-[0.1px] leading-5">
              {supportingText}
            </p>
            <div className="flex items-center gap-2 w-full">
              <p className="flex-1 min-w-0 self-stretch text-[rgb(29,_27,_32)] text-[32px] font-normal leading-10">
                {headline}
              </p>
              <IconButton
                style="standard"
                state="enabled"
                icon={<IconsToday_24px />}
              />
            </div>
          </div>
          <div className="flex flex-col items-center pt-[18px] px-6 pb-4 w-full">
            <TextField
              style="outlined"
              state="focused"
              textConfigurations="input-text"
              leadingIcon="false"
              trailingIcon="False"
              inputText="mm/dd/yyyy"
              supportingText="Supporting text"
              labelText="Date"
              placeholderText="Placeholder"
              showSupportingText={true}
              override={{
                height: "56px",
                width: "100%",
              }}
            />
          </div>
          <div className="flex justify-end items-end gap-2 pt-2 px-3 pb-3 w-full">
            <Button
              style="Text"
              state="enabled"
              showIcon="False"
              labelText="Cancel"
              icon={<IconsAdd_24px />}
              override={{
                height: "fit-content",
                width: "fit-content",
              }}
            />
            <Button
              style="Text"
              state="enabled"
              showIcon="False"
              labelText="OK"
              icon={<IconsAdd_24px />}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};
