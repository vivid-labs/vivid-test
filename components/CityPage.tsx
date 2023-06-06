import { City } from "./City";
import { Lake } from "./Lake";

export const CityPage = ({ style }: { style?: any }) => {
  return (
    <City
      size="Large"
      backgroundImage={<Lake />}
      title="Mountains, Canada"
      price="$80"
      time="3 hours"
      guideName="Tim Hencordin"
      guidePosition="City Guide"
    />
  );
};
