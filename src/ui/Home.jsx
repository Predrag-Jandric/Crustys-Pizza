import { useSelector } from "react-redux";
import InputUser from "../features/user/InputUser";
import Button from "./Button";
import pizzaImage from "../assets/pizza.png";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div
      className="relative m-0 h-[90vh] w-screen bg-cover bg-center p-0 text-center"
      style={{ backgroundImage: `url(${pizzaImage})` }}
    >
      <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="mb-8 px-5 pt-20 font-loud text-5xl font-semibold text-primary">
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
