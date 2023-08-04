import newWindowIcon from "./newWindowIcon.png";
export const Step_3 = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col items-start rounded-[15px] relative w-full flex-shrink-0 bg-white font-[Avenir]"
    >
      <div className="flex flex-col items-start gap-6 px-[88px] py-8 relative w-full flex-shrink-0">
        <div className="flex items-start px-2 py-1 rounded relative flex-shrink-0 bg-[rgb(255,_118,_160)]">
          <p className="whitespace-nowrap text-center text-white text-lg font-medium">
            Vivid lets you focus on creating beautiful, intuitive designs while
            automatically creating a reusable component library for your
            developers in the process.{" "}
          </p>
        </div>
        <div className="flex items-start px-2 py-1 rounded relative flex-shrink-0 bg-[rgb(255,_118,_160)]">
          <p className="whitespace-nowrap text-center text-white text-lg font-medium">
            Let&#x2019;s try it with a full design
          </p>
        </div>
        <div className="flex items-start relative w-full flex-shrink-0">
          <div className="overflow-hidden flex flex-col items-start gap-6 px-4 py-6 relative flex-shrink-0 flex-1 min-w-[0rem] self-stretch">
            <div className="flex items-start px-2 py-1 rounded relative flex-shrink-0 bg-black">
              <p className="whitespace-nowrap text-center text-white text-lg font-medium">
                The landing page below is built from many different components,
                some with variants{" "}
              </p>
            </div>
            <div className="flex items-start px-2 py-1 rounded relative flex-shrink-0 bg-black">
              <p className="whitespace-nowrap text-center text-white text-lg font-medium">
                Generate code with Vivid and check out the sandbox!
              </p>
            </div>
            <div className="flex items-start gap-2.5 px-2 py-1 rounded relative flex-shrink-0 bg-black">
              <p className="whitespace-nowrap text-center text-white text-lg font-medium">
                Hit this icon
              </p>
              <div className="w-7 h-[27px] flex-shrink-0 origin-top-left overflow-hidden">
                <img
                  src={newWindowIcon.src}
                  className="transform scale-x-[107.14%] scale-y-[107.41%] -translate-x-[3.33%] translate-y-[0%] origin-top-left h-full w-full"
                />
              </div>
              <p className="whitespace-nowrap text-center text-white text-lg font-medium">
                in the top right of the sandbox preview to open the preview in a
                new window!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
