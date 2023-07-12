export const ChecklistItem = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "24px",
        ...override,
      }}
      figma-id="18:138"
    >
      <p
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "absolute",
          width: "285px",
          left: "34px",
          height: "20px",
          top: "2px",
          color: "rgb(0, 0, 0)",
          fontSize: "16px",
          fontFamily: "Avenir",
          fontWeight: 500,
          letterSpacing: "0.01px",
          lineHeight: "23px",
        }}
        figma-id="18:136"
      >
        Add Text
      </p>
      <div
        style={{
          position: "absolute",
          width: "25px",
          height: "24px",
          backgroundColor: "rgb(255, 255, 255)",
          borderStyle: "solid",
          borderColor: "rgb(207, 207, 207)",
          borderWidth: "1px",
          borderRadius: "5px",
        }}
        figma-id="18:135"
      />
    </div>
  );
};
