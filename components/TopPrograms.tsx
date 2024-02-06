import { City } from "./City";
import { Lake } from "./Lake";
import { Ski } from "./Ski";
import { Jungle } from "./Jungle";
import { Berlin } from "./Berlin";

export const TopPrograms = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="flex flex-col items-center gap-9 py-14 w-[1440px] bg-[rgb(13,_17,_20)]"
      style={override}
    >
      <p className="text-white text-6xl font-bold">Top Programs</p>
      <p className="w-[534px] text-white text-xl font-normal tracking-[-0.03em]">
        Our programs are compiled by the best guides. Each tourist will be able
        to choose a program according to their level.
      </p>
      <div className="flex items-start gap-9">
        <CityCard />
        <CityListing />
        <CityCardComponent />
      </div>
    </div>
  );
};

const CityCard = () => (
  <City
    size="Large"
    title="Mountains, Canada"
    price="$80"
    guidePosition="City Guide"
    guideName="Tim Hencordin"
    time="3 hours"
    backgroundImage={<Lake />}
  />
);

const CityListing = () => (
  <div className="flex flex-col items-start gap-[22px]">
    <City
      size="Medium"
      title="Skiing"
      price="$360"
      guidePosition="City Guide"
      guideName="Jorge Zreik"
      time="3 hours"
      backgroundImage={<Ski />}
    />
    <City
      size="Small"
      title="Forest"
      price="$20"
      guidePosition="City Guide"
      guideName="Tim Hencordin"
      time="6 hours"
      backgroundImage={<Jungle />}
    />
  </div>
);

const CityCardComponent = () => (
  <City
    size="Large"
    title="Berlin"
    price="$90"
    guidePosition="City Guide"
    guideName="Keny iman"
    time="10 hours"
    backgroundImage={<Berlin />}
  />
);
