import { PlaceholderComponent } from "./PlaceholderComponent";
import { Button } from "./Button";
export const TextOverrides = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  const buttonProps = [
    {
      type: "Primary",
      text: "Text override",
      override: {
        position: "absolute",
        top: "351px",
        left: "299px",
      },
    },
    {
      type: "Primary",
      text: "Get started",
      override: {
        position: "absolute",
        top: "351px",
        left: "151px",
      },
    },
    {
      type: "Secondary",
      text: "Get started",
      override: {
        height: "38px",
        width: "113px",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "431px",
        left: "153px",
      },
    },
    {
      type: "Secondary",
      text: "Text override",
      override: {
        height: "38px",
        width: "113px",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "431px",
        left: "299px",
      },
    },
  ];
  return (
    <div
      className="overflow-hidden relative w-full h-[742px] bg-[rgb(74,_74,_74)] font-[Avenir]"
      style={override}
    >
      <PlaceholderComponent
        override={{
          position: "absolute",
          top: "359px",
          left: "552px",
          right: "1075px",
          bottom: "288px",
        }}
      />
      <PlaceholderComponent
        override={{
          position: "absolute",
          top: "359px",
          left: "814px",
          right: "813px",
          bottom: "288px",
        }}
      />
      {buttonProps.map((props, i) => (
        <Button {...props} key={i} />
      ))}
    </div>
  );
};
