import { ButtonLg } from "./ButtonLg";
export const ButtonLgPage = ({ override }: { override?: any }) => {
  return (
    <ButtonLg
      text="true"
      icon="false"
      rounded="false"
      ourlined="false"
      iconLeft="true"
      dropdown="false"
      previous="false"
      next="false"
      play="false"
      override={{
        width: "100%",
      }}
    />
  );
};
