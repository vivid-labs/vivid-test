export const Rotation = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "5px",
        width: "100%",
        height: "fit-content",
        padding: "5px",
        borderRadius: "2px",
        position: "relative",
        flexShrink: 0,
        borderStyle: "solid",
        borderColor: "rgb(75, 75, 75)",
        borderWidth: "1px",
        backgroundColor: "rgb(15, 15, 15)",
        ...override,
      }}
    >
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          width: "34px",
          height: "34px",
          flexShrink: 0,
          backgroundColor: "rgb(191, 43, 43)",
        }}
      >
        <p
          style={{
            color: "rgb(255, 255, 255)",
            fontSize: "12px",
            fontFamily: "Inter",
            fontWeight: 400,
          }}
        >
          T
        </p>
      </div>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          rotate: "36.6deg",
          width: "34px",
          height: "34px",
          flexShrink: 0,
          backgroundColor: "rgb(191, 43, 43)",
        }}
      >
        <p
          style={{
            color: "rgb(255, 255, 255)",
            fontSize: "12px",
            fontFamily: "Inter",
            fontWeight: 400,
          }}
        >
          T
        </p>
      </div>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          rotate: "128.5deg",
          width: "34px",
          height: "34px",
          flexShrink: 0,
          backgroundColor: "rgb(191, 43, 43)",
        }}
      >
        <p
          style={{
            color: "rgb(255, 255, 255)",
            fontSize: "12px",
            fontFamily: "Inter",
            fontWeight: 400,
          }}
        >
          T
        </p>
      </div>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          rotate: "-141.9deg",
          width: "34px",
          height: "34px",
          flexShrink: 0,
          backgroundColor: "rgb(191, 43, 43)",
        }}
      >
        <p
          style={{
            color: "rgb(255, 255, 255)",
            fontSize: "12px",
            fontFamily: "Inter",
            fontWeight: 400,
          }}
        >
          T
        </p>
      </div>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          rotate: "-51.3deg",
          width: "34px",
          height: "34px",
          flexShrink: 0,
          backgroundColor: "rgb(191, 43, 43)",
        }}
      >
        <p
          style={{
            color: "rgb(255, 255, 255)",
            fontSize: "12px",
            fontFamily: "Inter",
            fontWeight: 400,
          }}
        >
          T
        </p>
      </div>
      <div
        style={{
          rotate: "0.0deg",
          width: "30px",
          height: "30px",
          flexShrink: 0,
          background:
            "linear-gradient(180deg, rgb(191, 43, 43, 1.00) 0%, rgb(191, 43, 43, 0.00) 100%)",
        }}
      />
      <div
        style={{
          rotate: "50.6deg",
          width: "30px",
          height: "30px",
          flexShrink: 0,
          background:
            "linear-gradient(180deg, rgb(191, 43, 43, 1.00) 0%, rgb(191, 43, 43, 0.00) 100%)",
        }}
      />
    </div>
  );
};
