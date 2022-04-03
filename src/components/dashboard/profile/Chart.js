import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "My Orders",
    },
  },
};

const Chart = () => {
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

  const labels = orders?.map((order) => order.productId.name.slice(0, 8));
  const quantity = orders?.map((order) => order.quantity);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Products Quantity",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: quantity,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default Chart;
