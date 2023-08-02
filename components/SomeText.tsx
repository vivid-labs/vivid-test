export const SomeText = ({ override }: { override?: any }) => {
  return (
    <p
      className="flex w-full flex-col justify-center font-[Inter] text-[15px] font-semibold leading-[19px] tracking-[0.01px] text-white"
      style={override}
    >
      some text
    </p>
  );
};
