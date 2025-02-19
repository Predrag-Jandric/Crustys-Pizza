import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { GiShoppingCart } from "react-icons/gi";
import { getCart } from "./cartSlice";

function CartOverview() {
  const cart = useSelector(getCart);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-gray7 px-4 py-4 text-sm uppercase text-white sm:px-6 md:text-base">
      <p className="text-dark space-x-4 font-semibold sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link className="flex relative items-center gap-2 font-semibold" to="/cart">
        {cart.length > 0 && (
          <span className="absolute left-2 -top-2 flex size-[1.1rem] animate-bounce items-center justify-center rounded-full bg-red-400 text-sm text-black">
            {cart.length}
          </span>
        )}
        <GiShoppingCart className="size-7" />
        Open cart
      </Link>
    </div>
  );
}

export default CartOverview;
