import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import sourceData from "../Data/sourceData.json";

export default function SalesChartDashboard (){
  return (
    <> 
    <div className="bg-gray-100  rounded-xl content-center text-center">
      <div className="">Chart 2
        <Bar 
          data={ 
            {
            labels: sourceData.map((data) => data.label), 
            datasets:[
              { borderRadius:5,
              label: "2023",
              data:[10,30,40,50],
              },
              { borderRadius:5,
                label: "2024",
                data:[50,100,200,300],
                },
            ],
          }}
        />
      </div>
    </div>
    </>
  );
}