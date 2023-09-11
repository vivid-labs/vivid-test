export const ChatbotPane = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="overflow-hidden flex flex-col justify-end items-end rounded-2xl w-full h-[480px] border-solid border-gray-400 border bg-white font-[Inter]"
      style={override}
    >
      <div className="overflow-hidden flex flex-col items-start p-2 w-full flex-1 min-h-0">
        <div className="overflow-hidden flex items-start p-2.5 rounded-lg w-60 bg-[rgb(81,_33,_226)]">
          <p className="flex-1 min-w-0 text-white text-base font-medium leading-4">
            Hi! I can answer any of your questions about Footprint.
          </p>
        </div>
      </div>
      <div className="overflow-hidden flex flex-col justify-center items-center px-3 py-2 w-full h-16 border-solid border-[rgb(179,_179,_179)] border-t bg-[rgb(240,_240,_240)]">
        <div className="overflow-hidden flex flex-col justify-center items-start p-2 rounded-lg w-full flex-1 min-h-0 border-solid border-gray-400 border bg-white">
          <p className="text-gray-500 text-base font-medium leading-6">
            How do I create a playbook?
          </p>
        </div>
      </div>
    </div>
  );
};
