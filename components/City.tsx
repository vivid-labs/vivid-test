import "./City.css";
import { Lake } from "./Lake";
import ticketImage1 from "./ticketImage1.svg";
import timeCircleImage from "./timeCircleImage.svg";
import image from "./image.jpg";
import ticketImage from "./ticketImage.svg";
import ticket from "./ticket.svg";
import timeCircle from "./timeCircle.svg";

export const City = ({
  override,
  size,
  backgroundImage,
  title,
  price,
  time,
  guideName,
  guidePosition,
}: {
  override?: any;
  size: string;
  backgroundImage: any;
  title: string;
  price: string;
  time: string;
  guideName: string;
  guidePosition: string;
}) => {
  const contentSize = {
    Large: {
      height: "562px",
    },
    Medium: {
      height: "360px",
    },
    Small: {
      height: "180px",
    },
  }[size];
  const citySize = {
    Large: {
      height: "562px",
    },
    Medium: {
      height: "360px",
    },
    Small: {
      height: "180px",
    },
  }[size];
  let ticketSrc;
  if (size === "Large") {
    ticketSrc = ticketImage1;
  } else if (size === "Medium") {
    ticketSrc = ticketImage;
  } else {
    ticketSrc = ticket;
  }
  let timeCircleSrc;
  if (size === "Large") {
    timeCircleSrc = timeCircleImage;
  } else if (size === "Medium") {
    timeCircleSrc = timeCircleImage;
  } else {
    timeCircleSrc = timeCircle;
  }

  return (
    <div
      style={{
        ...citySize,
        ...override,
      }}
      className="overflow-hidden rounded-[20px] relative w-[376px]"
    >
      <div className="overflow-hidden rounded-[20px] absolute w-[376px] left-0 h-[562px] top-0 bg-[linear-gradient(_180deg,_rgb(255,_255,_255,_0.63)_0%,_rgb(0,_0,_0,_0)_100%_)]">
        {backgroundImage}
        <div className="absolute bg-[linear-gradient(_0deg,_rgb(13,_14,_16,_0.63)_0%,_rgb(217,_217,_217,_0)_100%_)]" />
      </div>
      <div
        style={contentSize}
        className="flex flex-col justify-between items-start pl-[24px] pr-[24px] pt-[34px] pb-[34px] absolute w-[376px] left-0 top-0"
      >
        <div className="flex flex-col justify-start items-start relative flex-shrink-0">
          <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(15,_33,_43)] text-[20px] font-[Quicksand] font-semibold">
            {title}
          </p>
          <div className="flex flex-row justify-start items-start gap-[9px] relative flex-shrink-0">
            <div className="flex flex-row justify-start items-center gap-[2px] relative flex-shrink-0">
              <div className="overflow-hidden relative w-[14px] h-[14px] flex-shrink-0">
                <div>
                  <img
                    src={ticketSrc.src}
                    className="absolute left-[1.17px] -right-[1.17px] w-auto top-[2.33px] -bottom-[2.33px] h-auto"
                  />
                </div>
              </div>
              <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(15,_33,_43)] text-[10px] font-[Quicksand] font-normal">
                {price}
              </p>
            </div>
            <div className="flex flex-row justify-start items-end gap-[2px] relative flex-shrink-0">
              <div className="overflow-hidden relative w-[14px] h-[14px] flex-shrink-0">
                <div>
                  <img
                    src={timeCircleSrc.src}
                    className="absolute left-[1.17px] -right-[1.17px] w-auto top-[1.17px] -bottom-[1.17px] h-auto"
                  />
                </div>
              </div>
              <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(15,_33,_43)] text-[10px] font-[Quicksand] font-normal">
                {time}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center gap-[15px] relative flex-shrink-0">
          <img
            src={image.src}
            className="w-[30px] h-[30px] flex-shrink-0 border-[3px] border-solid object-cover opacity-100 rounded-[50%]"
          />
          <div className="flex flex-col justify-start items-start relative flex-shrink-0">
            <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(255,_255,_255)] text-[15px] font-[Quicksand] font-bold">
              {guideName}
            </p>
            <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(255,_255,_255)] text-[12px] font-[Quicksand] font-normal">
              {guidePosition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
