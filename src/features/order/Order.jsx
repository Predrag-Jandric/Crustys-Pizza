// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { formatCurrency } from "../../utils/helpers";
import OrderItem from "../order/OrderItem";

function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const { id, priority, priorityPrice, orderPrice, cart } = order;

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">Status # {id}</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-md bg-alert2 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-white">
              Priority
            </span>
          )}
        </div>
      </div>

      <ul className="divide-y divide-gray2 border-b border-t">
        {cart.map((item, index) => (
          <OrderItem item={item} key={index} />
        ))}
      </ul>

      <div className="space-y-23 bg-gray1 px-6 py-5">
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
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
