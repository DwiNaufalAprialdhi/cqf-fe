import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface UpdateDonutProps {
      data: number[];
}

export default function UpdateDonut({ data }: UpdateDonutProps) {
      return (
            <div className="flex flex-col items-center">
                  <Chart
                        options={{
                              chart: {
                                    type: "donut",
                              },
                              labels: ["Terbebaskan", "Belum Terbebaskan"],
                              colors: ["#389ED9", "#D82525"], // Blue for Terbebaskan, Red for Belum Terbebaskan
                              legend: {
                                    position: "bottom",
                                    offsetY: 0,
                                    height: 50,
                              },
                        }}
                        series={data}
                        type="donut"
                        width="380"
                  />
            </div>
      );
}
