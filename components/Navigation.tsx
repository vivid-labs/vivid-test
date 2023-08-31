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
      <div className="flex items-center gap-[7px]">
        <img className="w-[17px] h-[17px]" src={moon.src} />
        <p className="text-white text-[19px] font-bold">MilanTour</p>
      </div>
      <div className="flex items-center gap-[45px]">
        <div className="flex items-start gap-[38px]">
          <Link linkText="Day Tours" />
          <Link linkText="Multi-day Tours" />
          <Link linkText="Attractions" />
          <Link linkText="Themes" />
        </div>
        <img className="w-[50px] h-[50px]" src={hamburgerMenu.src} />
      </div>
    </div>
  );
};
