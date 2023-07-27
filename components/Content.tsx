import content from "./content.jpg";
import { Button } from "./Button";
export const Content = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "799px",
        flexShrink: 0,
        ...override,
      }}
      figma-id="8:12:55"
    >
      <img
        src={content.src}
        style={{
          objectFit: "cover",
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
        }}
        figma-id=""
      />
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "20px",
          height: "fit-content",
          padding: "24px",
          borderRadius: "14px",
          position: "absolute",
          boxShadow: "0px 4px 10px 4px rgb(0, 0, 0, 0.15)",
          width: "581px",
          left: "calc(50% - 291px)",
          top: "calc(50% - 183px)",
          backgroundColor: "rgb(255, 255, 255)",
        }}
        figma-id="8:12:56"
      >
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            height: "fit-content",
            position: "relative",
            width: "100%",
            flexShrink: 0,
          }}
          figma-id="8:12:57"
        >
          <p
            style={{
              height: "fit-content",
              textAlign: "center",
              color: "rgb(244, 86, 154)",
              fontSize: "30px",
              fontFamily: "Avenir",
              fontWeight: 900,
            }}
            figma-id="8:12:58"
          >
            Get started with Vivid Teams!
          </p>
        </div>
        <div
          style={{
            overflow: "hidden",
            borderRadius: "5px",
            position: "relative",
            width: "100%",
            height: "199px",
            flexShrink: 0,
            backgroundColor: "rgb(245, 241, 241)",
          }}
          figma-id="8:12:78"
        >
          <p
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "rgb(0, 0, 0)",
              fontSize: "16px",
              fontFamily: "Avenir",
              fontWeight: 500,
              letterSpacing: "0.01px",
              lineHeight: "23px",
            }}
            figma-id="8:12:81"
          >
            Vivid will now take you to GitHub and ask you to do some stuff. When
            you&#x2019;re done with that stuff, come back to edit this copy to
            reflect what actually needs to get done, make this styling a bit
            prettier, and then move on!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            height: "fit-content",
            position: "relative",
            width: "100%",
            flexShrink: 0,
          }}
          figma-id="8:29:718"
        >
          <Button
            type="Secondary"
            text="I'll do this later"
            override={{
              height: "fit-content",
              flex: "1 1 0%",
              minWidth: "0px",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
            figma-id="8:29:719"
          />
          <Button
            type="Primary"
            text="Take me to GitHub!"
            override={{
              height: "fit-content",
              flex: "1 1 0%",
              minWidth: "0px",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
            figma-id="8:12:63"
          />
        </div>
      </div>
    </div>
  );
};
