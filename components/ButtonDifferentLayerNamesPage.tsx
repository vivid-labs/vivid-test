import { ButtonDifferentLayerNames } from "./ButtonDifferentLayerNames";
export const ButtonDifferentLayerNamesPage = ({
  override,
}: {
  override?: any;
}) => {
  return (
    <ButtonDifferentLayerNames
      size="Large"
      hover="True"
      override={{
        width: "100%",
      }}
    />
  );
};
