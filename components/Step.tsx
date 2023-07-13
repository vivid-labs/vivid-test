import { FigmaLogo } from "./FigmaLogo";
import img_2585_1 from "./img_2585_1.png";
import { CheckMark } from "./CheckMark";
export const Step = ({
  override,
  status,
  icon,
  task,
  time,
}: {
  override?: any;
  status: string;
  icon: any;
  task: string;
  time: string;
}) => {
  switch (status) {
    case "Todo":
      return (
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            padding: "16px 20px",
            borderRadius: "5px",
            position: "relative",
            width: "368px",
            height: "86px",
            borderStyle: "solid",
            borderColor: "rgb(207, 207, 207)",
            borderWidth: "1px",
            backgroundColor: "rgb(255, 255, 255)",
            ...override,
          }}
          figma-id="404:195"
        >
          <div
            style={{
              position: "relative",
              width: "56px",
              height: "56px",
              flexShrink: 0,
            }}
            figma-id="404:196"
          >
            <div
              style={{
                position: "absolute",
                width: "56px",
                height: "56px",
                backgroundColor: "rgb(244, 86, 154)",
                borderRadius: "50%",
              }}
              figma-id="404:197"
            />
            {icon}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              height: "fit-content",
              position: "relative",
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
            }}
            figma-id="404:199"
          >
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                height: "23px",
                flexShrink: 0,
                color: "rgb(244, 86, 154)",
                fontSize: "16px",
                fontFamily: "Avenir",
                fontWeight: 900,
                letterSpacing: "0.01px",
                lineHeight: "23px",
              }}
              figma-id="404:200"
            >
              {task}
            </p>
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                height: "20px",
                flexShrink: 0,
                color: "rgb(148, 148, 148)",
                fontSize: "14px",
                fontFamily: "Avenir",
                fontWeight: 500,
                letterSpacing: "0.01px",
                lineHeight: "23px",
              }}
              figma-id="404:201"
            >
              {time}
            </p>
          </div>
          <img
            style={{
              width: "20px",
              height: "20.29px",
              flexShrink: 0,
              objectFit: "cover",
              opacity: 0.30000001192092896,
            }}
            src={img_2585_1.src}
            figma-id="404:202"
          />
        </div>
      );
    case "Complete":
      return (
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            padding: "16px 20px",
            borderRadius: "5px",
            position: "relative",
            width: "368px",
            height: "86px",
            borderStyle: "solid",
            borderColor: "rgb(207, 207, 207)",
            borderWidth: "1px",
            backgroundColor: "rgb(255, 255, 255)",
            ...override,
          }}
          figma-id="404:203"
        >
          <CheckMark
            override={{
              height: "56px",
              width: "56px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              height: "fit-content",
              position: "relative",
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
            }}
            figma-id="404:205"
          >
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                height: "23px",
                flexShrink: 0,
                color: "rgb(148, 148, 148)",
                fontSize: "16px",
                fontFamily: "Avenir",
                fontWeight: 900,
                letterSpacing: "0.01px",
                lineHeight: "23px",
                textDecoration: "line-through",
              }}
              figma-id="404:206"
            >
              {task}
            </p>
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                height: "20px",
                flexShrink: 0,
                color: "rgb(148, 148, 148)",
                fontSize: "14px",
                fontFamily: "Avenir",
                fontWeight: 500,
                letterSpacing: "0.01px",
                lineHeight: "23px",
              }}
              figma-id="404:207"
            >
              {time}
            </p>
          </div>
        </div>
      );
    case "Unsupported":
      return (
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            padding: "16px 20px",
            borderRadius: "5px",
            position: "relative",
            width: "368px",
            height: "86px",
            borderStyle: "solid",
            borderColor: "rgb(207, 207, 207)",
            borderWidth: "1px",
            backgroundColor: "rgb(245, 241, 241)",
            ...override,
          }}
          figma-id="404:208"
        >
          <div
            style={{
              position: "relative",
              width: "56px",
              height: "56px",
              flexShrink: 0,
            }}
            figma-id="404:209"
          >
            <div
              style={{
                position: "absolute",
                width: "56px",
                height: "56px",
                backgroundColor: "rgb(217, 217, 217)",
                borderRadius: "50%",
              }}
              figma-id="404:210"
            />
            {icon}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              height: "fit-content",
              position: "relative",
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
            }}
            figma-id="404:212"
          >
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
              figma-id="404:213"
            >
              <p
                style={{
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  height: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "rgb(148, 148, 148)",
                  fontSize: "16px",
                  fontFamily: "Avenir",
                  fontWeight: 900,
                  letterSpacing: "0.01px",
                  lineHeight: "23px",
                }}
                figma-id="404:214"
              >
                {task}
              </p>
              <div
                style={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "10px",
                  width: "fit-content",
                  height: "fit-content",
                  padding: "0px 8px",
                  borderRadius: "4px",
                  position: "relative",
                  flexShrink: 0,
                  backgroundColor: "rgb(0, 0, 0)",
                }}
                figma-id="404:215"
              >
                <p
                  style={{
                    width: "fit-content",
                    whiteSpace: "nowrap",
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "rgb(255, 255, 255)",
                    fontSize: "16px",
                    fontFamily: "Avenir",
                    fontWeight: 500,
                    letterSpacing: "0.01px",
                    lineHeight: "23px",
                  }}
                  figma-id="404:216"
                >
                  Coming Soon!
                </p>
              </div>
            </div>
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                height: "20px",
                flexShrink: 0,
                color: "rgb(148, 148, 148)",
                fontSize: "14px",
                fontFamily: "Avenir",
                fontWeight: 500,
                letterSpacing: "0.01px",
                lineHeight: "23px",
              }}
              figma-id="404:217"
            >
              {time}
            </p>
          </div>
        </div>
      );
    case "Up Next":
      return (
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            padding: "16px 20px",
            borderRadius: "5px",
            position: "relative",
            width: "368px",
            height: "86px",
            borderStyle: "solid",
            borderColor: "rgb(207, 207, 207)",
            borderWidth: "1px",
            backgroundColor: "rgb(255, 255, 255)",
            ...override,
          }}
          figma-id="404:218"
        >
          <div
            style={{
              position: "relative",
              width: "56px",
              height: "56px",
              flexShrink: 0,
            }}
            figma-id="404:219"
          >
            <div
              style={{
                position: "absolute",
                width: "56px",
                height: "56px",
                backgroundColor: "rgb(217, 217, 217)",
                borderRadius: "50%",
              }}
              figma-id="404:220"
            />
            {icon}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              height: "fit-content",
              position: "relative",
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
            }}
            figma-id="404:222"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "10px",
                width: "fit-content",
                height: "fit-content",
                position: "relative",
                flexShrink: 0,
              }}
              figma-id="404:223"
            >
              <p
                style={{
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  height: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "rgb(148, 148, 148)",
                  fontSize: "16px",
                  fontFamily: "Avenir",
                  fontWeight: 900,
                  letterSpacing: "0.01px",
                  lineHeight: "23px",
                }}
                figma-id="404:224"
              >
                {task}
              </p>
              <div
                style={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "10px",
                  width: "fit-content",
                  height: "fit-content",
                  padding: "0px 8px",
                  borderRadius: "4px",
                  position: "relative",
                  flexShrink: 0,
                  backgroundColor: "rgb(244, 86, 154)",
                }}
                figma-id="404:225"
              >
                <p
                  style={{
                    width: "fit-content",
                    whiteSpace: "nowrap",
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "rgb(255, 255, 255)",
                    fontSize: "16px",
                    fontFamily: "Avenir",
                    fontWeight: 500,
                    letterSpacing: "0.01px",
                    lineHeight: "23px",
                  }}
                  figma-id="404:226"
                >
                  Up Next!
                </p>
              </div>
            </div>
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                height: "20px",
                flexShrink: 0,
                color: "rgb(148, 148, 148)",
                fontSize: "14px",
                fontFamily: "Avenir",
                fontWeight: 500,
                letterSpacing: "0.01px",
                lineHeight: "23px",
              }}
              figma-id="404:227"
            >
              {time}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};
