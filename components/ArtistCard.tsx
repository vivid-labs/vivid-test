import { Avatar } from "./Avatar";
import { Avatar_14 } from "./Avatar_14";
import { Avatar_1 } from "./Avatar_1";

export const ArtistCard = ({
  override,
  property_1,
  artistName,
  additionalInfo,
  totalSales,
  salesNumber,
  rankingNumber2,
  rankingNumber,
}: {
  override?: any;
  property_1: string;
  artistName: string;
  additionalInfo: boolean;
  totalSales: string;
  salesNumber: string;
  rankingNumber2: boolean;
  rankingNumber: string;
}) => {
  switch (property_1) {
    case "Default":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            height: "fit-content",
            padding: "20px",
            borderRadius: "20px",
            position: "relative",
            width: "240px",
            backgroundColor: "rgb(59, 59, 59)",
            ...override,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              height: "fit-content",
              width: "fit-content",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Avatar
              property_1="Big"
              avatarPhoto={<Avatar_14 />}
              override={{
                height: "fit-content",
                width: "120px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              height: "fit-content",
              position: "relative",
              width: "100%",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                height: "fit-content",
                textAlign: "center",
                width: "100%",
                flexShrink: 0,
                color: "rgb(255, 255, 255)",
                fontSize: "22px",
                fontFamily: "Work Sans",
                fontWeight: 600,
                lineHeight: "1.399999976158142em",
              }}
            >
              {artistName}
            </p>
            <div
              style={{
                visibility: additionalInfo,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
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
                  height: "fit-content",
                  textAlign: "end",
                  flexShrink: 0,
                  flex: "1 1 0%",
                  minWidth: "0px",
                  color: "rgb(133, 133, 132)",
                  fontSize: "16px",
                  fontFamily: "Work Sans",
                  fontWeight: 400,
                  lineHeight: "1.399999976158142em",
                }}
              >
                {totalSales}
              </p>
              <p
                style={{
                  height: "fit-content",
                  flexShrink: 0,
                  flex: "1 1 0%",
                  minWidth: "0px",
                  color: "rgb(255, 255, 255)",
                  fontSize: "16px",
                  fontFamily: "Space Mono",
                  fontWeight: 400,
                  lineHeight: "1.399999976158142em",
                }}
              >
                {salesNumber}
              </p>
            </div>
          </div>
          <div
            style={{
              visibility: rankingNumber2,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "10px",
              height: "fit-content",
              borderRadius: "20px",
              position: "absolute",
              width: "30px",
              left: "20px",
              top: "18px",
              backgroundColor: "rgb(43, 43, 43)",
            }}
          >
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "absolute",
                left: "calc(50% - 5px)",
                top: "calc(50% - 11px)",
                color: "rgb(133, 133, 132)",
                fontSize: "16px",
                fontFamily: "Space Mono",
                fontWeight: 400,
                lineHeight: "1.399999976158142em",
              }}
            >
              {rankingNumber}
            </p>
          </div>
        </div>
      );
    case "Horizontal Big":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "20px",
            height: "fit-content",
            padding: "20px",
            borderRadius: "20px",
            position: "relative",
            width: "315px",
            backgroundColor: "rgb(59, 59, 59)",
            ...override,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              height: "fit-content",
              width: "fit-content",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Avatar
              property_1="medium"
              avatarPhoto={<Avatar_1 />}
              override={{
                height: "fit-content",
                width: "60px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "5px",
              height: "fit-content",
              position: "relative",
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
            }}
          >
            <p
              style={{
                height: "fit-content",
                width: "100%",
                flexShrink: 0,
                color: "rgb(255, 255, 255)",
                fontSize: "22px",
                fontFamily: "Work Sans",
                fontWeight: 600,
                lineHeight: "1.399999976158142em",
              }}
            >
              {artistName}
            </p>
            <div
              style={{
                visibility: additionalInfo,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
                height: "fit-content",
                position: "relative",
                width: "100%",
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  height: "fit-content",
                  flexShrink: 0,
                  flex: "1 1 0%",
                  minWidth: "0px",
                  color: "rgb(133, 133, 132)",
                  fontSize: "16px",
                  fontFamily: "Work Sans",
                  fontWeight: 400,
                  lineHeight: "1.399999976158142em",
                }}
              >
                {totalSales}
              </p>
              <p
                style={{
                  height: "fit-content",
                  flexShrink: 0,
                  flex: "1 1 0%",
                  minWidth: "0px",
                  color: "rgb(255, 255, 255)",
                  fontSize: "16px",
                  fontFamily: "Space Mono",
                  fontWeight: 400,
                  lineHeight: "1.399999976158142em",
                }}
              >
                {salesNumber}
              </p>
            </div>
          </div>
          <div
            style={{
              visibility: rankingNumber2,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "10px",
              height: "fit-content",
              borderRadius: "20px",
              position: "absolute",
              width: "30px",
              left: "12px",
              top: "13px",
              backgroundColor: "rgb(43, 43, 43)",
            }}
          >
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "absolute",
                left: "calc(50% - 5px)",
                top: "calc(50% - 11px)",
                color: "rgb(133, 133, 132)",
                fontSize: "16px",
                fontFamily: "Space Mono",
                fontWeight: 400,
                lineHeight: "1.399999976158142em",
              }}
            >
              {rankingNumber}
            </p>
          </div>
        </div>
      );
    case "Horizontal Medium":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "12px",
            width: "fit-content",
            height: "fit-content",
            padding: "20px",
            borderRadius: "20px",
            position: "relative",
            backgroundColor: "rgb(59, 59, 59)",
            ...override,
          }}
        >
          <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
          <p
            style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              flexShrink: 0,
              color: "rgb(255, 255, 255)",
              fontSize: "22px",
              fontFamily: "Work Sans",
              fontWeight: 600,
              lineHeight: "1.399999976158142em",
            }}
          >
            {artistName}
          </p>
        </div>
      );
    case "Horizontal Small":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "12px",
            width: "fit-content",
            height: "fit-content",
            padding: "20px",
            borderRadius: "20px",
            position: "relative",
            backgroundColor: "rgb(59, 59, 59)",
            ...override,
          }}
        >
          <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
          <p
            style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              flexShrink: 0,
              color: "rgb(255, 255, 255)",
              fontSize: "16px",
              fontFamily: "Work Sans",
              fontWeight: 400,
              lineHeight: "1.399999976158142em",
            }}
          >
            {artistName}
          </p>
        </div>
      );
    default:
      return null;
  }
};
