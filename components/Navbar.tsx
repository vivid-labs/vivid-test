import { CavaLogo } from "./CavaLogo";
import { NavLink } from "./NavLink";
import { PersonIcon } from "./PersonIcon";
import { BagIcon } from "./BagIcon";
import { Button } from "./Button";
export const Navbar = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex justify-between items-center px-8 w-[1032px] border-solid border-black border-b bg-[rgb(254,_248,_234)]"
      style={override}
    >
      <div className="overflow-hidden flex items-center gap-8">
        <CavaLogo />
        <NavLink text="Menu" />
        <NavLink text="Gifting" />
        <NavLink text="Rewards" />
        <NavLink text="Catering" />
        <NavLink text="Locations" />
      </div>
      <div className="overflow-hidden flex justify-center items-center gap-[38px] py-[9px] h-[85px]">
        <div className="flex justify-center items-center gap-2">
          <PersonIcon />
          <NavLink text="Sign In" />
        </div>
        <BagIcon />
        <Button text="Order" />
      </div>
    </div>
  );
};
