import { Link } from "./Link";
export const Footer = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="flex h-[417px] w-[1440px] flex-col items-center justify-between bg-[rgb(15,_33,_43)] p-[60px]"
      style={override}
    >
      <div className="flex h-[218px] w-full flex-shrink-0 items-start justify-between">
        <div className="flex flex-shrink-0 flex-col items-start gap-2">
          <p className="whitespace-nowrap text-[25px] font-bold text-white">
            MilanTour
          </p>
          <p className="whitespace-nowrap text-[17px] font-medium text-white">
            Our vision is to provide convenience
            <br />
            and help you to find your best place for traveling
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center gap-20">
          <div className="flex flex-shrink-0 flex-col items-start gap-4">
            <p className="whitespace-nowrap text-lg font-bold text-white">
              About
            </p>
            <Link linkText="Travels" />
            <Link linkText="Partnership" />
            <Link linkText="How to Travel" />
            <Link linkText="Our plans" />
          </div>
          <div className="flex flex-shrink-0 flex-col items-start gap-4">
            <p className="whitespace-nowrap text-lg font-bold text-white">
              Community
            </p>
            <Link linkText="Events" />
            <Link linkText="Blog" />
            <Link linkText="Podcast" />
            <Link linkText="Invite a Friend" />
          </div>
          <div className="flex flex-shrink-0 flex-col items-start gap-4">
            <p className="whitespace-nowrap text-lg font-bold text-white">
              Socials
            </p>
            <Link linkText="Facebook" />
            <Link linkText="Instagram" />
            <Link linkText="Twitter" />
            <Link linkText="Discord" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-shrink-0 items-center justify-between border-t border-solid border-[rgba(255,_255,_255,_0.19)] pt-7">
        <p className="whitespace-nowrap text-[15px] font-medium text-white">
          2023 MilanTour. All rights reserved
        </p>
        <div className="flex flex-shrink-0 items-start gap-[31px]">
          <Link linkText="Privacy Policy" />
          <Link linkText="Terms & Conditions" />
        </div>
      </div>
    </div>
  );
};
