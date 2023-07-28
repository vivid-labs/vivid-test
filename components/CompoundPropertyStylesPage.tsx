import { CompoundPropertyStyles } from "./CompoundPropertyStyles";
export const CompoundPropertyStylesPage = ({
  override,
}: {
  override?: any;
}) => {
  return (
    <CompoundPropertyStyles
      rank="First"
      greek="Beta"
      override={{
        width: "100%",
      }}
      figma-id="2:16:25"
    />
  );
};
