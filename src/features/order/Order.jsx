// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { formatCurrency } from "../../utils/helpers";
import OrderItem from "../order/OrderItem";
import { FaRegCopy, FaArrowLeft } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";

function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const { id, priority, priorityPrice, orderPrice, cart } = order;

  const handleCopy = () => {
    navigator.clipboard.writeText(id);
    toast.success("Order ID copied");
  };

  return (
    <div className="mx-auto my-12 max-w-[40rem] px-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="flex items-center text-xl font-semibold">
          Order number: {id}{" "}
          <button
            onClick={handleCopy}
            className="hover: ml-3 inline-flex gap-2 rounded-full border border-gray4 px-3 py-1 text-sm transition hover:bg-gray1"
          >
            <span>
              <FaRegCopy className="inline-flex" />
            </span>
            Copy
          </button>
        </h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-md bg-red-400 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-white">
              Priority
            </span>
          )}
        </div>
      </div>

      <ul className="mt-4 border-t border-gray2">
        {cart.map((item, index) => (
          <OrderItem item={item} key={index} />
        ))}
      </ul>

      <div className="space-y-23 mb-5 bg-gray1 px-6 py-5">
        <p className="text-sm font-medium text-gray5">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-gray5">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      <LinkButton to={"/menu"}>
        <Button type="primary" icon={<FaArrowLeft />}>
          Back to menu
        </Button>
      </LinkButton>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
