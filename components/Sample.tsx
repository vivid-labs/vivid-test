export const Sample = ({ override }: { override?: any }) => {
  return (
    <p
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "rgb(255, 255, 255)",
        fontSize: "20px",
        fontFamily: "Inter",
        fontWeight: 200,
        width: "100%",
        ...override,
      }}
      figma-id="3:1987:894"
    >
      Sample
    </p>
  );
};
