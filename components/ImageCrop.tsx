import combo from "./combo.png";

export const ImageCrop = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="flex w-full items-center gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]"
      style={override}
    >
      <div className="h-[27px] w-[27px] origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left scale-y-[98.37%]"
          src={combo.src}
        />
      </div>
      <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left translate-x-[142.86%] scale-x-[25.93%]"
          src={combo.src}
        />
      </div>
      <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left -translate-x-[2.8%] translate-y-[230.97%] scale-x-[109.91%] scale-y-[16.85%]"
          src={combo.src}
        />
      </div>
      <div className="h-[27px] w-[27px] origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left -translate-y-[49.42%] translate-x-[16.85%] rotate-[45.45deg] scale-x-[109.05%] scale-y-[18.66%]"
          src={combo.src}
        />
      </div>
      <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left translate-x-[60.37%] scale-x-[109.91%]"
          src={combo.src}
        />
      </div>
      <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left -translate-x-[4.51%] -translate-y-[81.14%] scale-x-[109.91%]"
          src={combo.src}
        />
      </div>
      <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left -translate-y-[46.81%] translate-x-[17.52%] rotate-[42.3deg] scale-x-[114.97%] scale-y-[104.61%]"
          src={combo.src}
        />
      </div>
      <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left -translate-x-[46.81%] -translate-y-[117.52%] rotate-[137.7deg] scale-x-[114.97%] scale-y-[104.61%]"
          src={combo.src}
        />
      </div>
      <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left -translate-x-[117.52%] -translate-y-[53.19%] -rotate-[137.7deg] scale-x-[114.97%] scale-y-[104.61%]"
          src={combo.src}
        />
      </div>
      <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left -translate-x-[53.19%] translate-y-[17.52%] -rotate-[42.3deg] scale-x-[114.97%] scale-y-[104.61%]"
          src={combo.src}
        />
      </div>
      <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left -translate-x-[4.51%] rotate-0 scale-x-[109.91%]"
          src={combo.src}
        />
      </div>
      <div className="h-[30px] w-[27px] origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left translate-x-[35.17%] translate-y-[17.99%] -rotate-[26.7deg] scale-x-[40.31%] scale-y-[186.1%]"
          src={combo.src}
        />
      </div>
    </div>
  );
};
