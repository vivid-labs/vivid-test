import { Button } from "./Button";
export const StyleConditional = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden relative w-full h-60 flex-shrink-0 border-solid border-[rgb(0,_129,_225)] border"
      figma-id="1201:1197"
    >
      <Button size="Small" hover="False" />
    </div>
  );
};
