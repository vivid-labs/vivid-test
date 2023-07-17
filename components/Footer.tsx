import { Link } from "./Link";
export const Footer = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col justify-between items-center p-[3.75rem] relative w-[1440px] h-[417px] bg-[rgb(15,_33,_43)]"
      figma-id="1201:1680"
    >
      <div
        className="flex justify-between items-start relative w-full h-[218px] flex-shrink-0"
        figma-id="1201:1681"
      >
        <div
          className="flex flex-col items-start gap-2 relative flex-shrink-0"
          figma-id="1201:1682"
        >
          <p
            className="whitespace-nowrap text-center text-[rgb(255,_255,_255)] text-[25px] font-[Quicksand] font-bold"
            figma-id="1201:1683"
          >
            MilanTour
          </p>
          <p
            className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[17px] font-[Quicksand] font-medium"
            figma-id="1201:1684"
          >
            Our vision is to provide convenience
            <br />
            and help you to find your best place for traveling
          </p>
        </div>
        <div
          className="flex items-center gap-20 relative flex-shrink-0"
          figma-id="1201:1685"
        >
          <div
            className="flex flex-col items-start gap-4 relative flex-shrink-0"
            figma-id="1201:1686"
          >
            <p
              className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[18px] font-[Quicksand] font-bold"
              figma-id="1201:1687"
            >
              About
            </p>
            <Link linkText="Travels" />
            <Link linkText="Partnership" />
            <Link linkText="How to Travel" />
            <Link linkText="Our plans" />
          </div>
          <div
            className="flex flex-col items-start gap-4 relative flex-shrink-0"
            figma-id="1201:1692"
          >
            <p
              className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[18px] font-[Quicksand] font-bold"
              figma-id="1201:1693"
            >
              Community
            </p>
            <Link linkText="Events" />
            <Link linkText="Blog" />
            <Link linkText="Podcast" />
            <Link linkText="Invite a Friend" />
          </div>
          <div
            className="flex flex-col items-start gap-4 relative flex-shrink-0"
            figma-id="1201:1698"
          >
            <p
              className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[18px] font-[Quicksand] font-bold"
              figma-id="1201:1699"
            >
              Socials
            </p>
            <Link linkText="Facebook" />
            <Link linkText="Instagram" />
            <Link linkText="Twitter" />
            <Link linkText="Discord" />
          </div>
        </div>
      </div>
      <div
        className="flex justify-between items-center pt-[28px] px-0 pb-0 relative w-full flex-shrink-0 border-solid border-t"
        figma-id="1201:1704"
      >
        <p
          className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[15px] font-[Quicksand] font-medium"
          figma-id="1201:1705"
        >
          2023 MilanTour. All rights reserved
        </p>
        <div
          className="flex items-start gap-[31px] relative flex-shrink-0"
          figma-id="1201:1706"
        >
          <Link linkText="Privacy Policy" />
          <Link linkText="Terms & Conditions" />
        </div>
      </div>
    </div>
  );
};
