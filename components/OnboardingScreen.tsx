import screenshot_2023_09_05At_4_10_1 from "./screenshot_2023_09_05At_4_10_1.jpg";
import logo from "./logo.png";
import { Button } from "./Button";
import x from "./x.svg";
export const OnboardingScreen = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="overflow-hidden flex flex-col items-start gap-2.5 relative w-full h-[1024px] bg-white font-[Arial]"
      style={override}
    >
      <div className="absolute left-0 right-0 w-auto top-[11px] -bottom-[11px] h-auto origin-top-left overflow-hidden">
        <img
          className="origin-top-left h-full w-full"
          style={{
            transform: "scale(100%, 100.81%) translate(0%, -0.8%)",
          }}
          src={screenshot_2023_09_05At_4_10_1.src}
        />
      </div>
      <div className="overflow-hidden flex justify-center items-center px-[334px] py-[139px] w-full flex-1 min-h-0 bg-[rgba(179,_179,_179,_0.5)]">
        <div
          className="overflow-hidden flex flex-col justify-center items-center gap-16 p-16 rounded-xl relative w-[480px] bg-white"
          style={{
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <p className="w-full text-[rgb(0,_150,_134)] text-4xl font-bold">
            Welcome to Pri-AI!
          </p>
          <div className="overflow-hidden flex flex-col justify-center items-center p-2.5 rounded-full w-[108px] h-[95px] bg-[rgb(255,_126,_64)]">
            <img className="w-[73px] h-[62px] object-cover" src={logo.src} />
          </div>
          <p className="w-full text-[rgb(91,_100,_117)] text-2xl font-bold">
            Start asking about your data
          </p>
          <Button
            text="Get started"
            override={{
              height: "fit-content",
              width: "fit-content",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(0, 148, 129)",
              padding: "16px",
              borderRadius: "8px",
            }}
          />
          <div className="overflow-hidden flex justify-center items-center py-px absolute right-[30px] top-[22.5px]">
            <img className="w-5 h-[22px]" src={x.src} />
          </div>
        </div>
      </div>
    </div>
  );
};
