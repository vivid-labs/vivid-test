import { Lake } from "./Lake";
import ticketImage1 from "./ticketImage1.svg";
import timeCircleImage from "./timeCircleImage.svg";
import image from "./image.jpg";
import ticketImage from "./ticketImage.svg";
import ticket from "./ticket.svg";
import timeCircle from "./timeCircle.svg";
export const City = ({
  override,
  size,
  backgroundImage,
  title,
  price,
  time,
  guideName,
  guidePosition,
}: {
  override?: any;
  size: string;
  backgroundImage: any;
  title: string;
  price: string;
  time: string;
  guideName: string;
  guidePosition: string;
}) => {
  const contentSize = {
    Large: {
      height: "562px",
    },
    Medium: {
      height: "360px",
    },
    Small: {
      height: "180px",
    },
  }[size];
  const citySize = {
    Large: {
      height: "562px",
    },
    Medium: {
      height: "360px",
    },
    Small: {
      height: "180px",
    },
  }[size];
  let ticketSrc;
  if (size === "Large") {
    ticketSrc = ticketImage1;
  } else if (size === "Medium") {
    ticketSrc = ticketImage;
  } else {
    ticketSrc = ticket;
  }
  let timeCircleSrc;
  if (size === "Large") {
    timeCircleSrc = timeCircleImage;
  } else if (size === "Medium") {
    timeCircleSrc = timeCircleImage;
  } else {
    timeCircleSrc = timeCircle;
  }
  return (
    <div
      style={{
        ...citySize,
        overflow: "hidden",
        borderRadius: "20px",
        position: "relative",
        width: "376px",
        ...override,
      }}
      figma-id="10:6:339"
    >
      <div
        style={{
          overflow: "hidden",
          borderRadius: "20px",
          position: "absolute",
          width: "376px",
          height: "562px",
          background:
            "linear-gradient(180deg, rgb(255, 255, 255, 0.63) 0%, rgb(0, 0, 0, 0.00) 100%)",
        }}
        figma-id="10:6:340"
      >
        {backgroundImage}
        <div
          style={{
            position: "absolute",
            right: "0%",
            width: "100%",
            bottom: "0%",
            height: "100%",
            background:
              "linear-gradient(0deg, rgb(13, 14, 16, 0.63) 0%, rgb(217, 217, 217, 0.00) 100%)",
          }}
          figma-id="10:6:342"
        />
      </div>
      <div
        style={{
          ...contentSize,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "34px 24px",
          position: "absolute",
          width: "376px",
        }}
        figma-id="10:6:343"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            height: "fit-content",
            width: "fit-content",
            position: "relative",
            flexShrink: 0,
          }}
          figma-id="10:6:344"
        >
          <p
            style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              textAlign: "center",
              color: "rgb(15, 33, 43)",
              fontSize: "20px",
              fontFamily: "Quicksand",
              fontWeight: 600,
            }}
            figma-id="10:6:345"
          >
            {title}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "9px",
              width: "fit-content",
              height: "fit-content",
              position: "relative",
              flexShrink: 0,
            }}
            figma-id="10:6:346"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                width: "fit-content",
                height: "fit-content",
                position: "relative",
                flexShrink: 0,
              }}
              figma-id="10:6:347"
            >
              <div
                style={{
                  overflow: "hidden",
                  position: "relative",
                  width: "14px",
                  height: "14px",
                  flexShrink: 0,
                }}
                figma-id="10:6:348"
              >
                <div figma-id="10:6:349">
                  <img
                    src={ticketSrc.src}
                    style={{
                      position: "absolute",
                      left: "1.17px",
                      right: "-1.17px",
                      width: "auto",
                      top: "2.33px",
                      bottom: "-2.33px",
                      height: "auto",
                    }}
                    figma-id="10:6:350"
                  />
                </div>
              </div>
              <p
                style={{
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  height: "fit-content",
                  textAlign: "center",
                  color: "rgb(15, 33, 43)",
                  fontSize: "10px",
                  fontFamily: "Quicksand",
                  fontWeight: 400,
                }}
                figma-id="10:6:353"
              >
                {price}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "2px",
                width: "fit-content",
                height: "fit-content",
                position: "relative",
                flexShrink: 0,
              }}
              figma-id="10:6:354"
            >
              <div
                style={{
                  overflow: "hidden",
                  position: "relative",
                  width: "14px",
                  height: "14px",
                  flexShrink: 0,
                }}
                figma-id="10:6:355"
              >
                <div figma-id="10:6:356">
                  <img
                    src={timeCircleSrc.src}
                    style={{
                      position: "absolute",
                      left: "1.17px",
                      right: "-1.17px",
                      width: "auto",
                      top: "1.17px",
                      bottom: "-1.17px",
                      height: "auto",
                    }}
                    figma-id="10:6:357"
                  />
                </div>
              </div>
              <p
                style={{
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  height: "fit-content",
                  textAlign: "center",
                  color: "rgb(15, 33, 43)",
                  fontSize: "10px",
                  fontFamily: "Quicksand",
                  fontWeight: 400,
                }}
                figma-id="10:6:360"
              >
                {time}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            width: "fit-content",
            height: "fit-content",
            position: "relative",
            flexShrink: 0,
          }}
          figma-id="10:6:361"
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              flexShrink: 0,
              objectFit: "cover",
              opacity: 1,
              borderStyle: "solid",
              borderColor: "rgb(255, 255, 255, 0.37)",
              borderWidth: "3px",
              borderRadius: "50%",
            }}
            src={image.src}
            figma-id="10:6:362"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              height: "fit-content",
              width: "fit-content",
              position: "relative",
              flexShrink: 0,
            }}
            figma-id="10:6:363"
          >
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                textAlign: "center",
                color: "rgb(255, 255, 255)",
                fontSize: "15px",
                fontFamily: "Quicksand",
                fontWeight: 700,
              }}
              figma-id="10:6:364"
            >
              {guideName}
            </p>
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                textAlign: "center",
                color: "rgb(255, 255, 255)",
                fontSize: "12px",
                fontFamily: "Quicksand",
                fontWeight: 400,
              }}
              figma-id="10:6:365"
            >
              {guidePosition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
