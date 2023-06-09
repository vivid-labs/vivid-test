import { Clock } from "./Clock";

export const Badge = ({
  override,
  type,
  size,
  theme,
  icon,
}: {
  override?: any;
  type: string;
  size: string;
  theme: string;
  icon: string;
}) => {
  if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Pink" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(252,_232,_243)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(153,_21,_75)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Purple" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(237,_235,_254)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(85,_33,_181)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Indigo" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(229,_237,_255)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(66,_56,_157)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Blue" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(225,_239,_254)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(30,_66,_159)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Green" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(222,_247,_236)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(3,_84,_63)] text-[14px] font-[Inter] font-semibold leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Yellow" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(253,_246,_178)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(114,_59,_19)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Red" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(253,_232,_232)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(155,_28,_28)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Gray" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(243,_244,_246)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(17,_25,_40)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Pink" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(252,_232,_243)]"
      >
        <Clock
          override={{
            height: "16px",
            width: "16px",
          }}
        />
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(153,_21,_75)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Purple" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(237,_235,_254)]"
      >
        <Clock
          override={{
            height: "16px",
            width: "16px",
          }}
        />
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(85,_33,_181)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Indigo" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(229,_237,_255)]"
      >
        <Clock
          override={{
            height: "16px",
            width: "16px",
          }}
        />
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(66,_56,_157)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Blue" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(225,_239,_254)]"
      >
        <Clock
          override={{
            height: "16px",
            width: "16px",
          }}
        />
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(30,_66,_159)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Green" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(222,_247,_236)]"
      >
        <Clock
          override={{
            height: "16px",
            width: "16px",
          }}
        />
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(3,_84,_63)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Yellow" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(253,_246,_178)]"
      >
        <Clock
          override={{
            height: "16px",
            width: "16px",
          }}
        />
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(114,_59,_19)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Red" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-start items-center gap-4 pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(253,_232,_232)]"
      >
        <Clock
          override={{
            height: "16px",
            width: "16px",
          }}
        />
        <p className="whitespace-nowrap text-center flex flex-col justify-center flex-shrink-0 text-[rgb(155,_28,_28)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Large" &&
    theme === "Gray" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-12 pr-12 pt-[2px] pb-[2px] rounded-[12px] relative bg-[rgb(243,_244,_246)]"
      >
        <Clock
          override={{
            height: "16px",
            width: "16px",
          }}
        />
        <p className="whitespace-nowrap text-center flex flex-col justify-center flex-shrink-0 text-[rgb(17,_25,_40)] text-[14px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Pink" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(252,_232,_243)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(153,_21,_75)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Purple" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(237,_235,_254)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(85,_33,_181)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Indigo" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(229,_237,_255)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(66,_56,_157)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Blue" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(225,_239,_254)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(30,_66,_159)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Green" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(222,_247,_236)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(3,_84,_63)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Yellow" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(253,_246,_178)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(114,_59,_19)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Red" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(251,_213,_213)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(155,_28,_28)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Circle" &&
    size === "Small" &&
    theme === "Gray" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[80px] relative w-20 h-[5rem] bg-[rgb(243,_244,_246)]"
      >
        <div className="flex flex-col justify-start items-start gap-[10px] p-[10px] relative flex-shrink-0">
          <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(17,_25,_40)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
            1
          </p>
        </div>
      </div>
    );
  } else if (
    type === "Circle" &&
    size === "Small" &&
    theme === "Red" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[80px] relative w-20 h-[5rem] bg-[rgb(251,_213,_213)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(155,_28,_28)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          1
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Gray" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(243,_244,_246)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(17,_25,_40)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Pink" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(252,_232,_243)]"
      >
        <Clock
          override={{
            height: "14px",
            width: "14px",
          }}
        />
        <p className="whitespace-nowrap text-center flex flex-col justify-center flex-shrink-0 text-[rgb(153,_21,_75)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Purple" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(237,_235,_254)]"
      >
        <Clock
          override={{
            height: "14px",
            width: "14px",
          }}
        />
        <p className="whitespace-nowrap text-center flex flex-col justify-center flex-shrink-0 text-[rgb(85,_33,_181)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Indigo" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(229,_237,_255)]"
      >
        <Clock
          override={{
            height: "14px",
            width: "14px",
          }}
        />
        <p className="whitespace-nowrap text-center flex flex-col justify-center flex-shrink-0 text-[rgb(66,_56,_157)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Blue" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(225,_239,_254)]"
      >
        <Clock
          override={{
            height: "14px",
            width: "14px",
          }}
        />
        <p className="whitespace-nowrap text-center flex flex-col justify-center flex-shrink-0 text-[rgb(30,_66,_159)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Green" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(222,_247,_236)]"
      >
        <Clock
          override={{
            height: "14px",
            width: "14px",
          }}
        />
        <p className="whitespace-nowrap text-center flex flex-col justify-center flex-shrink-0 text-[rgb(3,_84,_63)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Yellow" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-start items-center gap-4 pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(253,_246,_178)]"
      >
        <Clock
          override={{
            height: "14px",
            width: "14px",
          }}
        />
        <p className="whitespace-nowrap text-center flex flex-col justify-center flex-shrink-0 text-[rgb(114,_59,_19)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Red" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(251,_213,_213)]"
      >
        <Clock
          override={{
            height: "14px",
            width: "14px",
          }}
        />
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(155,_28,_28)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Basic" &&
    size === "Small" &&
    theme === "Gray" &&
    icon === "True"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center gap-4 pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[10px] relative bg-[rgb(243,_244,_246)]"
      >
        <Clock
          override={{
            height: "14px",
            width: "14px",
          }}
        />
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(17,_25,_40)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          Badge
        </p>
      </div>
    );
  } else if (
    type === "Circle" &&
    size === "Small" &&
    theme === "Yellow" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[80px] relative w-20 h-[5rem] bg-[rgb(253,_246,_178)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(114,_59,_19)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          1
        </p>
      </div>
    );
  } else if (
    type === "Circle" &&
    size === "Small" &&
    theme === "Green" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[80px] relative w-20 h-[5rem] bg-[rgb(222,_247,_236)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(3,_84,_63)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          1
        </p>
      </div>
    );
  } else if (
    type === "Circle" &&
    size === "Small" &&
    theme === "Blue" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[80px] relative w-20 h-[5rem] bg-[rgb(225,_239,_254)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(30,_66,_159)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          1
        </p>
      </div>
    );
  } else if (
    type === "Circle" &&
    size === "Small" &&
    theme === "Indigo" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[80px] relative w-20 h-[5rem] bg-[rgb(229,_237,_255)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(66,_56,_157)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          1
        </p>
      </div>
    );
  } else if (
    type === "Circle" &&
    size === "Small" &&
    theme === "Purple" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[80px] relative w-20 h-[5rem] bg-[rgb(237,_235,_254)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(85,_33,_181)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          1
        </p>
      </div>
    );
  } else if (
    type === "Circle" &&
    size === "Small" &&
    theme === "Pink" &&
    icon === "False"
  ) {
    return (
      <div
        style={override}
        className="flex flex-row justify-center items-center pl-[10px] pr-[10px] pt-[2px] pb-[2px] rounded-[80px] relative w-20 h-[5rem] bg-[rgb(252,_232,_243)]"
      >
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(153,_21,_75)] text-[12px] font-[Inter] font-medium leading-[1.5em]">
          1
        </p>
      </div>
    );
  } else {
    return null;
  }
};
