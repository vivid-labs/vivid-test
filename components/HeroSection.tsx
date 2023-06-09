import heroSection from "./heroSection.png";
import { Navigation } from "./Navigation";
import { Button } from "./Button";
import { Feature } from "./Feature";
import { VolumeDown } from "./VolumeDown";
import { Program } from "./Program";
import { Home } from "./Home";

export const HeroSection = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col justify-start items-center gap-[66px] relative w-[1440px]"
    >
      <img
        src={heroSection.src}
        className="object-cover opacity-100 absolute h-full w-full"
      />
      <Navigation
        override={{
          height: "fit-content",
          width: "100%",
        }}
      />
      <div className="relative w-[793px] h-[304px] flex-shrink-0">
        <p className="text-center absolute w-[793px] left-0 top-0 text-[rgb(255,_255,_255)] text-[70px] font-[Quicksand] font-bold tracking-[-0.03em]">
          Switzerland Has Never Been So Affordable
        </p>
        <p className="text-center absolute w-[469px] left-[162px] top-[186px] text-[rgb(255,_255,_255)] text-[25px] font-[Quicksand] font-normal tracking-[-0.03em]">
          Discover Switzerland. Choose the best programs, guides, hotels and
          restaurants.
        </p>
      </div>
      <Button color="White" />
      <div className="flex flex-row justify-center items-start gap-[31px] relative flex-shrink-0">
        <Feature
          title="Audio Guide"
          description="Travel on your own. Use the services of an audio guide."
          icon={<VolumeDown />}
        />
        <Feature
          title="Programs"
          description="Choose a travel program that is right for you."
          icon={<Program />}
        />
        <Feature
          title="Hotels & Restaurant"
          description="Book hotels and restaurants at the best prices"
          icon={<Home />}
        />
      </div>
    </div>
  );
};
