export const Dropdown = ({ override }: { override?: any }) => {
  return (
    <p
      style={{
        width: "100%",
        whiteSpace: "nowrap",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "rgb(250, 250, 250)",
        fontSize: "16px",
        fontFamily: "Inter",
        fontWeight: 400,
        ...override,
      }}
      figma-id="3:1983:900"
    >
      Dropdown
    </p>
  );
};
