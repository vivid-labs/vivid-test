import { MessageWrapper } from "./MessageWrapper";
export const Chats = ({ override }: { override?: any }) => {
  const messageWrapperProps = [
    {
      from: "Me",
      message: "This is an automated message from Verizon",
      override: {
        height: "60px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:78",
    },
    {
      from: "Me",
      message: "You need to update your phone plan",
      override: {
        height: "60px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:79",
    },
    {
      from: "Me",
      message:
        "otherwise we're going to find you. find your family. and you do not want to be around when that happens. ",
      override: {
        height: "60px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:80",
    },
    {
      from: "Other",
      message: "Hi, my name is Alberto",
      override: {
        height: "60px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:81",
    },
    {
      from: "Other",
      message: "and I hate chatbots with every fiber of my being",
      override: {
        height: "60px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:82",
    },
    {
      from: "Other",
      message: "like honestly bro",
      override: {
        height: "60px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "5:184:83",
    },
  ];
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col justify-end items-center p-3 relative w-full flex-shrink-0"
      figma-id="5:184:77"
    >
      {messageWrapperProps.map((props, i) => (
        <MessageWrapper {...props} key={i} />
      ))}
    </div>
  );
};
