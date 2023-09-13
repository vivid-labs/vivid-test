import commentIcon from "./commentIcon.svg";
export const CommentIcon = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img className="w-[19px] h-[18px]" src={commentIcon.src} style={override} />
  );
};
