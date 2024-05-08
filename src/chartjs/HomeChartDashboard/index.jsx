import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import sourceData from "../Data/sourceData.json";
import data2023 from "../Data/data2023.json"

export default function HomeChartDashboard (){
  return (
    <> 
    <div className="bg-gray-100 rounded-xl content-center  text-center">
      <div className=" ">
      <Line 
          data={ 
            {
            labels: data2023.map((data) => data.label), 
            datasets:[
              { borderRadius:5,
                label: "Revenue",
                data: data2023.map((data) => data.revenue)
                },
              { borderRadius:5,
                label: "Cost",
                data: data2023.map((data) => data.cost)
              },
            ],
          }}
        />
      </div>
    </div>
    </>
  );
}