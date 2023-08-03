import singleImageCrop from "./singleImageCrop.png";
export const SingleImageCrop = ({ override }: { override?: any }) => {
  return (
    <div
      className="h-[30px] w-full flex-shrink-0 origin-top-left overflow-hidden"
      style={override}
    >
      <img
        className="h-full w-full origin-top-left -translate-x-[78.4%] translate-y-[135.5%] -rotate-[71.88deg] scale-x-[96.46%] scale-y-[34.74%] transform"
        src={singleImageCrop.src}
      />
    </div>
  );
};
