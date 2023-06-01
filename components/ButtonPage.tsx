import { Button } from "./Button";
import { User } from "./User";

export const ButtonPage = ({ style }: { style?: any }) => {
  return (
    <Button
      property_1="Secondary/Filled"
      hasLeftIcon={true}
      leftIcon={<User />}
      hasText={true}
      text="Sign Up"
      style={{}}
    />
  );
};
