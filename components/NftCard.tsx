import imagePlaceholder from "./imagePlaceholder.png";
import { Avatar } from "./Avatar";
import { Avatar_1 } from "./Avatar_1";
export const NftCard = ({
  override,
  property_1,
  nftName,
  artistAvatarName,
  artistName,
  additionalInfo,
  priceNumber,
  bidNumber,
}: {
  override?: any;
  property_1: string;
  nftName: string;
  artistAvatarName: boolean;
  artistName: string;
  additionalInfo: boolean;
  priceNumber: string;
  bidNumber: string;
}) => {
  switch (property_1) {
    case "Default":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px",
            position: "relative",
            width: "330px",
            height: "468px",
            backgroundColor: "rgb(59, 59, 59)",
            ...override,
          }}
          figma-id="7:1218:12671"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              position: "relative",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              width: "100%",
              flexShrink: 0,
              flex: "1 1 0%",
              minHeight: "0px",
            }}
            figma-id="7:1218:12668"
          >
            <img
              style={{
                width: "100%",
                flexShrink: 0,
                flex: "1 1 0%",
                minHeight: "0px",
                objectFit: "cover",
                opacity: 1,
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
              src={imagePlaceholder.src}
              figma-id="7:1218:12620"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "25px",
              height: "fit-content",
              padding: "20px 30px 25px",
              position: "relative",
              width: "100%",
              flexShrink: 0,
            }}
            figma-id="7:1218:12667"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "5px",
                height: "fit-content",
                position: "relative",
                width: "100%",
                flexShrink: 0,
              }}
              figma-id="7:1218:12628"
            >
              <p
                style={{
                  height: "fit-content",
                  color: "rgb(255, 255, 255)",
                  fontSize: "22px",
                  fontFamily: "Work Sans",
                  fontWeight: 600,
                  lineHeight: "1.40em",
                }}
                figma-id="7:1218:12619"
              >
                {nftName}
              </p>
              {artistAvatarName ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    height: "fit-content",
                    position: "relative",
                    width: "100%",
                    flexShrink: 0,
                  }}
                  figma-id="7:1218:12627"
                >
                  <Avatar
                    property_1="Small"
                    avatarPhoto={<Avatar_1 figma-id="7:" />}
                    figma-id="7:1218:12624"
                  />
                  <p
                    style={{
                      height: "fit-content",
                      color: "rgb(255, 255, 255)",
                      fontSize: "16px",
                      fontFamily: "Space Mono",
                      fontWeight: 400,
                      lineHeight: "1.40em",
                    }}
                    figma-id="7:1218:12614"
                  >
                    {artistName}
                  </p>
                </div>
              ) : null}
            </div>
            {additionalInfo ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  height: "fit-content",
                  position: "relative",
                  width: "100%",
                  flexShrink: 0,
                }}
                figma-id="7:1218:12645"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    height: "fit-content",
                    padding: "0px 21px 0px 0px",
                    position: "relative",
                    flexShrink: 0,
                    flex: "1 1 0%",
                    minWidth: "0px",
                  }}
                  figma-id="7:1218:12646"
                >
                  <p
                    style={{
                      height: "fit-content",
                      color: "rgb(133, 133, 132)",
                      fontSize: "12px",
                      fontFamily: "Space Mono",
                      fontWeight: 400,
                      lineHeight: "1.10em",
                    }}
                    figma-id="7:1218:12648"
                  >
                    Price
                  </p>
                  <p
                    style={{
                      height: "fit-content",
                      color: "rgb(255, 255, 255)",
                      fontSize: "16px",
                      fontFamily: "Space Mono",
                      fontWeight: 400,
                      lineHeight: "1.40em",
                    }}
                    figma-id="7:1218:12650"
                  >
                    {priceNumber}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "8px",
                    height: "fit-content",
                    position: "relative",
                    flexShrink: 0,
                    flex: "1 1 0%",
                    minWidth: "0px",
                  }}
                  figma-id="7:1218:12651"
                >
                  <p
                    style={{
                      height: "fit-content",
                      textAlign: "end",
                      color: "rgb(133, 133, 132)",
                      fontSize: "12px",
                      fontFamily: "Space Mono",
                      fontWeight: 400,
                      lineHeight: "1.10em",
                    }}
                    figma-id="7:1218:12653"
                  >
                    Highest Bid
                  </p>
                  <p
                    style={{
                      height: "fit-content",
                      textAlign: "end",
                      color: "rgb(255, 255, 255)",
                      fontSize: "16px",
                      fontFamily: "Space Mono",
                      fontWeight: 400,
                      lineHeight: "1.40em",
                    }}
                    figma-id="7:1218:12655"
                  >
                    {bidNumber}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    case "Small":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px",
            position: "relative",
            width: "238px",
            height: "402px",
            backgroundColor: "rgb(59, 59, 59)",
            ...override,
          }}
          figma-id="7:1614:7811"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              position: "relative",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              width: "100%",
              flexShrink: 0,
              flex: "1 1 0%",
              minHeight: "0px",
            }}
            figma-id="7:1614:7812"
          >
            <img
              style={{
                width: "100%",
                flexShrink: 0,
                flex: "1 1 0%",
                minHeight: "0px",
                objectFit: "cover",
                opacity: 1,
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
              src={imagePlaceholder.src}
              figma-id="7:1614:7813"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "25px",
              height: "fit-content",
              padding: "20px 20px 25px",
              position: "relative",
              width: "100%",
              flexShrink: 0,
            }}
            figma-id="7:1614:7814"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "5px",
                height: "fit-content",
                position: "relative",
                width: "100%",
                flexShrink: 0,
              }}
              figma-id="7:1614:7815"
            >
              <p
                style={{
                  height: "fit-content",
                  color: "rgb(255, 255, 255)",
                  fontSize: "22px",
                  fontFamily: "Work Sans",
                  fontWeight: 600,
                  lineHeight: "1.40em",
                }}
                figma-id="7:1614:7817"
              >
                {nftName}
              </p>
              {artistAvatarName ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    height: "fit-content",
                    position: "relative",
                    width: "100%",
                    flexShrink: 0,
                  }}
                  figma-id="7:1614:7818"
                >
                  <Avatar
                    property_1="Small"
                    avatarPhoto={<Avatar_1 figma-id="7:" />}
                    figma-id="7:1614:7819"
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      height: "fit-content",
                      position: "relative",
                      flexShrink: 0,
                      flex: "1 1 0%",
                      minWidth: "0px",
                    }}
                    figma-id="7:1614:7820"
                  >
                    <p
                      style={{
                        height: "fit-content",
                        color: "rgb(255, 255, 255)",
                        fontSize: "16px",
                        fontFamily: "Space Mono",
                        fontWeight: 400,
                        lineHeight: "1.40em",
                      }}
                      figma-id="7:1614:7821"
                    >
                      {artistName}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
            {additionalInfo ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  height: "fit-content",
                  position: "relative",
                  width: "100%",
                  flexShrink: 0,
                }}
                figma-id="7:1614:7822"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    height: "fit-content",
                    padding: "0px 21px 0px 0px",
                    position: "relative",
                    flexShrink: 0,
                    flex: "1 1 0%",
                    minWidth: "0px",
                  }}
                  figma-id="7:1614:7823"
                >
                  <p
                    style={{
                      color: "rgb(133, 133, 132)",
                      fontSize: "12px",
                      fontFamily: "Space Mono",
                      fontWeight: 400,
                      lineHeight: "1.10em",
                    }}
                    figma-id="7:1614:7825"
                  >
                    Price
                  </p>
                  <p
                    style={{
                      color: "rgb(255, 255, 255)",
                      fontSize: "12px",
                      fontFamily: "Space Mono",
                      fontWeight: 400,
                      lineHeight: "1.10em",
                    }}
                    figma-id="7:1614:7827"
                  >
                    {priceNumber}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "8px",
                    height: "fit-content",
                    position: "relative",
                    flexShrink: 0,
                    flex: "1 1 0%",
                    minWidth: "0px",
                  }}
                  figma-id="7:1614:7828"
                >
                  <p
                    style={{
                      textAlign: "end",
                      color: "rgb(133, 133, 132)",
                      fontSize: "12px",
                      fontFamily: "Space Mono",
                      fontWeight: 400,
                      lineHeight: "1.10em",
                    }}
                    figma-id="7:1614:7830"
                  >
                    Highest Bid
                  </p>
                  <p
                    style={{
                      textAlign: "end",
                      color: "rgb(255, 255, 255)",
                      fontSize: "12px",
                      fontFamily: "Space Mono",
                      fontWeight: 400,
                      lineHeight: "1.10em",
                    }}
                    figma-id="7:1614:7832"
                  >
                    {bidNumber}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    default:
      return null;
  }
};
