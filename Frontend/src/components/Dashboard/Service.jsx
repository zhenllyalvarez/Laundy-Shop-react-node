import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Illustration from "../../assets/img/undraw_game_day_ucx9.svg";

const Service = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex gap-12 mt-12 justify-center">
      <div className="w-full h-96 lg:max-w-2xl sm:max-w-2xl border shadow rounded">
        <Line className="" data={data} options={options} />
      </div>
      <div className="hidden lg:block w-full lg:max-w-2xl items-center">
        <img className="w-full sm:h-80" src={Illustration} alt="" />
      </div>
    </div>
  );
};

export default Service;
