import { Feature } from "./Feature";
import { VolumeDown } from "./VolumeDown";
export const FeaturePage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <Feature
      moreTitle="Select guide"
      description="Travel on your own. Use the services of an audio guide."
      title="Audio Guide"
      icon={<VolumeDown />}
      override={{
        width: "100%",
      }}
    />
  );
};
