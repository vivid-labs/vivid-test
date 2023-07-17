import icnSettingsIcnXsImage from "./icnSettingsIcnXsImage.svg";
import icnArrowDownIcnSmImage2 from "./icnArrowDownIcnSmImage2.svg";
import icnArrowLeftIcnSmImage2 from "./icnArrowLeftIcnSmImage2.svg";
import icnArrowRightIcnSmImage1 from "./icnArrowRightIcnSmImage1.svg";
import icnArrowDownIcnSmImage1 from "./icnArrowDownIcnSmImage1.svg";
import icnArrowLeftIcnSmImage1 from "./icnArrowLeftIcnSmImage1.svg";
import icnArrowRightIcnSmImage from "./icnArrowRightIcnSmImage.svg";
import icnSettingsIcnXs from "./icnSettingsIcnXs.svg";
import icnArrowDownIcnSmImage from "./icnArrowDownIcnSmImage.svg";
import icnArrowLeftIcnSmImage from "./icnArrowLeftIcnSmImage.svg";
import icnArrowRightIcnSm from "./icnArrowRightIcnSm.svg";
import icnArrowDownIcnSm from "./icnArrowDownIcnSm.svg";
import icnArrowLeftIcnSm from "./icnArrowLeftIcnSm.svg";
import icnPlayIcnSmImage2 from "./icnPlayIcnSmImage2.svg";
import icnPlayIcnSmImage1 from "./icnPlayIcnSmImage1.svg";
import icnPlayIcnSmImage from "./icnPlayIcnSmImage.svg";
import icnPlayIcnSm from "./icnPlayIcnSm.svg";
export const ButtonLg = ({
  override,
  text,
  icon,
  rounded,
  ourlined,
  iconLeft,
  dropdown,
  previous,
  next,
  play,
}: {
  override?: any;
  text: string;
  icon: string;
  rounded: string;
  ourlined: string;
  iconLeft: string;
  dropdown: string;
  previous: string;
  next: string;
  play: string;
}) => {
  if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex flex-col items-center gap-[10px] px-[40px] py-[15px] rounded-[5px] relative bg-[rgb(35,_166,_240)]"
        figma-id="1129:385"
      >
        <p
          className="whitespace-nowrap text-center text-[rgb(255,_255,_255)] text-[24px] font-[Montserrat] font-bold tracking-[0.1px] leading-8"
          figma-id="1129:386"
        >
          Button
        </p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center gap-[15px] px-[30px] py-[15px] rounded-[5px] relative bg-[rgb(35,_166,_240)]"
        figma-id="1129:387"
      >
        <img
          src={icnSettingsIcnXsImage.src}
          className="w-6 h-6 flex-shrink-0"
          figma-id="1129:388"
        />
        <p
          className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[24px] font-[Montserrat] font-bold tracking-[0.1px] leading-8"
          figma-id="1129:390"
        >
          Button
        </p>
      </div>
    );
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center gap-[15px] px-[30px] py-[15px] rounded-[5px] relative bg-[rgb(35,_166,_240)]"
        figma-id="1129:391"
      >
        <p
          className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[24px] font-[Montserrat] font-bold tracking-[0.1px] leading-8"
          figma-id="1129:392"
        >
          Button
        </p>
        <img
          src={icnArrowDownIcnSmImage2.src}
          className="w-3 h-[21px] flex-shrink-0"
          figma-id="1129:393"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center p-5 rounded-[5px] relative bg-[rgb(35,_166,_240)]"
        figma-id="1129:395"
      >
        <img
          src={icnSettingsIcnXsImage.src}
          className="w-6 h-6 flex-shrink-0"
          figma-id="1129:396"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center px-[26px] py-[21px] rounded-[5px] relative bg-[rgb(35,_166,_240)]"
        figma-id="1129:398"
      >
        <img
          src={icnArrowLeftIcnSmImage2.src}
          className="w-[15px] h-[25px] flex-shrink-0"
          figma-id="1129:399"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center px-[26px] py-[21px] rounded-[5px] relative h-[69.25px] bg-[rgb(35,_166,_240)]"
        figma-id="1129:401"
      >
        <img
          src={icnArrowRightIcnSmImage1.src}
          className="w-[15px] h-[25px] flex-shrink-0"
          figma-id="1129:402"
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex flex-col items-center gap-[10px] px-[40px] py-[15px] rounded-[40px] relative bg-[rgb(35,_166,_240)]"
        figma-id="1129:404"
      >
        <p
          className="whitespace-nowrap text-center text-[rgb(255,_255,_255)] text-[24px] font-[Montserrat] font-bold tracking-[0.1px] leading-8"
          figma-id="1129:405"
        >
          Button
        </p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center gap-[15px] px-[30px] py-[15px] rounded-[40px] relative bg-[rgb(35,_166,_240)]"
        figma-id="1129:406"
      >
        <img
          src={icnSettingsIcnXsImage.src}
          className="w-6 h-6 flex-shrink-0"
          figma-id="1129:407"
        />
        <p
          className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[24px] font-[Montserrat] font-bold tracking-[0.1px] leading-8"
          figma-id="1129:409"
        >
          Button
        </p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center gap-[15px] px-[30px] py-[15px] rounded-[40px] relative bg-[rgb(35,_166,_240)]"
        figma-id="1129:410"
      >
        <p
          className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[24px] font-[Montserrat] font-bold tracking-[0.1px] leading-8"
          figma-id="1129:411"
        >
          Button
        </p>
        <img
          src={icnArrowDownIcnSmImage1.src}
          className="w-3 h-[21px] flex-shrink-0"
          figma-id="1129:412"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center p-5 rounded-[40px] relative bg-[rgb(35,_166,_240)]"
        figma-id="1129:414"
      >
        <img
          src={icnSettingsIcnXsImage.src}
          className="w-6 h-6 flex-shrink-0"
          figma-id="1129:415"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center px-[26px] py-[21px] rounded-[40px] relative bg-[rgb(35,_166,_240)]"
        figma-id="1129:417"
      >
        <img
          src={icnArrowLeftIcnSmImage1.src}
          className="w-[15px] h-[25px] flex-shrink-0"
          figma-id="1129:418"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center px-[26px] py-[21px] rounded-[40px] relative h-[69.25px] bg-[rgb(35,_166,_240)]"
        figma-id="1129:420"
      >
        <img
          src={icnArrowRightIcnSmImage.src}
          className="w-[15px] h-[25px] flex-shrink-0"
          figma-id="1129:421"
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex flex-col items-center gap-[10px] px-[40px] py-[15px] rounded-[5px] relative border-solid border-[rgb(35,_166,_240)] border"
        figma-id="1129:423"
      >
        <p
          className="whitespace-nowrap text-center text-[rgb(35,_166,_240)] text-[24px] font-[Montserrat] font-bold tracking-[0.1px] leading-8"
          figma-id="1129:424"
        >
          Button
        </p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center gap-[15px] px-[30px] py-[15px] rounded-[5px] relative border-solid border-[rgb(35,_166,_240)] border"
        figma-id="1129:425"
      >
        <img
          src={icnSettingsIcnXs.src}
          className="w-6 h-6 flex-shrink-0"
          figma-id="1129:426"
        />
        <p
          className="whitespace-nowrap text-[rgb(35,_166,_240)] text-[24px] font-[Montserrat] font-bold tracking-[0.1px] leading-8"
          figma-id="1129:428"
        >
          Button
        </p>
      </div>
    );
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center gap-[15px] px-[30px] py-[15px] rounded-[5px] relative border-solid border-[rgb(35,_166,_240)] border"
        figma-id="1129:429"
      >
        <p
          className="whitespace-nowrap text-[rgb(35,_166,_240)] text-[24px] font-[Montserrat] font-bold tracking-[0.1px] leading-8"
          figma-id="1129:430"
        >
          Button
        </p>
        <img
          src={icnArrowDownIcnSmImage.src}
          className="w-3 h-[21px] flex-shrink-0"
          figma-id="1129:431"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center p-5 rounded-[5px] relative border-solid border-[rgb(35,_166,_240)] border"
        figma-id="1129:433"
      >
        <img
          src={icnSettingsIcnXs.src}
          className="w-6 h-6 flex-shrink-0"
          figma-id="1129:434"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center px-[26px] py-[21px] rounded-[5px] relative border-solid border-[rgb(35,_166,_240)] border"
        figma-id="1129:436"
      >
        <img
          src={icnArrowLeftIcnSmImage.src}
          className="w-[15px] h-[25px] flex-shrink-0"
          figma-id="1129:437"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center px-[26px] py-[21px] rounded-[5px] relative h-[69.25px] border-solid border-[rgb(35,_166,_240)] border"
        figma-id="1129:439"
      >
        <img
          src={icnArrowRightIcnSm.src}
          className="w-[15px] h-[25px] flex-shrink-0"
          figma-id="1129:440"
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex flex-col items-center gap-[10px] px-[40px] py-[15px] rounded-[40px] relative border-solid border-[rgb(35,_166,_240)] border"
        figma-id="1129:442"
      >
        <p
          className="whitespace-nowrap text-center text-[rgb(35,_166,_240)] text-[24px] font-[Montserrat] font-bold tracking-[0.1px] leading-8"
          figma-id="1129:443"
        >
          Button
        </p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center gap-[15px] px-[30px] py-[15px] rounded-[40px] relative border-solid border-[rgb(35,_166,_240)] border"
        figma-id="1129:444"
      >
        <img
          src={icnSettingsIcnXs.src}
          className="w-6 h-6 flex-shrink-0"
          figma-id="1129:445"
        />
        <p
          className="whitespace-nowrap text-[rgb(35,_166,_240)] text-[24px] font-[Montserrat] font-bold tracking-[0.1px] leading-8"
          figma-id="1129:447"
        >
          Button
        </p>
      </div>
    );
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center gap-[15px] px-[30px] py-[15px] rounded-[40px] relative border-solid border-[rgb(35,_166,_240)] border"
        figma-id="1129:448"
      >
        <p
          className="whitespace-nowrap text-[rgb(35,_166,_240)] text-[24px] font-[Montserrat] font-bold tracking-[0.1px] leading-8"
          figma-id="1129:449"
        >
          Button
        </p>
        <img
          src={icnArrowDownIcnSm.src}
          className="w-3 h-[21px] flex-shrink-0"
          figma-id="1129:450"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center p-5 rounded-[40px] relative border-solid border-[rgb(35,_166,_240)] border"
        figma-id="1129:452"
      >
        <img
          src={icnSettingsIcnXs.src}
          className="w-6 h-6 flex-shrink-0"
          figma-id="1129:453"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center px-[26px] py-[21px] rounded-[40px] relative border-solid border-[rgb(35,_166,_240)] border"
        figma-id="1129:455"
      >
        <img
          src={icnArrowLeftIcnSm.src}
          className="w-[15px] h-[25px] flex-shrink-0"
          figma-id="1129:456"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center px-[26px] py-[21px] rounded-[40px] relative h-[69.25px] border-solid border-[rgb(35,_166,_240)] border"
        figma-id="1129:458"
      >
        <img
          src={icnArrowRightIcnSm.src}
          className="w-[15px] h-[25px] flex-shrink-0"
          figma-id="1129:459"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center p-[36.8px] rounded-[9.2px] relative bg-[rgb(35,_166,_240)]"
        figma-id="1129:461"
      >
        <img
          src={icnPlayIcnSmImage2.src}
          className="w-[19px] h-[23px] flex-shrink-0"
          figma-id="1129:462"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center px-[36.8px] py-[34.8px] rounded-[73.6px] relative bg-[rgb(35,_166,_240)]"
        figma-id="1129:464"
      >
        <img
          src={icnPlayIcnSmImage1.src}
          className="w-[19px] h-[23px] flex-shrink-0"
          figma-id="1129:465"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center p-[36.8px] rounded-[9.2px] relative border-solid border-[rgb(35,_166,_240)] border-[1.84px]"
        figma-id="1129:467"
      >
        <img
          src={icnPlayIcnSmImage.src}
          className="w-[19px] h-[23px] flex-shrink-0"
          figma-id="1129:468"
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return (
      <div
        style={override}
        className="overflow-hidden flex items-center px-[36.8px] py-[34.8px] rounded-[73.6px] relative border-solid border-[rgb(35,_166,_240)] border-[1.84px]"
        figma-id="1129:470"
      >
        <img
          src={icnPlayIcnSm.src}
          className="w-[19px] h-[23px] flex-shrink-0"
          figma-id="1129:471"
        />
      </div>
    );
  } else {
    return null;
  }
};
