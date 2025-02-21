import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUsername } from "../user/userSlice";
import EmptyCart from "./EmptyCart";
import { FaArrowLeft } from "react-icons/fa6";

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mx-auto my-12 h-full max-w-[40rem] px-4">
      <LinkButton to={"/menu"}>
        {" "}
        <Button type="secondarySmall" icon={<FaArrowLeft />}>
          {" "}
          Back to menu{" "}
        </Button>{" "}
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3">
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-4">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>

        <Button onClick={handleClearCart} type="secondary">
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
