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
      className="relative flex w-[1440px] flex-col items-center gap-[66px] overflow-hidden"
      style={override}
    >
      <img
        className="absolute h-full w-full object-cover"
        src={heroSection.src}
      />
      <Navigation
        override={{
          height: "fit-content",
          width: "100%",
        }}
      />
      <div className="relative h-[304px] w-[793px] flex-shrink-0">
        <p className="text-[70px] font-bold tracking-[-0.03em] text-white">
          Switzerland Has Never Been So Affordable
        </p>
        <p className="text-[25px] font-normal tracking-[-0.03em] text-white">
          Discover Switzerland. Choose the best programs, guides, hotels and
          restaurants.
        </p>
      </div>
      <Button color="White" />
      <div className="flex flex-shrink-0 items-start justify-center gap-[31px]">
        {featureProps.map((props, i) => (
          <Feature {...props} key={i} />
        ))}
      </div>
    </div>
  );
};
