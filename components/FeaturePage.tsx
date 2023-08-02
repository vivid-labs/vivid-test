import { Feature } from "./Feature";
export const FeaturePage = ({ override }: { override?: any }) => {
  return (
    <Feature
      description="As soon as designs are complete, developers can review generated code in their normal workflow. "
      heading="Create PRs in GitHub"
      override={{
        height: "fit-content",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    />
  );
};
