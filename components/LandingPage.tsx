import { Banner } from "./Banner";
import { Navbar } from "./Navbar";
import { Button } from "./Button";
import { Falafel } from "./Falafel";

export const LandingPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="overflow-hidden flex flex-col items-start w-full h-[945px] bg-white font-[Inter]"
      style={override}
    >
      <Banner
        override={{
          height: "80px",
          width: "100%",
        }}
      />
      <Navbar
        override={{
          height: "96px",
          width: "100%",
        }}
      />
      <FeelsGoodToBeFiery />
    </div>
  );
};

const FeelsGoodToBeFiery = () => (
  <div className="overflow-hidden flex justify-between items-start w-full flex-1 min-h-0 bg-[rgb(254,_248,_234)]">
    <div className="overflow-hidden flex flex-col justify-center items-start gap-4 px-8 h-full flex-1 min-w-0">
      <p className="w-[516px] text-black text-7xl font-extrabold">
        FEELS GOOD TO BE FIERY
      </p>
      <p className="w-[546px] text-black text-[32px] font-semibold">
        New Spicy Falafel lights up every forkful with fire-roasted
        jalape&#xf1;os, harissa + fresh herbs.
      </p>
      <Button text="Let\u2019s get bold" />
    </div>
    <div className="overflow-hidden flex flex-col justify-center items-start h-full flex-1 min-w-0">
      <Falafel
        override={{
          width: "100%",
          flex: "1 1 0%",
        }}
      />
    </div>
  </div>
);
