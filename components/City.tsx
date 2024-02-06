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
      className="overflow-hidden rounded-[1.25rem] relative w-[376px]"
      style={{
        ...citySize,
        ...override,
      }}
    >
      <div
        className="overflow-hidden rounded-[1.25rem] absolute w-[376px] left-0 h-[562px] top-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.63) 0%, rgba(0, 0, 0, 0.00) 100%)",
        }}
      >
        {backgroundImage}
        <div
          className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full"
          style={{
            background:
              "linear-gradient(0deg, rgba(13, 14, 16, 0.63) 0%, rgba(217, 217, 217, 0.00) 100%)",
          }}
        />
      </div>
      <div
        className="flex flex-col justify-between items-start px-6 py-[34px] absolute w-[376px] left-0 top-0"
        style={{
          ...contentSize,
        }}
      >
        <div className="flex flex-col items-start">
          <p className="text-[rgb(15,_33,_43)] text-xl font-semibold">
            {title}
          </p>
          <div className="flex items-start gap-[9px]">
            <div className="flex items-center gap-0.5">
              <div className="overflow-hidden relative w-3.5 h-3.5">
                <div>
                  <img
                    className="absolute left-[1.17px] -right-[1.17px] w-auto top-[2.33px] -bottom-[2.33px] h-auto"
                    src={ticketSrc.src}
                  />
                </div>
              </div>
              <p className="text-[rgb(15,_33,_43)] text-[10px] font-normal">
                {price}
              </p>
            </div>
            <div className="flex items-end gap-0.5">
              <div className="overflow-hidden relative w-3.5 h-3.5">
                <div>
                  <img
                    className="absolute left-[1.17px] -right-[1.17px] w-auto top-[1.17px] -bottom-[1.17px] h-auto"
                    src={timeCircleSrc.src}
                  />
                </div>
              </div>
              <p className="text-[rgb(15,_33,_43)] text-[10px] font-normal">
                {time}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[15px]">
          <img
            className="w-[30px] h-[30px] object-cover border-solid border-[rgba(255,_255,_255,_0.37)] border-[3px] rounded-[50%]"
            src={image.src}
          />
          <div className="flex flex-col items-start">
            <p className="text-white text-[15px] font-bold">{guideName}</p>
            <p className="text-white text-xs font-normal">{guidePosition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
