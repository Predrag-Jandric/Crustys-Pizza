import { Link, useNavigate } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { removeUser } from "../features/user/userSlice";
import { toast } from "react-hot-toast";
import logo from "../assets/logo.png";
import { GiShoppingCart } from "react-icons/gi";
import { getCart } from "../features/cart/cartSlice";

function Header() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    Swal.fire({
      title: "You will be signed out!",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeUser());
        toast.success("User removed successfully!");
        navigate("/");
      }
    });
  };

  return (
    <header className="flex h-[10vh] items-center justify-between border-b border-gray1 bg-primary uppercase">
      <Link
        className="flex flex-shrink-0 items-center gap-3 px-4 py-1 tracking-widest transition-colors"
        to="/"
      >
        <img className="h-14 w-14" src={logo} alt="logo" />
        <span className="hidden font-loud text-2xl md:block">
          Crusty&apos;s
        </span>
      </Link>

      {user.username && <SearchOrder />}

      {user.username && (
        <div className="flex items-center px-2 hover:cursor-pointer">
          <Link
            className="relative flex items-center gap-2 rounded-full  p-1 font-semibold transition hover:bg-primaryHover"
            to="/cart"
          >
            {cart.length > 0 && (
              <span className="absolute -top-1 left-2.5 flex size-[1.1rem] animate-bounce items-center justify-center rounded-full bg-red-400 text-sm text-black">
                {cart.length}
              </span>
            )}
            <GiShoppingCart className="size-7" />
          </Link>
          <button
            onClick={handleSignOut}
            className="p-2 text-lg underline hover:no-underline"
          >
            {user.username}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
