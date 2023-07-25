import { City } from "./City";
import { Lake } from "./Lake";
import { Ski } from "./Ski";
import { Jungle } from "./Jungle";
import { Berlin } from "./Berlin";
export const TopPrograms = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "36px",
        height: "fit-content",
        padding: "56px 0px",
        position: "relative",
        width: "1440px",
        backgroundColor: "rgb(13, 17, 20)",
        ...override,
      }}
      figma-id="10:6:476"
    >
      <p
        style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          textAlign: "center",
          color: "rgb(255, 255, 255)",
          fontSize: "60px",
          fontFamily: "Quicksand",
          fontWeight: 700,
        }}
        figma-id="10:6:477"
      >
        Top Programs
      </p>
      <p
        style={{
          height: "fit-content",
          textAlign: "center",
          color: "rgb(255, 255, 255)",
          fontSize: "20px",
          fontFamily: "Quicksand",
          fontWeight: 400,
          letterSpacing: "-0.03em",
        }}
        figma-id="10:6:478"
      >
        Our programs are compiled by the best guides. Each tourist will be able
        to choose a program according to their level.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "36px",
          width: "fit-content",
          height: "fit-content",
          position: "relative",
          flexShrink: 0,
        }}
        figma-id="10:6:479"
      >
        <City
          size="Large"
          title="Mountains, Canada"
          price="$80"
          guidePosition="City Guide"
          guideName="Tim Hencordin"
          time="3 hours"
          backgroundImage={<Lake figma-id="10:" />}
          figma-id="10:6:480"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "22px",
            height: "fit-content",
            width: "fit-content",
            position: "relative",
            flexShrink: 0,
          }}
          figma-id="10:6:481"
        >
          <City
            size="Medium"
            title="Skiing"
            price="$360"
            guidePosition="City Guide"
            guideName="Jorge Zreik"
            time="3 hours"
            backgroundImage={<Ski figma-id="10:" />}
            figma-id="10:6:482"
          />
          <City
            size="Small"
            title="Forest"
            price="$20"
            guidePosition="City Guide"
            guideName="Tim Hencordin"
            time="6 hours"
            backgroundImage={<Jungle figma-id="10:" />}
            figma-id="10:6:483"
          />
        </div>
        <City
          size="Large"
          title="Berlin"
          price="$90"
          guidePosition="City Guide"
          guideName="Keny iman"
          time="10 hours"
          backgroundImage={<Berlin figma-id="10:" />}
          figma-id="10:6:484"
        />
      </div>
    </div>
  );
};
