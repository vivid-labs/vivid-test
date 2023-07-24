import { RocketLaunch } from "./RocketLaunch";
export const Button = ({
  override,
  property_1,
  hasLeftIcon,
  leftIcon,
  hasText,
  text,
}: {
  override?: any;
  property_1: string;
  hasLeftIcon: boolean;
  leftIcon: any;
  hasText: boolean;
  text: string;
}) => {
  const buttonProperty_1 = {
    "Primary/Filled": {
      fontSize: "22px",
    },
    "Primary/Outlined": {
      fontSize: "22px",
    },
    "Secondary/Filled": {
      fontSize: "16px",
    },
    "Secondary/Outlined": {
      fontSize: "16px",
    },
    "Tertiary/Filled": {
      fontSize: "16px",
    },
    "Tertiary/Outlined": {
      fontSize: "16px",
    },
  }[property_1];
  const buttonDivProperty_1 = {
    "Primary/Filled": {
      height: "72px",
      backgroundColor: "rgb(162, 89, 255)",
    },
    "Primary/Outlined": {
      height: "72px",
      borderStyle: "solid",
      borderColor: "rgb(162, 89, 255)",
      borderWidth: "2px",
    },
    "Secondary/Filled": {
      height: "60px",
      backgroundColor: "rgb(162, 89, 255)",
    },
    "Secondary/Outlined": {
      height: "60px",
      borderStyle: "solid",
      borderColor: "rgb(162, 89, 255)",
      borderWidth: "2px",
    },
    "Tertiary/Filled": {
      height: "46px",
      backgroundColor: "rgb(162, 89, 255)",
    },
    "Tertiary/Outlined": {
      height: "46px",
      borderStyle: "solid",
      borderColor: "rgb(162, 89, 255)",
      borderWidth: "2px",
    },
  }[property_1];
  return (
    <div
      style={{
        ...buttonDivProperty_1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        width: "fit-content",
        padding: "0px 50px",
        borderRadius: "20px",
        position: "relative",
        ...override,
      }}
      figma-id="7:1173:11063"
    >
      {hasLeftIcon ? leftIcon : null}
      {hasText ? (
        <p
          style={{
            ...buttonProperty_1,
            width: "fit-content",
            whiteSpace: "nowrap",
            height: "fit-content",
            textAlign: "center",
            color: "rgb(255, 255, 255)",
            fontFamily: "Work Sans",
            fontWeight: 600,
            lineHeight: "1.40em",
          }}
          figma-id="7:1173:11065"
        >
          {text}
        </p>
      ) : null}
    </div>
  );
};
