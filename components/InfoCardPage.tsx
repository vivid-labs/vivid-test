import { InfoCard } from "./InfoCard";
import { CreateCollectionIcon } from "./CreateCollectionIcon";

export const InfoCardPage = () => {
  return (
    <InfoCard
      property_1="Info Card"
      icon={<CreateCollectionIcon />}
      bodyText="Upload your work and setup your collection. Add a description, social links and floor price."
    />
  );
};
