import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import CartOverview from "../cart/CartOverview";

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);

  return (
    <>
    <ul className="divide-y mx-auto max-w-[40rem] divide-gray2 px-4 my-12">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}

      
    </ul>
    <CartOverview />
    </>
  );
}
// eslint-disable-next-line
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
