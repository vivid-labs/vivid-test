import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";
export const AiChatSidebar = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "856px",
        flexShrink: 0,
        backgroundColor: "rgb(255, 255, 255)",
        fontFamily: "Lato",
        ...override,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
          height: "fit-content",
          position: "relative",
          width: "100%",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            height: "fit-content",
            padding: "8px 16px",
            position: "relative",
            width: "100%",
            flexShrink: 0,
            background:
              "linear-gradient(160deg, rgb(253, 185, 67) 0%, rgb(215, 113, 231) 100%)",
          }}
        >
          <p
            style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              color: "rgb(255, 255, 255)",
              fontSize: "23px",
              lineHeight: "40px",
            }}
          >
            Dive deeper with
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              height: "fit-content",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Logo />
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                color: "rgb(255, 255, 255)",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              {" "}
              AI Chat
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            height: "fit-content",
            padding: "10px 0px",
            position: "relative",
            width: "100%",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "fit-content",
              padding: "0px 12px",
              position: "relative",
              width: "100%",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "fit-content",
                height: "fit-content",
                padding: "12px 16px",
                borderRadius: "10px",
                position: "relative",
                flexShrink: 0,
                borderStyle: "solid",
                borderColor: "rgb(218, 218, 218)",
                borderWidth: "2px",
              }}
            >
              <p
                style={{
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  height: "fit-content",
                  color: "rgb(0, 0, 0)",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                What objections showed up in this conversation?
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              height: "fit-content",
              padding: "0px 12px",
              position: "relative",
              width: "100%",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "fit-content",
                width: "fit-content",
                padding: "16px 8px",
                borderRadius: "10px",
                position: "relative",
                flexShrink: 0,
                borderStyle: "solid",
                borderColor: "rgb(218, 218, 218)",
                borderWidth: "2px",
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 38.02083432674408%, rgba(255, 255, 255, 0.50) 58.85416865348816%, rgb(255, 255, 255) 81.25%)",
              }}
            >
              <p
                style={{
                  height: "fit-content",
                  color: "rgb(0, 0, 0)",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Price/budget - The customer mentioned their initial budget
                expectation was around &#x24;10K, significantly lower than the
                quote.{" "}
              </p>
              <p
                style={{
                  height: "fit-content",
                  color: "rgb(0, 0, 0)",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Timing - The customer mentioned having other projects going on
                and wanting to think about timing/cash flow.
              </p>
            </div>
          </div>
          <div
            style={{
              overflow: "hidden",
              position: "absolute",
              left: "0%",
              right: "0%",
              width: "100%",
              top: "28.11%",
              bottom: "0%",
              height: "71.89%",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 50%, rgb(255, 255, 255) 84.375%)",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                position: "absolute",
                width: "100px",
                left: "139px",
                height: "100px",
                top: "4.37px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            height: "fit-content",
            padding: "0px 28px",
            position: "relative",
            width: "100%",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "4px",
              width: "fit-content",
              height: "fit-content",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                width: "fit-content",
                height: "fit-content",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  height: "fit-content",
                  color: "rgb(64, 64, 64)",
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                Introducing
              </p>
              <p
                style={{
                  background:
                    "linear-gradient(135deg, rgb(254, 186, 68) 0%, rgb(216, 114, 232) 100%)",
                  color: "transparent",
                  backgroundClip: "text",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >
                Rilla AI Chat
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "fit-content",
                height: "fit-content",
                padding: "0px 8px",
                borderRadius: "15px",
                position: "relative",
                flexShrink: 0,
                borderStyle: "solid",
                borderColor: "rgb(0, 0, 0)",
                borderWidth: "1px",
              }}
            >
              <p
                style={{
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  height: "fit-content",
                  color: "rgb(64, 64, 64)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Beta
              </p>
            </div>
          </div>
          <p
            style={{
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "rgb(64, 64, 64)",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            From objections to where the sales rep went off script &#x2013; AI
            Chat has answers for all your questions.
          </p>
          <CtaButton
            variants="Gradient"
            text="Start asking questions"
            override={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          height: "fit-content",
          padding: "0px 12px",
          position: "relative",
          width: "100%",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            borderRadius: "5px",
            width: "100%",
            height: "35px",
            flexShrink: 0,
            borderStyle: "solid",
            borderColor: "rgb(209, 208, 209)",
            borderWidth: "1px",
          }}
        />
        <p
          style={{
            color: "rgb(155, 155, 155)",
            fontSize: "10px",
            fontWeight: 400,
            lineHeight: "14px",
          }}
        >
          Please note that Rilla Chat is currently experimental and may produce
          inaccurate information about the conversation.
        </p>
      </div>
    </div>
  );
};
