import { measures } from "@/const/Measures";
import { Measure } from "@/types/Measure";
import { Answer } from "@/types/Question";
import calculateScores from "@/utils/calculateScore";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { FC } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ResultProps {
  answers: Array<Answer["value"]>;
}

const Result: FC<ResultProps> = ({ answers }) => {
  const measurements = React.useMemo(() => {
    return calculateScores(answers, measures);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const EightBasicTypes = React.useMemo(() => {
    let measures: Array<Measure> = [];
    for (const key in measurements) {
      if (measurements[key].order <= 8) {
        measures = [...measures, measurements[key]];
      }
    }
    return measures;
  }, [measurements]);
  const HollandTypes = React.useMemo(() => {
    let measures: Array<Measure> = [];
    for (const key in measurements) {
      if (measurements[key].order >= 23 && measurements[key].order <= 28) {
        measures = [...measures, measurements[key]];
      }
    }
    return measures;
  }, [measurements]);

  const EightBasicTypesSeries = React.useMemo(() => {
    return [
      {
        name: "هشت تیپ پایه",
        data: EightBasicTypes.map(({ name, score }) => {
          return {
            x: name,
            y: score.toFixed(2),
          };
        }),
      },
    ];
  }, [EightBasicTypes]);
  const HollandTypesSeries = React.useMemo(() => {
    return [
      {
        name: "تیپ های هالند",
        data: HollandTypes.map(({ name, score }) => {
          return {
            x: name,
            y: score.toFixed(2),
          };
        }),
      },
    ];
  }, [HollandTypes]);

  const EightBasicTypesOptions: ApexOptions = React.useMemo(() => {
    return {
      chart: {
        height: 300,
        width: 300,
        type: "radar",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        radar: {
          size: 125,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"],
            },
          },
        },
      },
      colors: ["#FF4560"],
      markers: {
        size: 4,
        colors: ["#fff"],
        strokeColor: "#FF4560",
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val;
          },
        },
        style: {
          fontFamily: "vazirmatn",
        },
      },
      xaxis: {
        type: "category",
        labels: {
          style: {
            fontSize: "16px",
            fontFamily: "vazirmatn",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          formatter: (val: any, i: any) => {
            if (i % 2 === 0) {
              return val;
            }
            return "";
          },
        },
      },
    };
  }, []);

  return (
    <div className="w-full grid grid-cols-2" dir="ltr">
      <Chart
        series={EightBasicTypesSeries}
        options={EightBasicTypesOptions}
        type="radar"
      />
      <Chart
        series={HollandTypesSeries}
        options={EightBasicTypesOptions}
        type="radar"
      />
    </div>
  );
};

export default Result;
