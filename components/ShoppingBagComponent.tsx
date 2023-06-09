import { ShoppingBag } from "./ShoppingBag";

export const ShoppingBagComponent = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-20 h-[5rem] bg-[]">
      <ShoppingBag />
    </div>
  );
};
