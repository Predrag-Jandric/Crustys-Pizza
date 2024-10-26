import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user.username)


  return (
    <header className="bg-primary flex items-center justify-between uppercase px-4 py-3 border-b border-gray1 sm:px-6">
      <Link className="tracking-widest" to="/">Company name</Link>

      {user && <SearchOrder />} 

      <Username />
    </header>
  )
}

export default Header
