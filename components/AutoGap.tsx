import group_1 from "./group_1.svg";
export const AutoGap = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "109px",
        flexShrink: 0,
        ...override,
      }}
    >
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 7px",
          borderRadius: "9999px",
          position: "absolute",
          width: "40px",
          left: "0px",
          height: "40px",
          top: "0px",
          backgroundColor: "rgb(242, 242, 242)",
        }}
      >
        <img
          src={group_1.src}
          style={{
            width: "18px",
            height: "18px",
            flexShrink: 0,
          }}
        />
      </div>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "9999px",
          position: "absolute",
          width: "40px",
          left: "1px",
          height: "40px",
          top: "67px",
          backgroundColor: "rgb(242, 242, 242)",
        }}
      >
        <img
          src={group_1.src}
          style={{
            width: "18px",
            height: "18px",
            flexShrink: 0,
          }}
        />
      </div>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px 7px",
          borderRadius: "9999px",
          position: "absolute",
          width: "40px",
          left: "80px",
          height: "40px",
          top: "0px",
          backgroundColor: "rgb(242, 242, 242)",
        }}
      >
        <img
          src={group_1.src}
          style={{
            width: "18px",
            height: "18px",
            flexShrink: 0,
          }}
        />
      </div>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "9999px",
          position: "absolute",
          width: "40px",
          left: "80px",
          height: "40px",
          top: "66px",
          backgroundColor: "rgb(242, 242, 242)",
        }}
      >
        <img
          src={group_1.src}
          style={{
            width: "18px",
            height: "18px",
            flexShrink: 0,
          }}
        />
      </div>
    </div>
  );
};
