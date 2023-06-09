import { City } from "./City";
import { Lake } from "./Lake";
import { Ski } from "./Ski";
import { Jungle } from "./Jungle";
import { Berlin } from "./Berlin";

export const TopPrograms = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col justify-start items-center gap-36 pt-56 pb-56 relative w-[1440px] bg-[rgb(13,_17,_20)]"
    >
      <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(255,_255,_255)] text-[60px] font-[Quicksand] font-bold">
        Top Programs
      </p>
      <p className="text-center w-[534px] flex-shrink-0 text-[rgb(255,_255,_255)] text-[20px] font-[Quicksand] font-normal tracking-[-0.03em]">
        Our programs are compiled by the best guides. Each tourist will be able
        to choose a program according to their level.
      </p>
      <div className="flex flex-row justify-start items-start gap-36 relative flex-shrink-0">
        <City
          size="Large"
          backgroundImage={<Lake />}
          title="Mountains, Canada"
          price="$80"
          time="3 hours"
          guideName="Tim Hencordin"
          guidePosition="City Guide"
        />
        <div className="flex flex-col justify-start items-start gap-[22px] relative flex-shrink-0">
          <City
            size="Medium"
            backgroundImage={<Ski />}
            title="Skiing"
            price="$360"
            time="3 hours"
            guideName="Jorge Zreik"
            guidePosition="City Guide"
          />
          <City
            size="Small"
            backgroundImage={<Jungle />}
            title="Forest"
            price="$20"
            time="6 hours"
            guideName="Tim Hencordin"
            guidePosition="City Guide"
          />
        </div>
        <City
          size="Large"
          backgroundImage={<Berlin />}
          title="Berlin"
          price="$90"
          time="10 hours"
          guideName="Keny iman"
          guidePosition="City Guide"
        />
      </div>
    </div>
  );
};
