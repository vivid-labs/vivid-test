import { Feature } from "./Feature";
export const FeaturePage = ({ override }: { override?: any }) => {
  return (
    <Feature
      description="Once you generate a component, Vivid will call that component in future generations so you never generate duplicated code. "
      heading="Reuse Components"
      override={{
        height: "fit-content",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    />
  );
};
