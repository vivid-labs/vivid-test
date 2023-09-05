import { CavaLogo } from "./CavaLogo";
import { NavLink } from "./NavLink";
import { PersonIcon } from "./PersonIcon";
import { BagIcon } from "./BagIcon";
import { Button } from "./Button";
export const Navbar = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex justify-between items-center px-8 w-[1171px] h-24 border-solid border-black border-b bg-[rgb(254,_248,_234)]"
      style={override}
    >
      <div className="overflow-hidden flex items-center gap-9">
        <CavaLogo
          override={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
        <NavLink text="Menu" />
        <NavLink text="Gifting" />
        <NavLink text="Rewards" />
        <NavLink text="Catering" />
        <NavLink text="Locations" />
      </div>
      <div className="flex justify-center items-center gap-9 py-[9px] h-8">
        <div className="flex items-start gap-2">
          <PersonIcon
            override={{
              height: "15px",
              width: "13px",
            }}
          />
          <NavLink text="Sign In" />
        </div>
        <BagIcon
          override={{
            height: "16px",
            width: "14px",
          }}
        />
        <Button text="Order" />
      </div>
    </div>
  );
};
