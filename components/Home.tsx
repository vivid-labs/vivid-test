import home from "./home.svg";
export const Home = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex justify-center items-center p-[5px] relative w-8 h-8"
      style={override}
    >
      <div>
        <img
          className="absolute left-1.5 -right-[6px] w-auto top-1.5 -bottom-[6px] h-auto"
          src={home.src}
        />
      </div>
    </div>
  );
};
