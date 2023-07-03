import newWindowIcon from "./newWindowIcon.png";

export const Step_3 = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
        height: "fit-content",
        borderRadius: "15px",
        position: "relative",
        width: "1440px",
        flexShrink: 0,
        backgroundColor: "rgb(255, 255, 255)",
        ...override,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
          height: "fit-content",
          padding: "32px 88px",
          position: "relative",
          width: "100%",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "10px",
            width: "fit-content",
            height: "fit-content",
            padding: "4px 8px",
            borderRadius: "4px",
            position: "relative",
            flexShrink: 0,
            backgroundColor: "rgb(255, 118, 160)",
          }}
        >
          <p
            style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              textAlign: "center",
              flexShrink: 0,
              color: "rgb(255, 255, 255)",
              fontSize: "18px",
              fontFamily: "Avenir",
              fontWeight: 500,
            }}
          >
            Vivid lets you focus on creating beautiful, intuitive designs while
            automatically creating a reusable component library for your
            developers in the process.{" "}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "10px",
            width: "fit-content",
            height: "fit-content",
            padding: "4px 8px",
            borderRadius: "4px",
            position: "relative",
            flexShrink: 0,
            backgroundColor: "rgb(255, 118, 160)",
          }}
        >
          <p
            style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              textAlign: "center",
              flexShrink: 0,
              color: "rgb(255, 255, 255)",
              fontSize: "18px",
              fontFamily: "Avenir",
              fontWeight: 500,
            }}
          >
            Let’s try it with a full design
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "10px",
            height: "fit-content",
            position: "relative",
            width: "100%",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              padding: "24px 16px",
              position: "relative",
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "10px",
                width: "fit-content",
                height: "fit-content",
                padding: "4px 8px",
                borderRadius: "4px",
                position: "relative",
                flexShrink: 0,
                backgroundColor: "rgb(0, 0, 0)",
              }}
            >
              <p
                style={{
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  height: "fit-content",
                  textAlign: "center",
                  flexShrink: 0,
                  color: "rgb(255, 255, 255)",
                  fontSize: "18px",
                  fontFamily: "Avenir",
                  fontWeight: 500,
                }}
              >
                The landing page below is built from many different components,
                some with variants{" "}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "10px",
                width: "fit-content",
                height: "fit-content",
                padding: "4px 8px",
                borderRadius: "4px",
                position: "relative",
                flexShrink: 0,
                backgroundColor: "rgb(0, 0, 0)",
              }}
            >
              <p
                style={{
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  height: "fit-content",
                  textAlign: "center",
                  flexShrink: 0,
                  color: "rgb(255, 255, 255)",
                  fontSize: "18px",
                  fontFamily: "Avenir",
                  fontWeight: 500,
                }}
              >
                Generate code with Vivid and check out the sandbox!
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "10px",
                width: "fit-content",
                height: "fit-content",
                padding: "4px 8px",
                borderRadius: "4px",
                position: "relative",
                flexShrink: 0,
                backgroundColor: "rgb(0, 0, 0)",
              }}
            >
              <p
                style={{
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  height: "fit-content",
                  textAlign: "center",
                  flexShrink: 0,
                  color: "rgb(255, 255, 255)",
                  fontSize: "18px",
                  fontFamily: "Avenir",
                  fontWeight: 500,
                }}
              >
                Hit this icon
              </p>
              <div
                style={{
                  width: "28px",
                  height: "27px",
                  flexShrink: 0,
                  transformOrigin: "top left",
                  opacity: 1,
                  overflow: "hidden",
                }}
              >
                <img
                  style={{
                    transform:
                      "rotate(0.00deg) scale(107.14%, 107.41%) translate(-3.33%, 0.00%)",
                    transformOrigin: "top left",
                    height: "100%",
                    width: "100%",
                  }}
                  src={newWindowIcon.src}
                />
              </div>
              <p
                style={{
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  height: "fit-content",
                  textAlign: "center",
                  flexShrink: 0,
                  color: "rgb(255, 255, 255)",
                  fontSize: "18px",
                  fontFamily: "Avenir",
                  fontWeight: 500,
                }}
              >
                in the top right of the sandbox preview to open the preview in a
                new window!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
