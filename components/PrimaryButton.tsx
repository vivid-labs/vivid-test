import { Icon } from "./Icon";

export const PrimaryButton = ({
  override,
  state,
  type,
  text,
  showIcon,
}: {
  override?: React.CSSProperties;
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
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        width: "fit-content",
        padding: "12px 20px",
        borderRadius: "8px",
        height: "40px",
        ...primaryButtonState,
        ...primaryButtonDivType,
        ...override,
      }}
    >
      <p
        style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          fontSize: "14px",
          fontFamily: "Poppins",
          fontWeight: 600,
          lineHeight: "24px",
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
