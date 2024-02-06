import { Link } from "./Link";

export const Footer = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="flex flex-col justify-between items-center p-[60px] w-[1440px] h-[417px] bg-[rgb(15,_33,_43)]"
      style={override}
    >
      <div className="flex justify-between items-start w-full h-[218px]">
        <MilanTour />
        <CommunityNav />
      </div>
      <CopyrightAndLinks />
    </div>
  );
};

const CopyrightAndLinks = () => (
  <div className="flex justify-between items-center pt-7 w-full border-solid border-[rgba(255,_255,_255,_0.19)] border-t">
    <p className="text-white text-[15px] font-medium">
      2023 MilanTour. All rights reserved
    </p>
    <div className="flex items-start gap-[31px]">
      <Link linkText="Privacy Policy" />
      <Link linkText="Terms & Conditions" />
    </div>
  </div>
);

const MilanTour = () => (
  <div className="flex flex-col items-start gap-2">
    <p className="text-white text-[25px] font-bold">MilanTour</p>
    <p className="text-white text-[17px] font-medium">
      Our vision is to provide convenience
      <br />
      and help you to find your best place for traveling
    </p>
  </div>
);

const CommunityNav = () => (
  <div className="flex items-center gap-20">
    <div className="flex flex-col items-start gap-4">
      <p className="text-white text-lg font-bold">About</p>
      <Link linkText="Travels" />
      <Link linkText="Partnership" />
      <Link linkText="How to Travel" />
      <Link linkText="Our plans" />
    </div>
    <div className="flex flex-col items-start gap-4">
      <p className="text-white text-lg font-bold">Community</p>
      <Link linkText="Events" />
      <Link linkText="Blog" />
      <Link linkText="Podcast" />
      <Link linkText="Invite a Friend" />
    </div>
    <div className="flex flex-col items-start gap-4">
      <p className="text-white text-lg font-bold">Socials</p>
      <Link linkText="Facebook" />
      <Link linkText="Instagram" />
      <Link linkText="Twitter" />
      <Link linkText="Discord" />
    </div>
  </div>
);
