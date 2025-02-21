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
    <div className="flex items-center justify-between bg-gray7 px-4 py-4 text-gray1 sm:px-6">
      {cart.length >= 1 && (
        <p className="space-x-4 font-semibold text-gray2 sm:space-x-6">
          <span>
            {cart.length <= 1
              ? `${totalCartQuantity} pizza`
              : `${totalCartQuantity} pizzas`}
          </span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </p>
      )}

      <Link
        className="relative ml-auto flex items-center gap-2 rounded-full p-1 font-semibold transition"
        to="/cart"
      >
        {cart.length > 0 && (
          <span className="bg-alert absolute -top-1 left-2.5 flex size-[1.1rem] animate-bounce items-center justify-center rounded-full text-sm text-black">
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
