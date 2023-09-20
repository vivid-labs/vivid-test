import { PlaceholderComponent } from "./PlaceholderComponent";
export const PlaceholderComponentPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <PlaceholderComponent
      override={{
        width: "100%",
      }}
    />
  );
};
