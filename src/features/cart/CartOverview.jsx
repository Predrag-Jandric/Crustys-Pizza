import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  // hides the cart info at the bottom of the screen if we have zero items selected
  // if(!totalCartQuantity) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-gray1 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-gray2 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
