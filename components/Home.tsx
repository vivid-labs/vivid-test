import "./Home.css";
import home from "./home.svg";

export const Home = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-row justify-center items-center gap-[10px] p-[5px] relative w-[32px] h-[32px]"
    >
      <div>
        <img
          src={home.src}
          className="absolute left-[6px] -right-[6px] w-auto top-[6px] -bottom-[6px] h-auto"
        />
      </div>
    </div>
  );
};
