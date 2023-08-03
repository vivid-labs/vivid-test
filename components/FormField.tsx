import img_2585_1 from "./img_2585_1.png";
export const FormField = ({
  override,
  type,
  field,
  placeholder,
}: {
  override?: any;
  type: string;
  field: string;
  placeholder: string;
}) => {
  switch (type) {
    case "TextInput":
      return (
        <div
          className="flex flex-col items-start gap-1 relative w-[379px]"
          style={override}
        >
          <p className="flex flex-col justify-center text-black text-base font-medium tracking-[0.01px] leading-[23px]">
            {field}
          </p>
          <div className="overflow-hidden flex items-start p-2 rounded-[5px] relative w-full flex-shrink-0 border-solid border-[rgb(217,_217,_217)] border bg-[rgb(245,_241,_241)]">
            <p className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(148,_148,_148)] text-base font-medium tracking-[0.01px] leading-[23px]">
              {placeholder}
            </p>
          </div>
        </div>
      );
    case "Select":
      return (
        <div
          className="flex flex-col items-start gap-1 relative w-[379px]"
          style={override}
        >
          <p className="flex flex-col justify-center text-black text-base font-medium tracking-[0.01px] leading-[23px]">
            {field}
          </p>
          <div className="overflow-hidden flex justify-between items-start p-2 rounded-[5px] relative w-full flex-shrink-0 border-solid border-[rgb(217,_217,_217)] border bg-[rgb(245,_241,_241)]">
            <p className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(148,_148,_148)] text-base font-medium tracking-[0.01px] leading-[23px]">
              {placeholder}
            </p>
            <img
              className="w-5 h-[20.29px] flex-shrink-0 object-cover opacity-[0.30000001192092896]"
              src={img_2585_1.src}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};
