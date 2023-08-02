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
          className="relative flex w-[379px] flex-col items-start gap-1"
          style={override}
        >
          <p className="flex flex-col justify-center text-base font-medium leading-[23px] tracking-[0.01px] text-black">
            {field}
          </p>
          <div className="relative flex w-full flex-shrink-0 items-start overflow-hidden rounded-[5px] border border-solid border-[rgb(217,_217,_217)] bg-[rgb(245,_241,_241)] p-2">
            <p className="flex flex-col justify-center whitespace-nowrap text-center text-base font-medium leading-[23px] tracking-[0.01px] text-[rgb(148,_148,_148)]">
              {placeholder}
            </p>
          </div>
        </div>
      );
    case "Select":
      return (
        <div
          className="relative flex w-[379px] flex-col items-start gap-1"
          style={override}
        >
          <p className="flex flex-col justify-center text-base font-medium leading-[23px] tracking-[0.01px] text-black">
            {field}
          </p>
          <div className="relative flex w-full flex-shrink-0 items-start justify-between overflow-hidden rounded-[5px] border border-solid border-[rgb(217,_217,_217)] bg-[rgb(245,_241,_241)] p-2">
            <p className="flex flex-col justify-center whitespace-nowrap text-center text-base font-medium leading-[23px] tracking-[0.01px] text-[rgb(148,_148,_148)]">
              {placeholder}
            </p>
            <img
              className="h-[20.29px] w-5 flex-shrink-0 object-cover opacity-[0.30000001192092896]"
              src={img_2585_1.src}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};
