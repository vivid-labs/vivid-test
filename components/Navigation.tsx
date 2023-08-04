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
      className="flex justify-between items-center pl-[54px] w-[1440px]"
      style={override}
    >
      <div className="flex items-center gap-[7px] flex-shrink-0">
        <img className="w-[17px] h-[17px] flex-shrink-0" src={moon.src} />
        <p className="whitespace-nowrap text-white text-[19px] font-bold">
          MilanTour
        </p>
      </div>
      <div className="flex items-center gap-[45px] flex-shrink-0">
        <div className="flex items-start gap-[38px] flex-shrink-0">
          <Link linkText="Day Tours" />
          <Link linkText="Multi-day Tours" />
          <Link linkText="Attractions" />
          <Link linkText="Themes" />
        </div>
        <img
          className="w-[50px] h-[50px] flex-shrink-0"
          src={hamburgerMenu.src}
        />
      </div>
    </div>
  );
};
