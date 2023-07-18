export const Button = ({ override }: { override?: any }) => {
  return (
    <p
      style={{
        width: "100%",
        whiteSpace: "nowrap",
        height: "fit-content",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "rgb(60, 157, 93)",
        fontSize: "12px",
        fontFamily: "Inter",
        fontWeight: 600,
        ...override,
      }}
      figma-id="1912:902"
    >
      Button
    </p>
  );
};
