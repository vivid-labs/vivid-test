import image from "./image.png";
import * as React from "react";
export const Delete = ({ override }: { override?: any }) => {
  return (
    <div className="relative h-[55px] w-20" style={override}>
      <img
        className="absolute bottom-[0%] left-[0%] right-[0%] top-[0%] h-full w-full rounded-md object-cover"
        src={image.src}
      />
    </div>
  );
};
