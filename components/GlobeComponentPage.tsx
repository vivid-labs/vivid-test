import { GlobeComponent } from "./GlobeComponent";

export const GlobeComponentPage = ({ override }: { override?: any }) => {
  return (
    <GlobeComponent
      override={{
        height: "24px",
        width: "24px",
      }}
    />
  );
};
