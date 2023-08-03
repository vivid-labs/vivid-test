import imageImage2 from "./imageImage2.png";
import imageImage1 from "./imageImage1.png";
import imageImage from "./imageImage.png";
import image from "./image.png";
export const Frame = ({ override }: { override?: any }) => {
  return (
    <div
      className="relative h-[571px] w-full flex-shrink-0 overflow-hidden bg-white font-[Helvetica]"
      style={override}
    >
      <div className="absolute top-0 h-[571px] w-[1170px]">
        <p className="text-[39px] font-bold leading-[46px] tracking-[-0.6px] text-black">
          The power of Premium
        </p>
        <div className="absolute left-[15px] top-[193px] h-[303px] w-[1140px]">
          <div className="absolute left-0 top-0 h-[283px] w-[285px]">
            <div className="absolute top-0 h-[142px] w-[142px] overflow-hidden">
              <img className="h-full w-full" src={imageImage2.src} />
            </div>
            <div className="absolute left-0 right-0 top-[182px] h-[61px] w-auto">
              <p className="text-xl font-bold leading-[27.3px] text-black">
                Ad-free music listening
              </p>
              <p className="text-base font-normal leading-6 text-black">
                Enjoy uninterrupted music.
              </p>
            </div>
          </div>
          <div className="absolute left-[285px] top-0 h-[283px] w-[285px]">
            <div className="absolute top-0 h-[142px] w-[142px] overflow-hidden">
              <img className="h-full w-full" src={imageImage1.src} />
            </div>
            <div className="absolute left-0 right-0 top-[182px] h-[85px] w-auto">
              <p className="text-xl font-bold leading-[27.3px] text-black">
                Offline playback
              </p>
              <p className="text-base font-normal leading-6 text-black">
                Save your data by listening offline.
              </p>
            </div>
          </div>
          <div className="absolute left-[570px] top-0 h-[283px] w-[285px]">
            <div className="absolute top-0 h-[142px] w-[142px] overflow-hidden">
              <img className="h-full w-full" src={imageImage.src} />
            </div>
            <div className="absolute left-0 right-0 top-[182px] h-[85px] w-auto">
              <p className="text-xl font-bold leading-[27.3px] text-black">
                Play everywhere
              </p>
              <p className="text-base font-normal leading-6 text-black">
                Listen on your speakers, TV, and other favorite devices.
              </p>
            </div>
          </div>
          <div className="absolute left-[855px] top-0 h-[283px] w-[285px]">
            <div className="absolute top-0 h-[142px] w-[142px] overflow-hidden">
              <img className="h-full w-full" src={image.src} />
            </div>
            <div className="absolute left-0 right-0 top-[182px] h-[85px] w-auto">
              <p className="text-[19px] font-bold leading-[27.3px] text-black">
                Pay your way
              </p>
              <p className="text-base font-normal leading-6 text-black">
                Prepay with Paytm, UPI, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
