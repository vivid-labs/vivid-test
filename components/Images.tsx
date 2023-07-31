import images from "./images.png";
export const Images = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        height: "31px",
        flexShrink: 0,
        ...override,
      }}
      figma-id="3:1601:971"
    >
      <img
        src={images.src}
        style={{
          objectFit: "cover",
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
        }}
        figma-id=""
      />
      <img
        src={images.src}
        style={{
          transform:
            "rotate(-71.88deg) scale(96.46%, 34.74%) translate(-78.4%, 135.5%)",
          transformOrigin: "top left",
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
        }}
        figma-id=""
      />
      <img
        src={images.src}
        style={{
          transform:
            "rotate(10.87deg) scale(96.46%, 34.74%) translate(2.9%, -4.12%)",
          transformOrigin: "top left",
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
        }}
        figma-id=""
      />
    </div>
  );
};
