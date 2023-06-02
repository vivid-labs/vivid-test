import { Button } from "./Button";
import { Eye } from "./Eye";

export const ButtonPage = ({ style }: { style?: any }) => {
  return (
    <Button
      property_1="Secondary/Filled"
      hasLeftIcon={true}
      leftIcon={<Eye />}
      hasText={true}
      text="See NFT"
      style={{
        paddingTop: "22px",
        paddingBottom: "22px",
      }}
    />
  );
};
