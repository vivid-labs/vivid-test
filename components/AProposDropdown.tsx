import arrowBackIosNewImage from "./arrowBackIosNewImage.svg";
import arrowBackIosNew from "./arrowBackIosNew.svg";
import { TextHovering } from "./TextHovering";
export const AProposDropdown = ({
  override,
  property_1,
}: {
  override?: any;
  property_1: string;
}) => {
  switch (property_1) {
    case "dropdown":
      return (
        <div
          style={override}
          className="flex items-start relative"
          figma-id="1201:7070"
        >
          <div
            className="flex items-center gap-2 p-[5px] relative flex-shrink-0"
            figma-id="1201:7071"
          >
            <p
              className="whitespace-nowrap flex flex-col justify-center text-[rgb(96,_96,_96)] text-[16px] font-[Montserrat] font-normal tracking-[-0.03em] leading-[1.5em]"
              figma-id="1201:7072"
            >
              &#xc0; propos
            </p>
            <img
              src={arrowBackIosNewImage.src}
              className="transform scale-x-[-164%] scale-y-[164%] origin-top-left w-[6px] h-3 flex-shrink-0"
              figma-id="1201:7073"
            />
          </div>
        </div>
      );
    case "deppanage dropdown":
      return (
        <div
          style={override}
          className="flex flex-col items-start gap-[10px] relative"
          figma-id="1201:7074"
        >
          <div
            className="flex justify-center items-center gap-2 p-[5px] relative flex-shrink-0"
            figma-id="1201:7075"
          >
            <p
              className="whitespace-nowrap flex flex-col justify-center text-[rgb(239,_121,_12)] text-[16px] tracking-[-0.03em] leading-[1.5em]"
              figma-id="1201:7076"
            >
              &#xc0; propos{" "}
            </p>
            <img
              src={arrowBackIosNew.src}
              className="transform scale-x-[-263%] scale-y-[263%] origin-top-left w-[6px] h-3 flex-shrink-0"
              figma-id="1201:7077"
            />
          </div>
          <div
            className="flex flex-col items-start gap-[10px] px-[10px] py-[8px] rounded-[5px] relative [box-shadow:4px_57px_100px_rgb(0,_0,_0,_0.19)] flex-shrink-0 bg-[rgb(250,_250,_250)]"
            figma-id="1201:7078"
          >
            <div
              className="flex items-center gap-2 p-[5px] relative flex-shrink-0"
              figma-id="1201:7079"
            >
              <TextHovering
                property_1="default"
                override={{
                  width: "fit-content",
                  height: "fit-content",
                }}
              />
            </div>
            <div
              className="flex items-center gap-2 p-[5px] relative flex-shrink-0"
              figma-id="1201:7081"
            >
              <TextHovering
                property_1="default"
                override={{
                  width: "fit-content",
                  height: "fit-content",
                }}
              />
            </div>
            <div
              className="flex items-center gap-2 p-[5px] relative flex-shrink-0"
              figma-id="1201:7083"
            >
              <TextHovering
                property_1="default"
                override={{
                  width: "fit-content",
                  height: "fit-content",
                }}
              />
            </div>
            <div
              className="flex items-center gap-2 p-[5px] relative flex-shrink-0"
              figma-id="1201:7085"
            >
              <TextHovering
                property_1="default"
                override={{
                  width: "fit-content",
                  height: "fit-content",
                }}
              />
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};
