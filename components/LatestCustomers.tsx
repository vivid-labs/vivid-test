import avatarImage4 from "./avatarImage4.jpg";
import borderBottom from "./borderBottom.svg";
import avatarImage3 from "./avatarImage3.jpg";
import avatarImage2 from "./avatarImage2.jpg";
import avatarImage1 from "./avatarImage1.jpg";
import avatarImage from "./avatarImage.jpg";
import avatar from "./avatar.jpg";

export const LatestCustomers = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col justify-start items-start gap-16 p-24 rounded-[16px] relative [box-shadow:0px_1px_3px_rgb(0,_0,_0,_0.1),_0px_1px_2px_rgb(0,_0,_0,_0.06)] w-[380.33px] flex-shrink-0 bg-[rgb(255,_255,_255)]"
    >
      <div className="flex flex-row justify-start items-start gap-[10px] relative w-full flex-shrink-0">
        <p className="flex-shrink-0 flex-1 [0] text-[rgb(17,_24,_39)] text-[20px] font-[Inter] font-semibold leading-[1.5em]">
          Latest Customers
        </p>
      </div>
      <div className="flex flex-col justify-start items-start relative w-full flex-shrink-0">
        <div className="overflow-hidden flex flex-row justify-start items-center pt-[9px] pb-[9px] relative w-full flex-shrink-0 bg-[]">
          <div className="flex flex-row justify-start items-center gap-8 relative flex-shrink-0 flex-1 [0]">
            <div className="rounded-[100px] w-32 h-[8rem] flex-shrink-0 relative">
              <img
                src={avatarImage4.src}
                className="object-cover opacity-100 absolute h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start relative flex-shrink-0 flex-1 [0]">
              <p className="w-[136.44px] flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-semibold leading-[1.5em]">
                Neil Sims
              </p>
              <p className="w-[119.62px] h-[17px] flex-shrink-0 text-[rgb(107,_114,_128)] text-[12px] font-[Inter] font-normal leading-[1.5em]">
                email@example.com
              </p>
            </div>
          </div>
          <p className="w-[55.91px] flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-semibold leading-[1.5em]">
            $367
          </p>
        </div>
        <img src={borderBottom.src} className="w-full h-[0rem] flex-shrink-0" />
        <div className="overflow-hidden flex flex-row justify-start items-center pt-[9px] pb-[9px] relative w-full flex-shrink-0 bg-[]">
          <div className="flex flex-row justify-start items-center gap-8 relative flex-shrink-0 flex-1 [0]">
            <div className="rounded-[100px] w-32 h-[8rem] flex-shrink-0 relative">
              <img
                src={avatarImage3.src}
                className="object-cover opacity-100 absolute h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start relative flex-shrink-0 flex-1 [0]">
              <p className="w-[136.44px] flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-semibold leading-[1.5em]">
                Bonnie Green
              </p>
              <p className="w-[119.62px] h-[17px] flex-shrink-0 text-[rgb(107,_114,_128)] text-[12px] font-[Inter] font-normal leading-[1.5em]">
                email@example.com
              </p>
            </div>
          </div>
          <p className="w-[55.91px] flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-semibold leading-[1.5em]">
            $67
          </p>
        </div>
        <img src={borderBottom.src} className="w-full h-[0rem] flex-shrink-0" />
        <div className="overflow-hidden flex flex-row justify-start items-center pt-[9px] pb-[9px] relative w-full flex-shrink-0 bg-[]">
          <div className="flex flex-row justify-start items-center gap-8 relative flex-shrink-0 flex-1 [0]">
            <div className="rounded-[100px] w-32 h-[8rem] flex-shrink-0 relative">
              <img
                src={avatarImage2.src}
                className="object-cover opacity-100 absolute h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start relative flex-shrink-0 flex-1 [0]">
              <p className="w-[136.44px] flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-semibold leading-[1.5em]">
                Micheal Gough
              </p>
              <p className="w-[119.62px] h-[17px] flex-shrink-0 text-[rgb(107,_114,_128)] text-[12px] font-[Inter] font-normal leading-[1.5em]">
                email@example.com
              </p>
            </div>
          </div>
          <p className="w-[55.91px] flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-semibold leading-[1.5em]">
            $3467
          </p>
        </div>
        <img src={borderBottom.src} className="w-full h-[0rem] flex-shrink-0" />
        <div className="overflow-hidden flex flex-row justify-start items-center pt-[9px] pb-[9px] relative w-full flex-shrink-0 bg-[]">
          <div className="flex flex-row justify-start items-center gap-8 relative flex-shrink-0 flex-1 [0]">
            <div className="rounded-[100px] w-32 h-[8rem] flex-shrink-0 relative">
              <img
                src={avatarImage1.src}
                className="object-cover opacity-100 absolute h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start relative flex-shrink-0 flex-1 [0]">
              <p className="w-[136.44px] flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-semibold leading-[1.5em]">
                Thomas Lean
              </p>
              <p className="w-[119.62px] h-[17px] flex-shrink-0 text-[rgb(107,_114,_128)] text-[12px] font-[Inter] font-normal leading-[1.5em]">
                email@example.com
              </p>
            </div>
          </div>
          <p className="w-[55.91px] flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-semibold leading-[1.5em]">
            $2367
          </p>
        </div>
        <img src={borderBottom.src} className="w-full h-[0rem] flex-shrink-0" />
        <div className="overflow-hidden flex flex-row justify-start items-center pt-[9px] pb-[9px] relative w-full flex-shrink-0 bg-[]">
          <div className="flex flex-row justify-start items-center gap-8 relative flex-shrink-0 flex-1 [0]">
            <div className="rounded-[100px] w-32 h-[8rem] flex-shrink-0 relative">
              <img
                src={avatarImage.src}
                className="object-cover opacity-100 absolute h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start relative flex-shrink-0 flex-1 [0]">
              <p className="w-[136.44px] flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-semibold leading-[1.5em]">
                Lana Byrd
              </p>
              <p className="w-[119.62px] h-[17px] flex-shrink-0 text-[rgb(107,_114,_128)] text-[12px] font-[Inter] font-normal leading-[1.5em]">
                email@example.com
              </p>
            </div>
          </div>
          <p className="w-[55.91px] flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-semibold leading-[1.5em]">
            $367
          </p>
        </div>
        <img src={borderBottom.src} className="w-full h-[0rem] flex-shrink-0" />
        <div className="overflow-hidden flex flex-row justify-start items-center pt-[9px] pb-[9px] relative w-full flex-shrink-0 bg-[]">
          <div className="flex flex-row justify-start items-center gap-8 relative flex-shrink-0 flex-1 [0]">
            <div className="rounded-[100px] w-32 h-[8rem] flex-shrink-0 relative">
              <img
                src={avatar.src}
                className="object-cover opacity-100 absolute h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start relative flex-shrink-0 flex-1 [0]">
              <p className="w-[136.44px] flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-semibold leading-[1.5em]">
                Karen Nelson
              </p>
              <p className="w-[119.62px] h-[17px] flex-shrink-0 text-[rgb(107,_114,_128)] text-[12px] font-[Inter] font-normal leading-[1.5em]">
                email@example.com
              </p>
            </div>
          </div>
          <p className="w-[55.91px] flex-shrink-0 text-[rgb(17,_24,_39)] text-[16px] font-[Inter] font-semibold leading-[1.5em]">
            $1367
          </p>
        </div>
      </div>
    </div>
  );
};
