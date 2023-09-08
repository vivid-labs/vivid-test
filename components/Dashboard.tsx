import screenshot_2023_09_08At_10_08_1 from "./screenshot_2023_09_08At_10_08_1.jpg";
import chatbotImage from "./chatbotImage.png";
export const Dashboard = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex flex-col justify-end items-end gap-6 p-9 relative w-full h-[755px] bg-white font-[Inter]"
      style={override}
    >
      <img
        className="absolute w-[1512px] left-0 h-[755px] top-0 object-cover"
        src={screenshot_2023_09_08At_10_08_1.src}
      />
      <div className="overflow-hidden flex flex-col justify-end items-end gap-[-91px] rounded-2xl w-[360px] h-[480px] border-solid border-gray-400 border bg-white">
        <div className="overflow-hidden flex flex-col items-start p-2 w-full flex-1 min-h-0">
          <div className="overflow-hidden flex items-start p-2.5 rounded-lg w-60 bg-[rgb(81,_33,_226)]">
            <p className="flex-1 min-w-0 text-white text-base font-medium leading-4">
              Hi! I can answer any of your questions about Footprint.
            </p>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col justify-center items-center px-3 py-2 w-full h-[60px] border-solid border-[rgb(179,_179,_179)] border-t bg-[rgb(240,_240,_240)]">
          <div className="overflow-hidden flex flex-col justify-center items-start p-2 rounded-lg w-full flex-1 min-h-0 border-solid border-gray-400 border bg-white">
            <p className="text-gray-500 text-base font-medium leading-6">
              How do I create a playbook?
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-[129px] h-32">
        <div
          className="absolute left-0 right-0 w-auto top-0 bottom-0 h-auto bg-[rgb(81,_33,_229)] rounded-[50%]"
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
