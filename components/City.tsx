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
  override?: React.CSSProperties;
  size: string;
  backgroundImage: React.ReactNode;
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
      className="relative w-[376px] overflow-hidden rounded-[1.25rem]"
      style={{
        ...citySize,
        ...override,
      }}
    >
      <div
        className="absolute left-0 top-0 h-[562px] w-[376px] overflow-hidden rounded-[1.25rem]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.63) 0%, rgba(0, 0, 0, 0.00) 100%)",
        }}
      >
        {backgroundImage}
        <div
          className="absolute bottom-[0%] left-[0%] right-[0%] top-[0%] h-full w-full"
          style={{
            background:
              "linear-gradient(0deg, rgba(13, 14, 16, 0.63) 0%, rgba(217, 217, 217, 0.00) 100%)",
          }}
        />
      </div>
      <div
        className="absolute left-0 top-0 flex w-[376px] flex-col items-start justify-between px-6 py-[34px]"
        style={{
          ...contentSize,
        }}
      >
        <div className="flex flex-shrink-0 flex-col items-start">
          <p className="whitespace-nowrap text-xl font-semibold text-[rgb(15,_33,_43)]">
            {title}
          </p>
          <div className="flex flex-shrink-0 items-start gap-[9px]">
            <div className="flex flex-shrink-0 items-center gap-0.5">
              <div className="relative h-3.5 w-3.5 flex-shrink-0 overflow-hidden">
                <div>
                  <img
                    className="absolute -bottom-[2.33px] -right-[1.17px] left-[1.17px] top-[2.33px] h-auto w-auto"
                    src={ticketSrc.src}
                  />
                </div>
              </div>
              <p className="whitespace-nowrap text-[10px] font-normal text-[rgb(15,_33,_43)]">
                {price}
              </p>
            </div>
            <div className="flex flex-shrink-0 items-end gap-0.5">
              <div className="relative h-3.5 w-3.5 flex-shrink-0 overflow-hidden">
                <div>
                  <img
                    className="absolute -bottom-[1.17px] -right-[1.17px] left-[1.17px] top-[1.17px] h-auto w-auto"
                    src={timeCircleSrc.src}
                  />
                </div>
              </div>
              <p className="whitespace-nowrap text-[10px] font-normal text-[rgb(15,_33,_43)]">
                {time}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center gap-[15px]">
          <img
            className="h-[30px] w-[30px] flex-shrink-0 rounded-[50%] border-[3px] border-solid border-[rgba(255,_255,_255,_0.37)] object-cover"
            src={image.src}
          />
          <div className="flex flex-shrink-0 flex-col items-start">
            <p className="whitespace-nowrap text-[15px] font-bold text-white">
              {guideName}
            </p>
            <p className="whitespace-nowrap text-xs font-normal text-white">
              {guidePosition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
