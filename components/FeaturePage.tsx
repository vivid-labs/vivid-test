import { Feature } from "./Feature";
import { VolumeDown } from "./VolumeDown";
export const FeaturePage = ({ override }: { override?: any }) => {
  return (
    <Feature
      title="Audio Guide"
      description="Travel on your own. Use the services of an audio guide."
      icon={<VolumeDown />}
    />
  );
};
