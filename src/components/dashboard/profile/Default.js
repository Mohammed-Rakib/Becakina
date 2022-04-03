import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineVerified } from "react-icons/ai";
import Chart from "./Chart";

const Default = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user.user);

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

  // quantity
  const quantity = orders?.reduce((total, item) => total + item.quantity, 0);
  const totalCosts = orders?.reduce(
    (total, item) => total + item.productId.price * item.quantity,
    0
  );
  return (
    <div className="h-full  w-full bg-blue-50 mt-2">
      {/* dashboard statistics */}
      <div className="md:grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 py-10">
        <div className="text-center bg-white px-6 py-3 my-2 rounded">
          <h1>Total Orders</h1>
          <div className=" px-3 py-3 rounded">
            <p className="py-2">Products: {orders?.length}</p>
            <p>Quantity: {quantity} </p>
          </div>
        </div>
        {/* total costs */}
        <div className="text-center bg-white px-6 py-3 my-3  rounded ">
          <h1>Total Costs</h1>
          <div className=" px-3 py-3 rounded">
            <p className="py-2"> Orders: {orders?.length + quantity}</p>
            <p>Costs: $ {totalCosts} </p>
          </div>
        </div>
        {/* payment method */}
        <div className="text-center bg-white px-6 py-3 my-3  rounded  ">
          <h1>Payment Methods</h1>
          <div className=" px-3 py-2 rounded">
            <p className="py-2"> Verified</p>
            <p className="flex justify-center">
              <AiOutlineVerified className="text-3xl text-green-500" />
            </p>
          </div>
        </div>
      </div>

      {/* // latest order */}
      <div className="lg:w-6/12 w-11/12 mx-auto">
        <Chart />
      </div>
    </div>
  );
};

export default Default;
