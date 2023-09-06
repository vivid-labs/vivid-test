import chatbotImage from "./chatbotImage.png";
export const ChatbotImage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img
      className="w-full h-32 object-cover"
      style={override}
      src={chatbotImage.src}
    />
  );
};
