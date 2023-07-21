import heroSection from "./heroSection.png";
import { Navigation } from "./Navigation";
import { Button } from "./Button";
import { Feature } from "./Feature";
import { VolumeDown } from "./VolumeDown";
import { Program } from "./Program";
import { Home } from "./Home";

export const HeroSection = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "66px",
        height: "fit-content",
        position: "relative",
        width: "1440px",
        ...override,
      }}
      figma-id="4:6:421"
    >
      <img
        src={heroSection.src}
        style={{
          objectFit: "cover",
          opacity: 1,
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
        }}
        figma-id=""
      />
      <Navigation
        override={{
          height: "fit-content",
          width: "100%",
        }}
        figma-id="4:6:422"
      />
      <div
        style={{
          position: "relative",
          width: "793px",
          height: "304px",
          flexShrink: 0,
        }}
        figma-id="4:6:423"
      >
        <p
          style={{
            height: "fit-content",
            textAlign: "center",
            color: "rgb(255, 255, 255)",
            fontSize: "70px",
            fontFamily: "Quicksand",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
          figma-id="4:6:424"
        >
          Switzerland Has Never Been So Affordable
        </p>
        <p
          style={{
            height: "fit-content",
            textAlign: "center",
            color: "rgb(255, 255, 255)",
            fontSize: "25px",
            fontFamily: "Quicksand",
            fontWeight: 400,
            letterSpacing: "-0.03em",
          }}
          figma-id="4:6:425"
        >
          Discover Switzerland. Choose the best programs, guides, hotels and
          restaurants.
        </p>
      </div>
      <Button color="White" figma-id="4:6:426" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "31px",
          width: "fit-content",
          height: "fit-content",
          position: "relative",
          flexShrink: 0,
        }}
        figma-id="4:6:427"
      >
        <Feature
          title="Audio Guide"
          description="Travel on your own. Use the services of an audio guide."
          icon={<VolumeDown figma-id="4:" />}
          figma-id="4:6:428"
        />
        <Feature
          title="Programs"
          description="Choose a travel program that is right for you."
          icon={<Program figma-id="4:" />}
          figma-id="4:6:429"
        />
        <Feature
          title="Hotels & Restaurant"
          description="Book hotels and restaurants at the best prices"
          icon={<Home figma-id="4:" />}
          figma-id="4:6:430"
        />
      </div>
    </div>
  );
};
