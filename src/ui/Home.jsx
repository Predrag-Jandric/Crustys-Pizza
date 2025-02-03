import { useSelector } from "react-redux";
import InputUser from "../features/user/InputUser";
import Button from "./Button";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div className="m-0 h-[90vh] w-screen bg-hero bg-cover bg-center p-0 text-center">
      <h1 className="mb-8 pt-20 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-primary">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {user.username === "" ? (
        <InputUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {user.username}
        </Button>
      )}
    </div>
  );
}

export default Home;
