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
          style={override}
          className="flex flex-col items-start gap-[3.75rem] px-[195px] py-[80px] relative w-[1440px] bg-[rgb(43,_43,_43)]"
          figma-id="7:1326:14550"
        >
          <div
            className="flex items-end gap-[6.25rem] relative w-full flex-shrink-0"
            figma-id="7:1616:8570"
          >
            <div
              className="flex flex-col items-start gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]"
              figma-id="7:1616:8571"
            >
              <p
                className="text-[rgb(255,_255,_255)] text-[38px] font-[Work_Sans] font-semibold leading-[1.2em]"
                figma-id="7:1616:8573"
              >
                Discover More NFTs
              </p>
              <p
                className="text-[rgb(255,_255,_255)] text-[22px] font-[Work_Sans] font-normal leading-[1.6em]"
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
            className="flex items-start gap-[30px] relative w-full flex-shrink-0"
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
          style={override}
          className="flex flex-col items-center gap-10 pt-[40px] px-[195px] pb-[80px] relative w-[834px] bg-[rgb(43,_43,_43)]"
          figma-id="7:1962:6832"
        >
          <div
            className="flex items-end gap-[6.25rem] relative w-[690px] flex-shrink-0"
            figma-id="7:1962:6786"
          >
            <div
              className="flex flex-col items-start gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]"
              figma-id="7:1962:6787"
            >
              <p
                className="text-[rgb(255,_255,_255)] text-[28px] font-[Work_Sans] font-semibold leading-[1.4em]"
                figma-id="7:1962:6788"
              >
                Discover More NFTs
              </p>
              <p
                className="text-[rgb(255,_255,_255)] text-[16px] font-[Work_Sans] font-normal leading-[1.4em]"
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
            className="flex items-start gap-[30px] relative w-[690px] flex-shrink-0"
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
          style={override}
          className="flex flex-col items-center gap-10 pt-[40px] px-0 pb-[60px] relative w-[375px] bg-[rgb(43,_43,_43)]"
          figma-id="7:1962:9246"
        >
          <div
            className="flex flex-col items-start gap-[10px] relative w-[315px] flex-shrink-0 flex-1 min-h-[0rem]"
            figma-id="7:1962:9176"
          >
            <p
              className="text-[rgb(255,_255,_255)] text-[28px] font-[Work_Sans] font-semibold leading-[1.4em]"
              figma-id="7:1962:9177"
            >
              Discover More NFTs
            </p>
            <p
              className="text-[rgb(255,_255,_255)] text-[16px] font-[Work_Sans] font-normal leading-[1.4em]"
              figma-id="7:1962:9178"
            >
              Explore new trending NFTs
            </p>
          </div>
          <div
            className="flex flex-col items-start gap-5 relative flex-shrink-0"
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
