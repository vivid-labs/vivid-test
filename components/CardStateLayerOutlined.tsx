export const CardStateLayerOutlined = ({
  override,
  state,
}: {
  override?: React.CSSProperties;
  state: string;
}) => {
  const stateLayerState = {
    enabled: {},
    hovered: {
      backgroundColor: "rgba(230, 224, 233, 0.08)",
    },
    focused: {
      backgroundColor: "rgba(230, 224, 233, 0.12)",
    },
    pressed: {
      backgroundColor: "rgba(230, 224, 233, 0.12)",
    },
    dragged: {
      backgroundColor: "rgba(230, 224, 233, 0.16)",
    },
  }[state];
  const cardStateLayerOutlinedState = {
    enabled: {},
    hovered: {
      boxShadow:
        "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
    },
    focused: {},
    pressed: {},
    dragged: {
      boxShadow:
        "0px 1px 3px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
    },
  }[state];
  return (
    <div
      className="overflow-hidden rounded-xl relative w-[360px] h-[360px] border-solid border-[rgb(73,_69,_79)] border bg-[rgb(20,_18,_24)]"
      style={{
        ...cardStateLayerOutlinedState,
        ...override,
      }}
    >
      <div
        className="flex flex-col justify-center items-center p-2.5 absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full"
        style={{
          ...stateLayerState,
        }}
      />
    </div>
  );
};
