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
      className="overflow-hidden flex flex-col items-center w-full h-[869px] bg-white font-[Inter]"
      style={override}
    >
      <Banner
        override={{
          height: "fit-content",
          width: "100%",
        }}
      />
      <Navbar
        override={{
          height: "fit-content",
          width: "100%",
        }}
      />
      <div className="overflow-hidden flex items-center w-full flex-1 min-h-0">
        <div className="overflow-hidden flex flex-col justify-center items-start gap-4 px-8 h-full flex-1 min-w-0 bg-[rgb(254,_248,_234)]">
          <p className="w-[476px] text-black text-7xl font-extrabold">
            FEELS GOOD TO BE FIERY
          </p>
          <p className="w-[544px] text-black text-[32px] font-semibold">
            New Spicy Falafel lights up every forkful with fire-roasted
            jalape&#xf1;os, harissa + fresh herbs.
          </p>
          <Button text="Let's get bold" />
        </div>
        <Falafel
          override={{
            height: "100%",
            flex: "1 1 0%",
          }}
        />
      </div>
    </div>
  );
};
