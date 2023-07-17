import image from "./image.png";
export const Delete = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="relative w-20 h-[55px]"
      figma-id="1201:7638"
    >
      <img
        src={image.src}
        className="absolute right-[0%] w-full bottom-[0%] h-full object-cover opacity-100 rounded-[6px]"
        figma-id="1201:7639"
      />
    </div>
  );
};
