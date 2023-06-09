import { Link } from "./Link";

export const Footer = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col justify-between items-center p-[60px] relative w-[1440px] h-[417px] bg-[rgb(15,_33,_43)]"
    >
      <div className="flex flex-row justify-between items-start relative w-full h-[218px] flex-shrink-0">
        <div className="flex flex-col justify-start items-start gap-[8px] relative flex-shrink-0">
          <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(255,_255,_255)] text-[25px] font-[Quicksand] font-bold">
            MilanTour
          </p>
          <p className="whitespace-nowrap flex-shrink-0 text-[rgb(255,_255,_255)] text-[17px] font-[Quicksand] font-medium">
            Our vision is to provide convenience
            <br />
            and help you to find your best place for traveling
          </p>
        </div>
        <div className="flex flex-row justify-start items-center gap-[80px] relative flex-shrink-0">
          <div className="flex flex-col justify-start items-start gap-[16px] relative flex-shrink-0">
            <p className="whitespace-nowrap flex-shrink-0 text-[rgb(255,_255,_255)] text-[18px] font-[Quicksand] font-bold">
              About
            </p>
            <Link linkText="Travels" />
            <Link linkText="Partnership" />
            <Link linkText="How to Travel" />
            <Link linkText="Our plans" />
          </div>
          <div className="flex flex-col justify-start items-start gap-[16px] relative flex-shrink-0">
            <p className="whitespace-nowrap flex-shrink-0 text-[rgb(255,_255,_255)] text-[18px] font-[Quicksand] font-bold">
              Community
            </p>
            <Link linkText="Events" />
            <Link linkText="Blog" />
            <Link linkText="Podcast" />
            <Link linkText="Invite a Friend" />
          </div>
          <div className="flex flex-col justify-start items-start gap-[16px] relative flex-shrink-0">
            <p className="whitespace-nowrap flex-shrink-0 text-[rgb(255,_255,_255)] text-[18px] font-[Quicksand] font-bold">
              Socials
            </p>
            <Link linkText="Facebook" />
            <Link linkText="Instagram" />
            <Link linkText="Twitter" />
            <Link linkText="Discord" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center pt-[28px] relative w-full flex-shrink-0 border-t border-solid">
        <p className="whitespace-nowrap flex-shrink-0 text-[rgb(255,_255,_255)] text-[15px] font-[Quicksand] font-medium">
          2023 MilanTour. All rights reserved
        </p>
        <div className="flex flex-row justify-start items-start gap-[31px] relative flex-shrink-0">
          <Link linkText="Privacy Policy" />
          <Link linkText="Terms & Conditions" />
        </div>
      </div>
    </div>
  );
};
