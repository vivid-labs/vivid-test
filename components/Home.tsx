import home from "./home.svg";

export const Home = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        padding: "5px",
        position: "relative",
        width: "32px",
        height: "32px",
        ...override,
      }}
    >
      <div>
        <img
          src={home.src}
          style={{
            position: "absolute",
            left: "6px",
            right: "-6px",
            width: "auto",
            top: "6px",
            bottom: "-6px",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};
