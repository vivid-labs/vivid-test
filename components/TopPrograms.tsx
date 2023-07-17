import { City } from "./City";
import { Lake } from "./Lake";
import { Ski } from "./Ski";
import { Jungle } from "./Jungle";
import { Berlin } from "./Berlin";
export const TopPrograms = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col items-center gap-9 px-0 py-[56px] relative w-[1440px] bg-[rgb(13,_17,_20)]"
      figma-id="1201:1709"
    >
      <p
        className="whitespace-nowrap text-center text-[rgb(255,_255,_255)] text-[60px] font-[Quicksand] font-bold"
        figma-id="1201:1710"
      >
        Top Programs
      </p>
      <p
        className="text-center text-[rgb(255,_255,_255)] text-[20px] font-[Quicksand] font-normal tracking-[-0.03em]"
        figma-id="1201:1711"
      >
        Our programs are compiled by the best guides. Each tourist will be able
        to choose a program according to their level.
      </p>
      <div
        className="flex items-start gap-9 relative flex-shrink-0"
        figma-id="1201:1712"
      >
        <City
          size="Large"
          backgroundImage={<Lake />}
          title="Mountains, Canada"
          price="$80"
          time="3 hours"
          guideName="Tim Hencordin"
          guidePosition="City Guide"
        />
        <div
          className="flex flex-col items-start gap-[22px] relative flex-shrink-0"
          figma-id="1201:1714"
        >
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
