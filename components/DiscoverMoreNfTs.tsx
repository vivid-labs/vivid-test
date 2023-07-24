import { Button } from "./Button";
import { Eye } from "./Eye";
import { NftCard } from "./NftCard";

export const DiscoverMoreNfTs = ({
  override,
  screen,
}: {
  override?: any;
  screen: string;
}) => {
  switch (screen) {
    case "Desktop":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "60px",
            height: "fit-content",
            padding: "80px 195px",
            position: "relative",
            width: "1440px",
            backgroundColor: "rgb(43, 43, 43)",
            ...override,
          }}
          figma-id="7:1326:14550"
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "100px",
              height: "fit-content",
              position: "relative",
              width: "100%",
              flexShrink: 0,
            }}
            figma-id="7:1616:8570"
          >
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
              figma-id="7:1616:8571"
            >
              <p
                style={{
                  height: "fit-content",
                  color: "rgb(255, 255, 255)",
                  fontSize: "38px",
                  fontFamily: "Work Sans",
                  fontWeight: 600,
                  lineHeight: "1.20em",
                }}
                figma-id="7:1616:8573"
              >
                Discover More NFTs
              </p>
              <p
                style={{
                  height: "fit-content",
                  color: "rgb(255, 255, 255)",
                  fontSize: "22px",
                  fontFamily: "Work Sans",
                  fontWeight: 400,
                  lineHeight: "1.60em",
                }}
                figma-id="7:1616:8575"
              >
                Explore new trending NFTs
              </p>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<Eye figma-id="7:" />}
              hasText={true}
              text="See All"
              figma-id="7:1616:8576"
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "30px",
              height: "fit-content",
              position: "relative",
              width: "100%",
              flexShrink: 0,
            }}
            figma-id="7:1326:14476"
          >
            <NftCard
              property_1="Default"
              nftName="NFT Name"
              artistAvatarName={true}
              artistName="NFT Artist"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                height: "469px",
                flex: "1 1 0%",
              }}
              figma-id="7:1326:14477"
            />
            <NftCard
              property_1="Default"
              nftName="NFT Name"
              artistAvatarName={true}
              artistName="NFT Artist"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                height: "469px",
                flex: "1 1 0%",
              }}
              figma-id="7:1326:14478"
            />
            <NftCard
              property_1="Default"
              nftName="NFT Name"
              artistAvatarName={true}
              artistName="NFT Artist"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                height: "469px",
                flex: "1 1 0%",
                minWidth: "0px",
              }}
              figma-id="7:1326:14479"
            />
          </div>
        </div>
      );
    case "Tablet":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
            height: "fit-content",
            padding: "40px 195px 80px",
            position: "relative",
            width: "834px",
            backgroundColor: "rgb(43, 43, 43)",
            ...override,
          }}
          figma-id="7:1962:6832"
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "100px",
              height: "fit-content",
              position: "relative",
              width: "690px",
              flexShrink: 0,
            }}
            figma-id="7:1962:6786"
          >
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
              figma-id="7:1962:6787"
            >
              <p
                style={{
                  height: "fit-content",
                  color: "rgb(255, 255, 255)",
                  fontSize: "28px",
                  fontFamily: "Work Sans",
                  fontWeight: 600,
                  lineHeight: "1.40em",
                }}
                figma-id="7:1962:6788"
              >
                Discover More NFTs
              </p>
              <p
                style={{
                  height: "fit-content",
                  color: "rgb(255, 255, 255)",
                  fontSize: "16px",
                  fontFamily: "Work Sans",
                  fontWeight: 400,
                  lineHeight: "1.40em",
                }}
                figma-id="7:1962:6789"
              >
                Explore new trending NFTs
              </p>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<Eye figma-id="7:" />}
              hasText={true}
              text="See All"
              override={{
                padding: "0px 50px",
                width: "fit-content",
                height: "60px",
              }}
              figma-id="7:1962:6790"
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "30px",
              height: "fit-content",
              position: "relative",
              width: "690px",
              flexShrink: 0,
            }}
            figma-id="7:1962:6791"
          >
            <NftCard
              property_1="Default"
              nftName="Distant Galaxy"
              artistAvatarName={true}
              artistName="MoonDancer"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                height: "469px",
                flex: "1 1 0%",
              }}
              figma-id="7:1962:6792"
            />
            <NftCard
              property_1="Default"
              nftName="Life on Edena"
              artistAvatarName={true}
              artistName="NebulaKid"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                height: "469px",
                flex: "1 1 0%",
              }}
              figma-id="7:1962:6793"
            />
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
            height: "fit-content",
            padding: "40px 0px 60px",
            position: "relative",
            width: "375px",
            backgroundColor: "rgb(43, 43, 43)",
            ...override,
          }}
          figma-id="7:1962:9246"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              position: "relative",
              width: "315px",
              flexShrink: 0,
              flex: "1 1 0%",
              minHeight: "0px",
            }}
            figma-id="7:1962:9176"
          >
            <p
              style={{
                height: "fit-content",
                color: "rgb(255, 255, 255)",
                fontSize: "28px",
                fontFamily: "Work Sans",
                fontWeight: 600,
                lineHeight: "1.40em",
              }}
              figma-id="7:1962:9177"
            >
              Discover More NFTs
            </p>
            <p
              style={{
                height: "fit-content",
                color: "rgb(255, 255, 255)",
                fontSize: "16px",
                fontFamily: "Work Sans",
                fontWeight: 400,
                lineHeight: "1.40em",
              }}
              figma-id="7:1962:9178"
            >
              Explore new trending NFTs
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              height: "fit-content",
              width: "fit-content",
              position: "relative",
              flexShrink: 0,
            }}
            figma-id="7:1962:9179"
          >
            <NftCard
              property_1="Small"
              nftName="Distant Galaxy"
              artistAvatarName={true}
              artistName="MoonDancer"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                width: "315px",
                flex: "1 1 0%",
              }}
              figma-id="7:1962:9181"
            />
            <NftCard
              property_1="Small"
              nftName="Life on Edena"
              artistAvatarName={true}
              artistName="NebulaKid"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                width: "315px",
                flex: "1 1 0%",
              }}
              figma-id="7:1962:9183"
            />
            <NftCard
              property_1="Small"
              nftName="AstroFiction"
              artistAvatarName={true}
              artistName="Spaceone"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                width: "315px",
                flex: "1 1 0%",
              }}
              figma-id="7:1962:9185"
            />
          </div>
          <Button
            property_1="Secondary/Outlined"
            hasLeftIcon={true}
            leftIcon={<Eye figma-id="7:" />}
            hasText={true}
            text="See All"
            override={{
              padding: "0px 50px",
              width: "315px",
              flex: "1 1 0%",
              minHeight: "0px",
            }}
            figma-id="7:1962:9187"
          />
        </div>
      );
    default:
      return null;
  }
};
