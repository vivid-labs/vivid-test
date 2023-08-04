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
      className="flex w-[1440px] flex-col items-center gap-9 bg-[rgb(13,_17,_20)] py-14"
      style={override}
    >
      <p className="whitespace-nowrap text-6xl font-bold text-white">
        Top Programs
      </p>
      <p className="text-xl font-normal tracking-[-0.03em] text-white">
        Our programs are compiled by the best guides. Each tourist will be able
        to choose a program according to their level.
      </p>
      <div className="flex flex-shrink-0 items-start gap-9">
        <City
          size="Large"
          title="Mountains, Canada"
          price="$80"
          guidePosition="City Guide"
          guideName="Tim Hencordin"
          time="3 hours"
          backgroundImage={<Lake />}
        />
        <div className="flex flex-shrink-0 flex-col items-start gap-[22px]">
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
        <City
          size="Large"
          title="Berlin"
          price="$90"
          guidePosition="City Guide"
          guideName="Keny iman"
          time="10 hours"
          backgroundImage={<Berlin />}
        />
      </div>
    </div>
  );
};
