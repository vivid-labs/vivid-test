import vivid_88e2cc240f55219ae887a6ef77cf6a1ee4a1bc6c from "./88e2cc240f55219ae887a6ef77cf6a1ee4a1bc6c.jpg";

export const Card = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: "25px",
        borderRadius: "40px",
        position: "absolute",
        width: "675px",
        left: "48px",
        height: "900px",
        top: "362px",
        backgroundColor: "rgb(63, 58, 77)",
      }}
    >
      <img
        style={{
          objectFit: "cover",
          width: "100%",
          height: "676px",
        }}
        src={vivid_88e2cc240f55219ae887a6ef77cf6a1ee4a1bc6c.src}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          gap: "20px",
          height: "146px",
          paddingLeft: "50px",
          paddingRight: "50px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "44px",
            position: "relative",
          }}
        >
          <p
            style={{
              color: "rgb(255, 255, 255)",
              width: "379px",
              height: "44px",
              fontSize: "32px",
              fontFamily: "Inter",
              fontWeight: 700,
            }}
          >
            Champagne Package
          </p>
          <p
            style={{
              color: "rgb(255, 255, 255)",
              width: "95px",
              height: "44px",
              fontSize: "32px",
              fontFamily: "Inter",
              fontWeight: 700,
            }}
          >
            $450
          </p>
        </div>
        <p
          style={{
            color: "rgb(255, 255, 255)",
            height: "82px",
            fontSize: "24px",
            fontFamily: "Inter",
            fontWeight: 300,
          }}
        >
          This package includes the most top shelf champagne off our bottom
          shelf. Sure to impress that special someone.{" "}
        </p>
      </div>
    </div>
  );
};
