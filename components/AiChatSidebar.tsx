import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";
export const AiChatSidebar = ({ override }: { override?: any }) => {
  return (
    <div
      className="flex flex-col justify-between items-center relative w-full h-[856px] flex-shrink-0 bg-white font-[Lato]"
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
        className="flex flex-col items-center gap-7 relative w-full flex-shrink-0"
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
          className="flex items-center gap-2 px-4 py-2 relative w-full flex-shrink-0 bg-[linear-gradient(_160deg,_rgb(253,_185,_67)_0%,_rgb(215,_113,_231)_100%_)]"
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
            className="whitespace-nowrap text-white text-[23px] leading-10"
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
            className="flex items-center relative flex-shrink-0"
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
              className="whitespace-nowrap text-white text-2xl font-bold"
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
          className="flex flex-col justify-center items-center gap-2.5 px-[0rem] py-2.5 relative w-full flex-shrink-0"
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
            className="flex flex-col justify-center items-end px-3 py-[0rem] relative w-full flex-shrink-0"
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
              className="flex justify-center items-center px-4 py-3 rounded-[0.625rem] relative flex-shrink-0 border-solid border-[rgb(218,_218,_218)] border-[0.125rem]"
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
                className="whitespace-nowrap text-black text-sm font-normal"
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
            className="flex flex-col justify-center items-start px-3 py-[0rem] relative w-full flex-shrink-0"
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
              className="flex flex-col justify-center items-center px-2 py-4 rounded-[0.625rem] relative flex-shrink-0 border-solid border-[rgb(218,_218,_218)] border-[0.125rem] bg-[linear-gradient(_180deg,_rgba(255,_255,_255,_0)_38.02083432674408%,_rgba(255,_255,_255,_0.5)_58.85416865348816%,_rgb(255,_255,_255)_81.25%_)]"
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
                className="text-black text-sm font-normal"
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
                className="text-black text-sm font-normal"
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
            className="overflow-hidden absolute left-[0%] right-[0%] w-full top-[28.11%] bottom-[0%] h-[71.89%] bg-[linear-gradient(_180deg,_rgba(255,_255,_255,_0)_50%,_rgb(255,_255,_255)_84.375%_)]"
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
              className="overflow-hidden absolute w-[100px] left-[139px] h-[100px] top-[4.37px]"
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
          className="flex flex-col items-start gap-5 px-7 py-[0rem] relative w-full flex-shrink-0"
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
            className="flex items-start gap-1 relative flex-shrink-0"
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
              className="flex items-start gap-2 relative flex-shrink-0"
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
                className="whitespace-nowrap text-neutral-700 text-xl font-medium"
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
                className="bg-[linear-gradient(_135deg,_rgb(254,_186,_68)_0%,_rgb(216,_114,_232)_100%_)] text-transparent bg-clip-text text-xl font-bold"
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
              className="flex justify-center items-center px-2 py-[0rem] rounded-[15px] relative flex-shrink-0 border-solid border-black border"
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
                className="whitespace-nowrap text-neutral-700 text-sm font-medium"
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
            className="flex flex-col justify-center text-neutral-700 text-base font-medium"
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
        className="flex flex-col items-center gap-2 px-3 py-[0rem] relative w-full flex-shrink-0"
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
          className="rounded-[5px] w-full h-[35px] flex-shrink-0 border-solid border-[rgb(209,_208,_209)] border"
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
          className="text-[rgb(155,_155,_155)] text-[10px] font-normal leading-[0.875rem]"
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
