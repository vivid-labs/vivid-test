import { Tab } from "./Tab";

export const TabBar = ({ override }: { override?: React.CSSProperties }) => {
  const tabProps = [
    {
      state: "active",
      number: "302",
      text: "Created",
      override: {
        height: "60px",
        width: "fit-content",
        position: "absolute",
        top: "0px",
        left: "0px",
      },
    },
    {
      state: "inactive",
      number: "67",
      text: "owned",
      override: {
        height: "60px",
        width: "fit-content",
        position: "absolute",
        top: "0px",
        left: "212px",
      },
    },
    {
      state: "inactive",
      number: "4",
      text: "Collection",
      override: {
        height: "60px",
        width: "fit-content",
        position: "absolute",
        top: "0px",
        left: "404px",
      },
    },
  ];
  return (
    <div
      className="relative w-full h-[70px] bg-[rgb(43,_43,_43)] font-[Work_Sans]"
      style={override}
    >
      <div className="absolute w-[620px] left-10 h-[60px] top-[5px]">
        {tabProps.map((props, i) => (
          <Tab {...props} key={i} />
        ))}
      </div>
    </div>
  );
};
