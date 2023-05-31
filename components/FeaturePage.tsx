import { Feature } from "./Feature";
import { VolumeDown } from "./VolumeDown";

export const FeaturePage = ({ style }: { style?: any }) => {
  return (
    <Feature
      title="Audio Guid"
      description="Travel on your own. Use the services of an audio guide."
      moreTitle="Select guide"
      icon={<VolumeDown />}
    />
  );
};
