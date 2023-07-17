import moon from "./moon.svg";
import { Link } from "./Link";
import hamburgerMenu from "./hamburgerMenu.svg";
export const Navigation = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex justify-between items-center pl-[54px] pr-0 py-0 relative w-[1440px]"
      figma-id="1201:1664"
    >
      <div
        className="flex items-center gap-[7px] relative flex-shrink-0"
        figma-id="1201:1665"
      >
        <img
          src={moon.src}
          className="w-[16.64px] h-[16.64px] flex-shrink-0"
          figma-id="1201:1666"
        />
        <p
          className="whitespace-nowrap text-center text-[rgb(255,_255,_255)] text-[19px] font-[Quicksand] font-bold"
          figma-id="1201:1669"
        >
          MilanTour
        </p>
      </div>
      <div
        className="flex items-center gap-[45px] relative flex-shrink-0"
        figma-id="1201:1670"
      >
        <div
          className="flex items-start gap-[38px] relative flex-shrink-0"
          figma-id="1201:1671"
        >
          <Link linkText="Day Tours" />
          <Link linkText="Multi-day Tours" />
          <Link linkText="Attractions" />
          <Link linkText="Themes" />
        </div>
        <img
          src={hamburgerMenu.src}
          className="w-[50px] h-[50px] flex-shrink-0"
          figma-id="1201:1676"
        />
      </div>
    </div>
  );
};
