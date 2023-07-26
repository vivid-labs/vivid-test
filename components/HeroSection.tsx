import heroSection from "./heroSection.png";
import { Navigation } from "./Navigation";
import { Button } from "./Button";
import { Feature } from "./Feature";
import { VolumeDown } from "./VolumeDown";
import { Program } from "./Program";
import { Home } from "./Home";
export const HeroSection = ({ override }: { override?: any }) => {
  const featureProps = [
    {
      moreTitle: "Select guide",
      description: "Travel on your own. Use the services of an audio guide.",
      title: "Audio Guide",
      icon: <VolumeDown figma-id="4:" />,
      "figma-id": "4:6:428",
    },
    {
      moreTitle: "Select program",
      description: "Choose a travel program that is right for you.",
      title: "Programs",
      icon: <Program figma-id="4:" />,
      "figma-id": "4:6:429",
    },
    {
      moreTitle: "Learn more",
      description: "Book hotels and restaurants at the best prices",
      title: "Hotels & Restaurant",
      icon: <Home figma-id="4:" />,
      "figma-id": "4:6:430",
    },
  ];
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col items-center gap-[66px] relative w-[1440px]"
      figma-id="4:6:421"
    >
      <img
        src={heroSection.src}
        className="object-cover opacity-100 absolute h-full w-full"
        figma-id=""
      />
      <Navigation
        override={{
          height: "fit-content",
          width: "100%",
        }}
        figma-id="4:6:422"
      />
      <div
        className="relative w-[793px] h-[19rem] flex-shrink-0"
        figma-id="4:6:423"
      >
        <p
          className="text-center text-[rgb(255,_255,_255)] text-[70px] font-[Quicksand] font-bold tracking-[-0.03em]"
          figma-id="4:6:424"
        >
          Switzerland Has Never Been So Affordable
        </p>
        <p
          className="text-center text-[rgb(255,_255,_255)] text-[25px] font-[Quicksand] font-normal tracking-[-0.03em]"
          figma-id="4:6:425"
        >
          Discover Switzerland. Choose the best programs, guides, hotels and
          restaurants.
        </p>
      </div>
      <Button color="White" figma-id="4:6:426" />
      <div
        className="flex justify-center items-start gap-[31px] relative flex-shrink-0"
        figma-id="4:6:427"
      >
        {featureProps.map((props, i) => (
          <Feature {...props} key={i} />
        ))}
      </div>
    </div>
  );
};
