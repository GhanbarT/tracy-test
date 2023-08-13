import { Answer } from "@/types/Question";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { FC } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
interface ResultProps {
  answers: Array<Answer["value"]>;
}

const Result: FC<ResultProps> = ({ answers }) => {
  const series = [
    {
      name: "Net Profit",
      data: answers,
    },
  ];
  const options: ApexOptions = {
    chart: {
      height: 350,
      width: "100%",
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
  };

  return (
    <div className="w-full">
      <Chart series={series} options={options} type="bar" height={350} />
    </div>
  );
};

export default Result;
