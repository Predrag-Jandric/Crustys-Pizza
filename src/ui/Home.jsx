import { useSelector } from "react-redux";
import InputUser from "../features/user/InputUser";
import Button from "./Button";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div className="relative m-0 h-[90vh] w-screen bg-hero bg-cover bg-center p-0 text-center">
      <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="mb-8 font-loud px-5 font- pt-20 text-4xl font-semibold text-primary">
          Crusty&apos;s has the tastiest pizza.
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
