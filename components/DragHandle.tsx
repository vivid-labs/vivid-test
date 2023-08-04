export const DragHandle = ({ override }: { override?: any }) => {
  return (
    <div className="relative h-[5px] w-2" style={override}>
      <div className="bottom-3/5 absolute left-[0%] right-3/4 top-[0%] h-2/5 w-1/4 rounded-[50%] bg-[rgb(160,_160,_160)]" />
      <div className="bottom-3/5 absolute left-3/4 right-[0%] top-[0%] h-2/5 w-1/4 rounded-[50%] bg-[rgb(160,_160,_160)]" />
      <div className="bottom-3/5 absolute left-[37.5%] right-[37.5%] top-[0%] h-2/5 w-1/4 rounded-[50%] bg-[rgb(160,_160,_160)]" />
      <div className="top-3/5 absolute bottom-[0%] left-[0%] right-3/4 h-2/5 w-1/4 rounded-[50%] bg-[rgb(160,_160,_160)]" />
      <div className="top-3/5 absolute bottom-[0%] left-3/4 right-[0%] h-2/5 w-1/4 rounded-[50%] bg-[rgb(160,_160,_160)]" />
      <div className="top-3/5 absolute bottom-[0%] left-[37.5%] right-[37.5%] h-2/5 w-1/4 rounded-[50%] bg-[rgb(160,_160,_160)]" />
    </div>
  );
};
