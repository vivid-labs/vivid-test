import { PlaceholderComponent } from "./PlaceholderComponent";
export const PlaceholderComponentPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <PlaceholderComponent
      override={{
        backgroundColor: "rgb(244, 86, 154)",
        width: "100%",
      }}
    />
  );
};
