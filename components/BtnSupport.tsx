import { TextHovering } from "./TextHovering";
export const BtnSupport = ({
  override,
  property_1,
}: {
  override?: any;
  property_1: string;
}) => {
  switch (property_1) {
    case "btn hover":
      return (
        <div
          style={override}
          className="flex flex-col items-start gap-[10px] relative"
          figma-id="1201:7013"
        >
          <TextHovering property_1="hover" />
          <div
            className="absolute w-[58px] left-[9px] h-px top-[21px] bg-[rgb(239,_121,_12)] rounded-[1px]"
            figma-id="1201:7015"
          />
        </div>
      );
    case "btn default":
      return (
        <div
          style={override}
          className="flex flex-col items-start gap-[10px] relative"
          figma-id="1201:7016"
        >
          <TextHovering property_1="default" />
          <div
            className="opacity-0 absolute w-px left-[9px] h-px top-[21px] bg-[rgb(239,_121,_12)] rounded-[1px]"
            figma-id="1201:7018"
          />
        </div>
      );
    default:
      return null;
  }
};
