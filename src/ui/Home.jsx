import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  // bg-hero bg-cover bg-center

  return (
    <div className="h-[100%] bg-red-100 bg-cover text-center">
      <div>
        <h1 className="mb-8 pt-20 text-xl font-semibold md:text-3xl">
          The best pizza.
          <br />
          <span className="text-primary">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        {username === "" ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
