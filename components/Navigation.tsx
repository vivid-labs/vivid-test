import moon from "./moon.svg";
import { Link } from "./Link";
import hamburgerMenu from "./hamburgerMenu.svg";
export const Navigation = ({ override }: { override?: any }) => {
  const linkProps = [
    {
      linkText: "Day Tours",
      override: {
        position: "relative",
      },
      "figma-id": "4:6:439",
    },
    {
      linkText: "Multi-day Tours",
      override: {
        position: "relative",
      },
      "figma-id": "4:6:440",
    },
    {
      linkText: "Attractions",
      override: {
        position: "relative",
      },
      "figma-id": "4:6:441",
    },
    {
      linkText: "Themes",
      override: {
        position: "relative",
      },
      "figma-id": "4:6:442",
    },
  ];
  return (
    <div
      style={override}
      className="flex justify-between items-center pl-[54px] relative w-[1440px]"
      figma-id="4:6:431"
    >
      <div
        className="flex items-center gap-[7px] relative flex-shrink-0"
        figma-id="4:6:432"
      >
        <img
          src={moon.src}
          className="w-[16.64px] h-[16.64px] flex-shrink-0"
          figma-id="4:6:433"
        />
        <p
          className="whitespace-nowrap text-center text-[rgb(255,_255,_255)] text-[19px] font-[Quicksand] font-bold"
          figma-id="4:6:436"
        >
          MilanTour
        </p>
      </div>
      <div
        className="flex items-center gap-[45px] relative flex-shrink-0"
        figma-id="4:6:437"
      >
        <div
          className="flex items-start gap-[38px] relative flex-shrink-0"
          figma-id="4:6:438"
        >
          {linkProps.map((props, i) => (
            <Link {...props} key={i} />
          ))}
        </div>
        <img
          src={hamburgerMenu.src}
          className="w-[50px] h-[50px] flex-shrink-0"
          figma-id="4:6:443"
        />
      </div>
    </div>
  );
};
