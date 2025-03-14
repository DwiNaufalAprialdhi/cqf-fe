import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface SplineProps {
      categories: string[];
      series: { name: string; data: number[] }[];
}

export default function Spline({ categories, series }: SplineProps) {
      const chartOptions: ApexOptions = {
            chart: {
                  type: "area",
                  zoom: { enabled: false },
            },
            stroke: {
                  curve: "smooth",
            },
            dataLabels: { enabled: false },
            xaxis: {
                  categories,
            },
            colors: ["#389ED9", "#D82525"], // Blue & Red
            legend: { position: "top" },
      };

      return (
            <div className="flex flex-col items-center w-full">
                  <Chart options={chartOptions} series={series} type="area" height={337} className="w-full" />
            </div>
      );
}
