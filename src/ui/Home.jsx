import { useSelector } from "react-redux";
import InputUser from "../features/user/InputUser";
import Button from "./Button";

function Home() {
  const user = useSelector((state) => state.user);

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

        {user.username === "" ? (
          <InputUser />
        ) : (
          <Button to="/menu" type="primary">
            Continue ordering, {user.username}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
