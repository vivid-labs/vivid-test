import logo from "./logo.png";
import { Feature } from "./Feature";

export const Frame_6 = ({ override }: { override?: React.CSSProperties }) => {
  const featureProps = [
    {
      feature: "Unlimited messaging",
    },
    {
      feature: "Saved message history",
    },
    {
      feature: "[Coming Soon] Create custom characters",
    },
    {
      feature: "[Coming Soon] Monetize your custom characters",
      override: {
        height: "fit-content",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
      },
    },
    {
      feature: "[Coming Soon] Chat with other user characters",
      override: {
        height: "fit-content",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
      },
    },
  ];
  return (
    <div
      className="overflow-hidden flex flex-col items-center gap-4 px-[54px] py-4 rounded-lg w-full bg-white font-[Avenir]"
      style={override}
    >
      <img className="w-[42px] h-11 object-cover" src={logo.src} />
      <p className="w-full text-black text-lg font-extrabold">
        Upgrade to Pro!
      </p>
      <p className="w-full text-black text-sm font-normal">
        You&#x2019;ve reached the message limit for free users. With Pro:{" "}
      </p>
      <div className="flex flex-col items-start gap-1 w-full">
        {featureProps.map((props, i) => (
          <Feature {...props} key={i} />
        ))}
      </div>
      <EarlyBird />
      <div className="overflow-hidden flex justify-center items-center px-3 py-2 rounded bg-[rgb(69,_141,_255)]">
        <p className="text-white text-sm font-normal">Sign Up</p>
      </div>
    </div>
  );
};

const EarlyBird = () => (
  <div className="flex flex-col justify-center items-center gap-1 w-full">
    <div className="overflow-hidden flex justify-center items-start gap-1 px-[5px] w-[193px]">
      <p className="w-[62px] text-[rgb(208,_208,_208)] text-3xl font-black line-through">
        &#x24;15
      </p>
      <div className="flex justify-center items-end">
        <p className="text-black font-black">&#x24;5 per month</p>
      </div>
    </div>
    <div className="overflow-hidden flex items-start px-1.5 py-1 rounded bg-[rgb(209,_243,_229)]">
      <p className="text-[rgb(27,_196,_125)] text-xs font-medium">
        Save 66% with early bird!
      </p>
    </div>
  </div>
);
