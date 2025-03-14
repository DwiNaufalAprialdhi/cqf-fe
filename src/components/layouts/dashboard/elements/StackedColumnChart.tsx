import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React from "react";

// Load Chart tanpa SSR
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Tipe Props
interface StackedColumnChartProps {
      series: { name: string; data: number[] }[];
      categories: string[];
}

const StackedColumnChart: React.FC<StackedColumnChartProps> = ({ series, categories }) => {
      const options: ApexOptions = {
            chart: {
                  type: "bar",
                  stacked: true, // Menjadikan kolom bertumpuk
            },
            plotOptions: {
                  bar: {
                        horizontal: false,
                  },
            },
            xaxis: {
                  categories: categories, // Menggunakan props categories
            },
            legend: {
                  position: "top",
            },
            fill: {
                  opacity: 1,
            },
      };

      return (
            <div className='w-full grid grid-cols-1 h-[350px] transition_menu'>
                  <div className="w-fulll col-span-1 transition_menu">
                        <Chart options={options} series={series} type="bar" height={350} />
                  </div>
            </div>
      );
};

export default StackedColumnChart;
