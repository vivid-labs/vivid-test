import logo_2 from "./logo_2.png";
export const NoOutlineLogo = ({ override }: { override?: any }) => {
  return (
    <div
      className="relative w-[62px] h-[62px]"
      style={{
        position: "relative",
        width: "62px",
        height: "62px",
        ...override,
      }}
    >
      <img
        className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full object-cover"
        style={{
          position: "absolute",
          left: "0%",
          right: "0%",
          width: "100%",
          top: "0%",
          bottom: "0%",
          height: "100%",
          objectFit: "cover",
        }}
        src={logo_2.src}
      />
    </div>
  );
};
