import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

import { useSelector } from "react-redux";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const user = useSelector((state) => state.user.username);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <main className="mx-auto max-w-3xl">
        {/* <h1>Content</h1> */}
        <Outlet />
      </main>

      {user && <CartOverview />}
    </div>
  );
}

export default AppLayout;
