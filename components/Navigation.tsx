import moon from "./moon.svg";
import { Link } from "./Link";
import hamburgerMenu from "./hamburgerMenu.svg";
export const Navigation = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="flex w-[1440px] items-center justify-between pl-[54px]"
      style={override}
    >
      <div className="flex flex-shrink-0 items-center gap-[7px]">
        <img className="h-[17px] w-[17px] flex-shrink-0" src={moon.src} />
        <p className="whitespace-nowrap text-[19px] font-bold text-white">
          MilanTour
        </p>
      </div>
      <div className="flex flex-shrink-0 items-center gap-[45px]">
        <div className="flex flex-shrink-0 items-start gap-[38px]">
          <Link linkText="Day Tours" />
          <Link linkText="Multi-day Tours" />
          <Link linkText="Attractions" />
          <Link linkText="Themes" />
        </div>
        <img
          className="h-[50px] w-[50px] flex-shrink-0"
          src={hamburgerMenu.src}
        />
      </div>
    </div>
  );
};
