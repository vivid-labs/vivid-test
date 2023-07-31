import ellipse_1 from "./ellipse_1.jpg";
export const Ellipse_1 = ({ override }: { override?: any }) => {
  return (
    <img
      style={override}
      src={ellipse_1.src}
      className="w-full h-[62px] flex-shrink-0 object-cover rounded-[50%]"
    />
  );
};
