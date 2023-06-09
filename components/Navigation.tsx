import moon from "./moon.svg";
import { Link } from "./Link";
import hamburgerMenu from "./hamburgerMenu.svg";

export const Navigation = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-row justify-between items-center pl-[54px] relative w-[1440px]"
    >
      <div className="flex flex-row justify-start items-center gap-[7px] relative flex-shrink-0">
        <img src={moon.src} className="w-[16.64px] h-[16.64px] flex-shrink-0" />
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(255,_255,_255)] text-[19px] font-[Quicksand] font-bold">
          MilanTour
        </p>
      </div>
      <div className="flex flex-row justify-start items-center gap-[45px] relative flex-shrink-0">
        <div className="flex flex-row justify-start items-start gap-[38px] relative flex-shrink-0">
          <Link linkText="Day Tours" />
          <Link linkText="Multi-day Tours" />
          <Link linkText="Attractions" />
          <Link linkText="Themes" />
        </div>
        <img
          src={hamburgerMenu.src}
          className="w-[50px] h-[50px] flex-shrink-0"
        />
      </div>
    </div>
  );
};
