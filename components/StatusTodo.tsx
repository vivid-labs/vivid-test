import { FigmaLogo } from "./FigmaLogo";
import img_2585_1 from "./img_2585_1.png";
export const StatusTodo = ({ override }: { override?: any }) => {
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
        width: "100%",
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
        <FigmaLogo
          override={{
            height: "35px",
            width: "35px",
          }}
        />
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
          Do this task
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
          Time to do this task
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
};
