import heroSection from "./heroSection.png";
import { Navigation } from "./Navigation";
import { Button } from "./Button";
import { Feature } from "./Feature";
import { VolumeDown } from "./VolumeDown";
import { Program } from "./Program";
import { Home } from "./Home";
export const HeroSection = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  const featureProps = [
    {
      moreTitle: "Select guide",
      description: "Travel on your own. Use the services of an audio guide.",
      title: "Audio Guide",
      icon: <VolumeDown />,
    },
    {
      moreTitle: "Select program",
      description: "Choose a travel program that is right for you.",
      title: "Programs",
      icon: <Program />,
    },
    {
      moreTitle: "Learn more",
      description: "Book hotels and restaurants at the best prices",
      title: "Hotels & Restaurant",
      icon: <Home />,
    },
  ];
  return (
    <div
      className="overflow-hidden flex flex-col items-center gap-[66px] relative w-[1440px]"
      style={override}
    >
      <img
        className="object-cover absolute h-full w-full"
        src={heroSection.src}
      />
      <Navigation
        override={{
          height: "fit-content",
          width: "100%",
        }}
      />
      <div className="relative w-[793px] h-[304px]">
        <p className="absolute w-[793px] left-0 top-0 text-white text-[70px] font-bold tracking-[-0.03em]">
          Switzerland Has Never Been So Affordable
        </p>
        <p className="absolute w-[469px] left-[162px] top-[186px] text-white text-[25px] font-normal tracking-[-0.03em]">
          Discover Switzerland. Choose the best programs, guides, hotels and
          restaurants.
        </p>
      </div>
      <Button color="White" />
      <div className="flex justify-center items-start gap-[31px]">
        {featureProps.map((props, i) => (
          <Feature {...props} key={i} />
        ))}
      </div>
    </div>
  );
};
