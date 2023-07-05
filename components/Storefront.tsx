import storefront from "./storefront.svg";
export const Storefront = ({ override }: { override?: any }) => {
  return (
    <img
      src={storefront.src}
      style={{
        width: "32px",
        height: "32px",
        ...override,
      }}
    />
  );
};
