import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import CartOverview from "../cart/CartOverview";
import Button from "../../ui/Button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Menu() {
  const menu = useLoaderData();

  const itemsPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(menu.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMenu = menu.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <ul className="mx-auto my-12 max-w-[40rem] divide-y divide-gray2 px-4">
        {paginatedMenu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>

      {/* pagination */}
      <div className="mb-12 mt-6 flex items-center justify-center gap-4">
        <Button
          type="primarySmall"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack className="size-5" />
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          className=""
          type="primarySmall"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward className="size-5" />
        </Button>
      </div>

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
