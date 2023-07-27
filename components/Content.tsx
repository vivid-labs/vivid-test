import content from "./content.jpg";
import { Button } from "./Button";
export const Content = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden relative w-full h-[799px] flex-shrink-0"
      figma-id="8:12:55"
    >
      <img
        src={content.src}
        className="object-cover absolute h-full w-full"
        figma-id=""
      />
      <div
        className="overflow-hidden flex flex-col justify-center items-start gap-5 p-6 rounded-[14px] absolute [box-shadow:0px_4px_10px_4px_rgb(0,_0,_0,_0.15)] w-[581px] bg-[rgb(255,_255,_255)]"
        figma-id="8:12:56"
      >
        <div
          className="overflow-hidden flex items-center gap-2 relative w-full flex-shrink-0"
          figma-id="8:12:57"
        >
          <p
            className="text-center text-[rgb(244,_86,_154)] text-[30px] font-[Avenir] font-black"
            figma-id="8:12:58"
          >
            Get started with Vivid Teams!
          </p>
        </div>
        <div
          className="overflow-hidden rounded-[5px] relative w-full h-[199px] flex-shrink-0 bg-[rgb(245,_241,_241)]"
          figma-id="8:12:78"
        >
          <p
            className="text-center flex flex-col justify-center text-[rgb(0,_0,_0)] text-[16px] font-[Avenir] font-medium tracking-[0.01px] leading-[23px]"
            figma-id="8:12:81"
          >
            Vivid will now take you to GitHub and ask you to do some stuff. When
            you&#x2019;re done with that stuff, come back to edit this copy to
            reflect what actually needs to get done, make this styling a bit
            prettier, and then move on!
          </p>
        </div>
        <div
          className="flex items-center gap-5 relative w-full flex-shrink-0"
          figma-id="8:29:718"
        >
          <Button
            type="Secondary"
            text="I'll do this later"
            override={{
              height: "fit-content",
              flex: "1 1 0%",
              minWidth: "0px",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
            figma-id="8:29:719"
          />
          <Button
            type="Primary"
            text="Take me to GitHub!"
            override={{
              height: "fit-content",
              flex: "1 1 0%",
              minWidth: "0px",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
            figma-id="8:12:63"
          />
        </div>
      </div>
    </div>
  );
};
