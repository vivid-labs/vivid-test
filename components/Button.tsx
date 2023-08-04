import * as React from "react";
export const Button = ({
  override,
  variant,
  size,
}: {
  override?: React.CSSProperties;
  variant: string;
  size: string;
}) => {
  const whatIsUpSquadVariant = {
    default: {
      width: "fit-content",
      whiteSpace: "nowrap",
      height: "fit-content",
      color: "rgb(248, 250, 252)",
    },
    destructive: {
      width: "fit-content",
      whiteSpace: "nowrap",
      height: "fit-content",
      color: "rgb(248, 250, 252)",
    },
    ghost: {
      width: "fit-content",
      whiteSpace: "nowrap",
      height: "fit-content",
      color: "rgb(2, 8, 23)",
    },
    link: {
      width: "fit-content",
      whiteSpace: "nowrap",
      height: "fit-content",
      color: "rgb(15, 23, 42)",
    },
    outline: {
      width: "fit-content",
      whiteSpace: "nowrap",
      height: "fit-content",
      color: "rgb(2, 8, 23)",
    },
    secondary: {
      width: "fit-content",
      whiteSpace: "nowrap",
      height: "fit-content",
      color: "rgb(15, 23, 42)",
    },
  }[variant];
  const buttonVariant = {
    default: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "fit-content",
      padding: "7px 12px 9px 11px",
      backgroundColor: "rgb(2, 43, 141)",
    },
    destructive: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "fit-content",
      padding: "7px 12px 9px 11px",
      backgroundColor: "rgb(2, 43, 141)",
    },
    ghost: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "fit-content",
      padding: "7px 12px 9px 11px",
      backgroundColor: "rgb(2, 43, 141)",
    },
    link: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "fit-content",
      padding: "7px 12px 9px 11px",
      backgroundColor: "rgb(2, 43, 141)",
    },
    outline: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "fit-content",
      padding: "7px 13px 9px 12px",
      borderStyle: "solid",
      borderColor: "rgb(226, 232, 240)",
      borderWidth: "1px",
      backgroundColor: "rgb(2, 43, 141)",
    },
    secondary: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "fit-content",
      padding: "7px 12px 9px 11px",
      backgroundColor: "rgb(2, 43, 141)",
    },
  }[variant];
  const whatIsUpSquadTextSize = {
    default: {
      width: "fit-content",
      whiteSpace: "nowrap",
      height: "fit-content",
    },
    icon: {},
    lg: {
      width: "fit-content",
      whiteSpace: "nowrap",
      height: "fit-content",
    },
    sm: {
      width: "fit-content",
      whiteSpace: "nowrap",
      height: "fit-content",
    },
  }[size];
  const buttonDivSize = {
    default: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",
      height: "fit-content",
      padding: "8px 16px",
      backgroundColor: "rgb(241, 245, 249)",
    },
    icon: {
      position: "relative",
      width: "40px",
      height: "40px",
      backgroundColor: "rgb(241, 245, 249)",
    },
    lg: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",
      height: "fit-content",
      padding: "11px 32px 13px 31px",
      backgroundColor: "rgb(241, 245, 249)",
    },
    sm: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",
      height: "fit-content",
      padding: "7px 12px 9px 11px",
      backgroundColor: "rgb(2, 43, 141)",
    },
  }[size];
  return (
    <div
      className="rounded-md"
      style={{
        ...buttonVariant,
        ...buttonDivSize,
        ...override,
      }}
    >
      <p
        className="text-sm font-medium leading-5"
        style={{
          ...whatIsUpSquadVariant,
          ...whatIsUpSquadTextSize,
        }}
      >
        What is up squad
      </p>
    </div>
  );
};
