import group from "./group.svg";
export const CheckMark = ({ override }: { override?: any }) => {
  return (
    <div style={override}>
      <img src={group.src} />
    </div>
  );
};
