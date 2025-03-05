import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="font-primary">
      {isLoading && <Loader />}

      <Header />
      <main className="mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
