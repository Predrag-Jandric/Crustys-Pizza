import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

function Header() {
  const user = useSelector((state) => state.user.username);

  return (
    <header className="border-gray1 flex items-center justify-between border-b bg-primary px-2 uppercase">
      <Link
        className="flex items-center gap-3 px-4 py-1 tracking-widest transition-colors hover:bg-yellow-500"
        to="/"
      >
        <img className="h-14 w-14" src={logo} alt="" />
        <span className="font-logo text-2xl">Slice</span>
      </Link>

      {user && <SearchOrder />}

      <Username />
    </header>
  );
}

export default Header;
