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
        >
          <div
            style={{
              position: "relative",
              width: "56px",
              height: "56px",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "56px",
                left: "0px",
                height: "56px",
                top: "0px",
                backgroundColor: "rgb(244, 86, 154)",
                borderRadius: "50%",
              }}
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
          >
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "rgb(244, 86, 154)",
                fontSize: "16px",
                fontWeight: 900,
                letterSpacing: "0.01px",
                lineHeight: "23px",
              }}
            >
              {task}
            </p>
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "rgb(148, 148, 148)",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.01px",
                lineHeight: "23px",
              }}
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
          />
        </div>
      );
    case "Complete":
      return (
        <div
          style={{
            overflow: "hidden",
            display: "flex",
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
          >
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "rgb(148, 148, 148)",
                fontSize: "16px",
                fontWeight: 900,
                letterSpacing: "0.01px",
                lineHeight: "23px",
                textDecoration: "line-through",
              }}
            >
              {task}
            </p>
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "rgb(148, 148, 148)",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.01px",
                lineHeight: "23px",
              }}
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
        >
          <div
            style={{
              position: "relative",
              width: "56px",
              height: "56px",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "56px",
                left: "0px",
                height: "56px",
                top: "0px",
                backgroundColor: "rgb(217, 217, 217)",
                borderRadius: "50%",
              }}
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
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                height: "fit-content",
                position: "relative",
                width: "100%",
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  height: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "rgb(148, 148, 148)",
                  fontSize: "16px",
                  fontWeight: 900,
                  letterSpacing: "0.01px",
                  lineHeight: "23px",
                }}
              >
                {task}
              </p>
              <div
                style={{
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "flex-start",
                  width: "fit-content",
                  height: "fit-content",
                  padding: "0px 8px",
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "rgb(255, 255, 255)",
                    fontSize: "16px",
                    fontWeight: 500,
                    letterSpacing: "0.01px",
                    lineHeight: "23px",
                  }}
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
                color: "rgb(148, 148, 148)",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.01px",
                lineHeight: "23px",
              }}
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
        >
          <div
            style={{
              position: "relative",
              width: "56px",
              height: "56px",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "56px",
                left: "0px",
                height: "56px",
                top: "0px",
                backgroundColor: "rgb(217, 217, 217)",
                borderRadius: "50%",
              }}
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
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
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
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "rgb(148, 148, 148)",
                  fontSize: "16px",
                  fontWeight: 900,
                  letterSpacing: "0.01px",
                  lineHeight: "23px",
                }}
              >
                {task}
              </p>
              <div
                style={{
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "flex-start",
                  width: "fit-content",
                  height: "fit-content",
                  padding: "0px 8px",
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "rgb(255, 255, 255)",
                    fontSize: "16px",
                    fontWeight: 500,
                    letterSpacing: "0.01px",
                    lineHeight: "23px",
                  }}
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
                color: "rgb(148, 148, 148)",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.01px",
                lineHeight: "23px",
              }}
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
