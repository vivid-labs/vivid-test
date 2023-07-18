export const Tabs = ({
  override,
  activeTab,
}: {
  override?: any;
  activeTab: string;
}) => {
  const libraryActiveTab =
    activeTab === "First"
      ? {
          color: "rgb(255, 255, 255)",
        }
      : {
          color: "rgb(160, 160, 160)",
        };
  const thisPageActiveTab =
    activeTab === "First"
      ? {
          color: "rgb(160, 160, 160)",
        }
      : {
          color: "rgb(255, 255, 255)",
        };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "fit-content",
        padding: "12px 0px",
        position: "relative",
        width: "319px",
        borderStyle: "solid",
        borderColor: "rgb(68, 68, 68)",
        borderBottomWidth: "1px",
        ...override,
      }}
      figma-id="13:437"
    >
      <p
        style={{
          ...libraryActiveTab,
          height: "fit-content",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: "14px",
          fontFamily: "Inter",
          fontWeight: 700,
        }}
        figma-id="11:3"
      >
        Library
      </p>
      <p
        style={{
          ...thisPageActiveTab,
          height: "fit-content",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: "14px",
          fontFamily: "Inter",
          fontWeight: 700,
        }}
        figma-id="11:5"
      >
        This Page
      </p>
    </div>
  );
};
