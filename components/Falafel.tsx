import falafel_1 from "./falafel_1.png";
export const Falafel = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="relative w-[78px] h-[77px]" style={override}>
      <img
        className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full object-cover"
        src={falafel_1.src}
      />
    </div>
  );
};
