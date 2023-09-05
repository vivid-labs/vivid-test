import image_1 from "./image_1.png";
export const Falafel = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="relative w-[68px] h-[91px]" style={override}>
      <img
        className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full object-cover"
        src={image_1.src}
      />
    </div>
  );
};
