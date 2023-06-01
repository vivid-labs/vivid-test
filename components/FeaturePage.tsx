import { Feature } from "./Feature";
import { Home } from "./Home";

export const FeaturePage = ({ style }: { style?: any }) => {
  return (
    <Feature
      title="Hotels & Restaurant"
      description="Book hotels and restaurants at the best prices"
      moreTitle="Learn more"
      icon={<Home />}
    />
  );
};
