import { Frame_3Testing } from "./Frame_3Testing";
export const Frame_3TestingPage = ({ override }: { override?: any }) => {
  return (
    <Frame_3Testing
      showNewText={true}
      text="new text"
      override={{
        width: "100%",
      }}
      figma-id="3:1985:891"
    />
  );
};
