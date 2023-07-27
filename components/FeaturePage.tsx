import { Feature } from "./Feature";
import { Home } from "./Home";
export const FeaturePage = ({ override }: { override?: any }) => {
  return (
    <Feature
      moreTitle="Learn more"
      description="Book hotels and restaurants at the best prices"
      title="Hotels & Restaurant"
      icon={<Home figma-id="4:" />}
      override={{
        position: "relative",
        width: "100%",
      }}
      figma-id="4:I6:880;6:430"
    />
  );
};
