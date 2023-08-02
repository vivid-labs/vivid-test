import { Icon } from "./Icon";
export const PrimaryButton = ({
  override,
  state,
  type,
  text,
  showIcon,
}: {
  override?: any;
  state: string;
  type: string;
  text: string;
  showIcon: boolean;
}) => {
  const labelState = {
    Default: {
      color: "rgb(255, 255, 255)",
    },
    Hover: {
      color: "rgb(255, 255, 255)",
    },
    Disabled: {
      color: "rgb(134, 134, 134)",
    },
  }[state];
  const primaryButtonState = {
    Default: {
      backgroundColor: "rgb(0, 147, 121)",
    },
    Hover: {
      backgroundColor: "rgb(1, 109, 90)",
    },
    Disabled: {
      backgroundColor: "rgb(184, 184, 184)",
    },
  }[state];
  const labelTextType =
    type === "Secondary"
      ? {
          color: "rgb(184, 184, 184)",
        }
      : {
          color: "rgb(134, 134, 134)",
        };
  const primaryButtonDivType =
    type === "Secondary"
      ? {
          borderStyle: "solid",
          borderColor: "rgb(184, 184, 184)",
          borderWidth: "1px",
          backgroundColor: "rgb(255, 255, 255)",
        }
      : {
          backgroundColor: "rgb(184, 184, 184)",
        };
  return (
    <div
      className="flex justify-center items-center gap-2 px-5 py-3 rounded-lg relative h-10"
      style={{
        ...primaryButtonState,
        ...primaryButtonDivType,
        ...override,
      }}
    >
      <p
        className="whitespace-nowrap text-center text-sm font-[Poppins] font-semibold leading-6"
        style={{
          ...labelState,
          ...labelTextType,
        }}
      >
        {text}
      </p>
      {showIcon ? <Icon name="ArrowRight" /> : null}
    </div>
  );
};
