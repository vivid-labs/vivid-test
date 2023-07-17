import { MessageWrapper } from "./MessageWrapper";
export const MessageWrapperPage = ({ override }: { override?: any }) => {
  return (
    <MessageWrapper
      from="Me"
      message="Message from person"
      override={{
        width: "100%",
      }}
    />
  );
};
