export const Details = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        height: "fit-content",
        padding: "0px 36px 0px 0px",
        width: "100%",
        flexShrink: 0,
        fontFamily: "Avenir",
        ...override,
      }}
    >
      <p
        style={{
          height: "fit-content",
          color: "rgb(18, 18, 18)",
          fontSize: "15px",
          fontWeight: 400,
          letterSpacing: "0.1px",
          lineHeight: "19px",
        }}
      >
        Generate summaries, action items &amp;amp; insights
      </p>
    </div>
  );
};
