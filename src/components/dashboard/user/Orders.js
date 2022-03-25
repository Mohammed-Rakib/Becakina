import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user.user);

  console.log(orders);

  useEffect(() => {
    setLoading(true);
    const fetchOrders = async () => {
      const res = await fetch(
        `https://still-eyrie-85728.herokuapp.com/api/orders/user/${user._id}`
      );
      const data = await res.json();
      setLoading(false);
      setOrders(data);
    };
    fetchOrders();
  }, [user._id]);
  return (
    <div className="px-3 py-1">
      {orders.length ? (
        <>
          <h1>Total Orders: {orders.length} </h1>
          <div className="2xl:overflow-x-hidden overflow-x-scroll bg-white py-5  px-2">
            <table className="min-w-full">
              {/* table head */}
              <thead className="bg-gray-50 ">
                <tr>
                  <th
                    scope="col"
                    className="py-3 pr-3 text-xs font-bold tracking-wider text-left text-gray-700 uppercase "
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="py-3 pr-3 text-xs font-bold tracking-wider text-left text-gray-700 uppercase "
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="py-3 pr-3 text-xs font-bold tracking-wider text-left text-gray-700 uppercase "
                  >
                    transectionId
                  </th>
                  <th
                    scope="col"
                    className="py-3 pr-3 text-xs font-bold tracking-wider text-left text-gray-700 uppercase "
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="py-3 pr-3 text-xs font-bold tracking-wider text-left text-gray-700 uppercase "
                  >
                    Order time
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* table body */}
                {orders?.map((order) => (
                  <>
                    <tr className="bg-white border-b ">
                      <td className="py-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap ">
                        {(order?.productId.name).slice(0, 30)}...
                      </td>
                      <td className="py-4 pr-3 text-sm text-gray-500 whitespace-nowrap ">
                        {order.quantity}
                      </td>
                      <td className="py-4 pr-3 text-sm text-gray-500 whitespace-nowrap ">
                        {order.transectionId}
                      </td>
                      <td className="py-4 pr-3 text-sm text-gray-500 whitespace-nowrap ">
                        {order.orderStatus}
                      </td>
                      <td className="py-4 pr-3 text-sm text-gray-500 whitespace-nowrap ">
                        {new Date(order.createdAt).toDateString()}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className=" flex items-center justify-center h-46 text-red-500">
          <h1>You have not ordered anything</h1>
        </div>
      )}
    </div>
  );
};

export default Orders;
