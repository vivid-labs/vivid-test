import photo from "./photo.png";
import patternImage from "./patternImage.svg";
import pattern from "./pattern.svg";
export const CroppedImageMissingTransform = ({
  override,
}: {
  override?: any;
}) => {
  return (
    <div className="w-full" style={override}>
      <div className="absolute w-[1744px] left-[961px] h-[400px] top-[3519px] bg-[rgb(255,_240,_236)] rounded-[2.5rem]" />
      <div className="absolute w-[1744px] left-[961px] h-[400px] top-[3519px] bg-[rgb(255,_240,_236)] rounded-[2.5rem]" />
      <div className="absolute left-[169.27%] -right-[197.65%] w-[128.38%] top-[1085.5%] -bottom-[1289.75%] h-[304.25%] origin-top-left overflow-hidden">
        <img className="origin-top-left h-full w-full" src={photo.src} />
      </div>
      <div className="absolute w-[489px] left-[925px] h-[926.72px] top-[3379.5px] bg-[linear-gradient(_180deg,_rgb(255,_255,_255)_0%,_rgba(255,_255,_255,_0)_100%_)] rounded-[58px]" />
      <div className="absolute w-[62.4px] left-[1435px] h-[612.48px] top-[3241.2px] bg-[linear-gradient(_180deg,_rgb(255,_255,_255)_0%,_rgba(255,_255,_255,_0)_100%_)] rounded-[58px]" />
      <img
        className="absolute w-[333.44px] left-[1851px] h-[1029.34px] top-[3309.72px]"
        src={patternImage.src}
      />
      <img
        className="absolute left-[974.64px] -right-[945.48px] w-auto top-[3524.9px] -bottom-[3513.1px] h-auto"
        src={pattern.src}
      />
    </div>
  );
};
