export const Visuals = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        backgroundColor: "rgb(236, 236, 235)",
        fontFamily: "Caveat",
        ...override,
      }}
    >
      <p
        style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          color: "rgb(0, 147, 121)",
          fontSize: "44px",
          fontWeight: 400,
          lineHeight: "1.20em",
        }}
      >
        Try it out
      </p>
    </div>
  );
};
