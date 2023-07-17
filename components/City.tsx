import { Lake } from "./Lake";
import ticket from "./ticket.svg";
import timeCircle from "./timeCircle.svg";
import image from "./image.jpg";
import ticketImage from "./ticketImage.svg";
import timeCircleImage from "./timeCircleImage.svg";
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
    ticketSrc = ticket;
  } else if (size === "Medium") {
    ticketSrc = ticketImage;
  } else {
    ticketSrc = ticket;
  }
  let timeCircleSrc;
  if (size === "Large") {
    timeCircleSrc = timeCircle;
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
      className="overflow-hidden rounded-[20px] relative w-[23.5rem]"
      figma-id="1201:1572"
    >
      <div
        className="overflow-hidden rounded-[20px] absolute w-[23.5rem] h-[562px] bg-[linear-gradient(_180deg,_rgb(255,_255,_255,_0.63)_0%,_rgb(0,_0,_0,_0)_100%_)]"
        figma-id="1201:1573"
      >
        {backgroundImage}
        <div
          className="absolute right-[0%] w-full bottom-[0%] h-full bg-[linear-gradient(_0deg,_rgb(13,_14,_16,_0.63)_0%,_rgb(217,_217,_217,_0)_100%_)]"
          figma-id="1201:1575"
        />
      </div>
      <div
        style={contentSize}
        className="flex flex-col justify-between items-start px-[24px] py-[34px] absolute w-[23.5rem]"
        figma-id="1201:1576"
      >
        <div
          className="flex flex-col items-start relative flex-shrink-0"
          figma-id="1201:1577"
        >
          <p
            className="whitespace-nowrap text-center text-[rgb(15,_33,_43)] text-[20px] font-[Quicksand] font-semibold"
            figma-id="1201:1578"
          >
            {title}
          </p>
          <div
            className="flex items-start gap-[9px] relative flex-shrink-0"
            figma-id="1201:1579"
          >
            <div
              className="flex items-center gap-[2px] relative flex-shrink-0"
              figma-id="1201:1580"
            >
              <div
                className="overflow-hidden relative w-[14px] h-[14px] flex-shrink-0"
                figma-id="1201:1581"
              >
                <div figma-id="1201:1582">
                  <img
                    src={ticketSrc.src}
                    className="absolute left-[1.17px] -right-[1.17px] w-auto top-[2.33px] -bottom-[2.33px] h-auto"
                    figma-id="1201:1583"
                  />
                </div>
              </div>
              <p
                className="whitespace-nowrap text-center text-[rgb(15,_33,_43)] text-[10px] font-[Quicksand] font-normal"
                figma-id="1201:1586"
              >
                {price}
              </p>
            </div>
            <div
              className="flex items-end gap-[2px] relative flex-shrink-0"
              figma-id="1201:1587"
            >
              <div
                className="overflow-hidden relative w-[14px] h-[14px] flex-shrink-0"
                figma-id="1201:1588"
              >
                <div figma-id="1201:1589">
                  <img
                    src={timeCircleSrc.src}
                    className="absolute left-[1.17px] -right-[1.17px] w-auto top-[1.17px] -bottom-[1.17px] h-auto"
                    figma-id="1201:1590"
                  />
                </div>
              </div>
              <p
                className="whitespace-nowrap text-center text-[rgb(15,_33,_43)] text-[10px] font-[Quicksand] font-normal"
                figma-id="1201:1593"
              >
                {time}
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex items-center gap-[15px] relative flex-shrink-0"
          figma-id="1201:1594"
        >
          <img
            src={image.src}
            className="w-[30px] h-[30px] flex-shrink-0 object-cover opacity-100 border-solid border-[3px] rounded-[50%]"
            figma-id="1201:1595"
          />
          <div
            className="flex flex-col items-start relative flex-shrink-0"
            figma-id="1201:1596"
          >
            <p
              className="whitespace-nowrap text-center text-[rgb(255,_255,_255)] text-[15px] font-[Quicksand] font-bold"
              figma-id="1201:1597"
            >
              {guideName}
            </p>
            <p
              className="whitespace-nowrap text-center text-[rgb(255,_255,_255)] text-[12px] font-[Quicksand] font-normal"
              figma-id="1201:1598"
            >
              {guidePosition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
