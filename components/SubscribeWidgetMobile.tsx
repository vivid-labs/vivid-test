import { User } from "./User";
import { EyeSlash } from "./EyeSlash";
import { Button } from "./Button";
import { EnvelopeSimple } from "./EnvelopeSimple";
export const SubscribeWidgetMobile = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        height: "fit-content",
        width: "fit-content",
        position: "relative",
        ...override,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "12px",
          padding: "16px 20px",
          borderRadius: "20px",
          position: "relative",
          width: "315px",
          height: "46px",
          flexShrink: 0,
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "rgb(133, 133, 132)",
          backgroundColor: "rgb(255, 255, 255)",
        }}
      >
        <User
          override={{
            height: "20px",
            width: "20px",
          }}
        />
        <p
          style={{
            height: "fit-content",
            flexShrink: 0,
            flex: "1 1 0%",
            minWidth: "0px",
            color: "rgb(43, 43, 43)",
            fontSize: "16px",
            fontFamily: "Work Sans",
            fontWeight: 400,
            lineHeight: "1.399999976158142em",
          }}
        >
          Enter Your Email Address
        </p>
        <EyeSlash
          override={{
            height: "20px",
            width: "20px",
          }}
        />
      </div>
      <Button
        property_1="Tertiary/Filled"
        hasLeftIcon={true}
        leftIcon={<EnvelopeSimple />}
        hasText={true}
        text="Subscribe"
        override={{
          height: "46px",
          width: "100%",
        }}
      />
    </div>
  );
};
