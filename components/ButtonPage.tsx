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
        backgroundColor: "rgb(255, 255, 255)",
        paddingTop: "22px",
        paddingBottom: "22px",
      }}
    />
  );
};
