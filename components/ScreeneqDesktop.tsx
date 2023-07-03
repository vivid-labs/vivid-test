import { CollectionCard } from "./CollectionCard";

export const ScreeneqDesktop = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "60px",
        height: "fit-content",
        padding: "80px 0px",
        position: "relative",
        width: "1440px",
        backgroundColor: "rgb(43, 43, 43)",
        ...override,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          height: "fit-content",
          position: "relative",
          width: "1046px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
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
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
              color: "rgb(255, 255, 255)",
              fontSize: "38px",
              fontFamily: "Work Sans",
              fontWeight: 600,
              lineHeight: "1.2000000476837158em",
            }}
          >
            Trending Collection
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
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
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
              color: "rgb(255, 255, 255)",
              fontSize: "22px",
              fontFamily: "Work Sans",
              fontWeight: 400,
              lineHeight: "1.600000023841858em",
            }}
          >
            Checkout our weekly updated trending collection.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "30px",
          height: "fit-content",
          position: "relative",
          width: "1050px",
          flexShrink: 0,
        }}
      >
        <CollectionCard
          property_1="Desktop Card"
          additionalNfTsNumber="1025+"
          collectionName="DSGN Animals"
        />
        <CollectionCard
          property_1="Desktop Card"
          additionalNfTsNumber="1025+"
          collectionName="Magic Mushrooms"
        />
        <CollectionCard
          property_1="Desktop Card"
          additionalNfTsNumber="1025+"
          collectionName="Disco Machines"
        />
      </div>
    </div>
  );
};
