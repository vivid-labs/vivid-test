import { Link } from "./Link";

export const Footer = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px",
        position: "relative",
        width: "1440px",
        height: "417px",
        backgroundColor: "rgb(15, 33, 43)",
        ...override,
      }}
      figma-id="10:6:447"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          position: "relative",
          width: "100%",
          height: "218px",
          flexShrink: 0,
        }}
        figma-id="10:6:448"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
            height: "fit-content",
            width: "fit-content",
            position: "relative",
            flexShrink: 0,
          }}
          figma-id="10:6:449"
        >
          <p
            style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              textAlign: "center",
              color: "rgb(255, 255, 255)",
              fontSize: "25px",
              fontFamily: "Quicksand",
              fontWeight: 700,
            }}
            figma-id="10:6:450"
          >
            MilanTour
          </p>
          <p
            style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              color: "rgb(255, 255, 255)",
              fontSize: "17px",
              fontFamily: "Quicksand",
              fontWeight: 500,
            }}
            figma-id="10:6:451"
          >
            Our vision is to provide convenience
            <br />
            and help you to find your best place for traveling
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "80px",
            width: "fit-content",
            height: "fit-content",
            position: "relative",
            flexShrink: 0,
          }}
          figma-id="10:6:452"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              height: "fit-content",
              width: "fit-content",
              position: "relative",
              flexShrink: 0,
            }}
            figma-id="10:6:453"
          >
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                color: "rgb(255, 255, 255)",
                fontSize: "18px",
                fontFamily: "Quicksand",
                fontWeight: 700,
              }}
              figma-id="10:6:454"
            >
              About
            </p>
            <Link linkText="Travels" figma-id="10:6:455" />
            <Link linkText="Partnership" figma-id="10:6:456" />
            <Link linkText="How to Travel" figma-id="10:6:457" />
            <Link linkText="Our plans" figma-id="10:6:458" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              height: "fit-content",
              width: "fit-content",
              position: "relative",
              flexShrink: 0,
            }}
            figma-id="10:6:459"
          >
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                color: "rgb(255, 255, 255)",
                fontSize: "18px",
                fontFamily: "Quicksand",
                fontWeight: 700,
              }}
              figma-id="10:6:460"
            >
              Community
            </p>
            <Link linkText="Events" figma-id="10:6:461" />
            <Link linkText="Blog" figma-id="10:6:462" />
            <Link linkText="Podcast" figma-id="10:6:463" />
            <Link linkText="Invite a Friend" figma-id="10:6:464" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              height: "fit-content",
              width: "fit-content",
              position: "relative",
              flexShrink: 0,
            }}
            figma-id="10:6:465"
          >
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                color: "rgb(255, 255, 255)",
                fontSize: "18px",
                fontFamily: "Quicksand",
                fontWeight: 700,
              }}
              figma-id="10:6:466"
            >
              Socials
            </p>
            <Link linkText="Facebook" figma-id="10:6:467" />
            <Link linkText="Instagram" figma-id="10:6:468" />
            <Link linkText="Twitter" figma-id="10:6:469" />
            <Link linkText="Discord" figma-id="10:6:470" />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "fit-content",
          padding: "28px 0px 0px",
          position: "relative",
          width: "100%",
          flexShrink: 0,
          borderStyle: "solid",
          borderColor: "rgb(255, 255, 255, 0.19)",
          borderTopWidth: "1px",
        }}
        figma-id="10:6:471"
      >
        <p
          style={{
            width: "fit-content",
            whiteSpace: "nowrap",
            height: "fit-content",
            color: "rgb(255, 255, 255)",
            fontSize: "15px",
            fontFamily: "Quicksand",
            fontWeight: 500,
          }}
          figma-id="10:6:472"
        >
          2023 MilanTour. All rights reserved
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "31px",
            width: "fit-content",
            height: "fit-content",
            position: "relative",
            flexShrink: 0,
          }}
          figma-id="10:6:473"
        >
          <Link linkText="Privacy Policy" figma-id="10:6:474" />
          <Link linkText="Terms & Conditions" figma-id="10:6:475" />
        </div>
      </div>
    </div>
  );
};
