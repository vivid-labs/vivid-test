import screenshot_2023_09_06At_8_49_1 from "./screenshot_2023_09_06At_8_49_1.jpg";
import chatbotImage from "./chatbotImage.png";
export const Main = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex flex-col justify-end items-end gap-6 p-9 relative w-full h-[1024px] bg-white font-[Inter]"
      style={override}
    >
      <div className="absolute left-0 right-0 w-auto top-0 bottom-0 h-auto origin-top-left overflow-hidden">
        <img
          className="origin-top-left h-full w-full"
          style={{
            transform: "scale(130.71%, 100%) translate(-11.01%, 0%)",
          }}
          src={screenshot_2023_09_06At_8_49_1.src}
        />
      </div>
      <div className="overflow-hidden flex flex-col justify-center items-end gap-[-91px] rounded-2xl w-[360px] h-[480px] border-solid border-gray-400 border bg-white">
        <div className="overflow-hidden flex flex-col items-start p-2 w-full flex-1 min-h-0">
          <div className="overflow-hidden flex items-start p-2.5 rounded-lg w-[184px] bg-[rgb(98,_164,_70)]">
            <p className="flex-1 min-w-0 text-white text-base font-medium leading-4">
              Hi! I can answer any of your questions about Workpay.
            </p>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col justify-center items-center px-3 py-2 w-full h-11 border-solid border-[rgb(179,_179,_179)] border-t bg-[rgb(240,_240,_240)]">
          <div className="overflow-hidden flex flex-col justify-center items-start px-2 rounded-lg w-full flex-1 min-h-0 border-solid border-gray-400 border bg-white">
            <p className="text-gray-500 text-xs font-medium leading-6">
              How do I start using the SDK
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-[129px] h-32">
        <div
          className="absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(98,_164,_70)] rounded-[50%]"
          style={{
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.50)",
          }}
        />
        <img
          className="absolute left-0 right-0 w-auto top-0 bottom-0 h-auto object-cover"
          src={chatbotImage.src}
        />
      </div>
    </div>
  );
};
