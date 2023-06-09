import shoppingBag from "./shoppingBag.svg";

export const ShoppingBag = ({ override }: { override?: any }) => {
  return (
    <img src={shoppingBag.src} style={override} className="w-20 h-[5rem]" />
  );
};
