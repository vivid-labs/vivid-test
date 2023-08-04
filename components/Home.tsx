import home from "./home.svg";
export const Home = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="relative flex h-8 w-8 items-center justify-center overflow-hidden p-[5px]"
      style={override}
    >
      <div>
        <img
          className="absolute -bottom-[6px] -right-[6px] left-1.5 top-1.5 h-auto w-auto"
          src={home.src}
        />
      </div>
    </div>
  );
};
