export const Button = ({ override }: { override?: any }) => {
  return (
    <p
      style={{
        width: "100%",
        whiteSpace: "nowrap",
        height: "fit-content",
        textAlign: "center",
        color: "rgb(60, 157, 93)",
        fontSize: "12px",
        fontFamily: "Inter",
        fontStyle: "italic",
        fontWeight: 100,
        ...override,
      }}
      figma-id="1912:902"
    >
      Button
    </p>
  );
};
