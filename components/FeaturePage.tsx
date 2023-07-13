import { Feature } from "./Feature";
export const FeaturePage = ({ override }: { override?: any }) => {
  return (
    <Feature
      heading="Work faster"
      description="Generate summaries, action items & insights"
      override={{
        width: "100%",
      }}
    />
  );
};
