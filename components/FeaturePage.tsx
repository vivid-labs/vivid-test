import { Feature } from "./Feature";
export const FeaturePage = ({ override }: { override?: any }) => {
  return (
    <Feature
      heading="Call existing components"
      description="Already have components implemented in your codebase? Vivid  links your Figma components to existing React components."
      override={{
        height: "fit-content",
        width: "177.67px",
      }}
      override={{
        width: "100%",
      }}
    />
  );
};
