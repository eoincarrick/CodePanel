import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import "../charts/style/PolarAreaChart.css";

function PolarAreaChart() {
  //For generating number from 0 to 99.
  let numbers = [];
  let i = 0;
  while (i < 100) {
    numbers.push(i);
    i++;
  }
  function randomAdd() {
    //For generating number from 99 to 399.
    let numbers = [];
    let i = 99;
    while (i < 399) {
      numbers.push(i);
      i++;
    }

    //Using the method below to select the generated number.
    const int = Math.floor(Math.random() * numbers.length);
    return numbers[int];
  }

  function randomSubtract() {
    //For generating number from 59 to 299.
    let numbers = [];
    let i = 59;
    while (i < 299) {
      numbers.push(i);
      i++;
    }
    //Using the method below to select the generated number.
    const int = Math.floor(Math.random() * numbers.length);
    return numbers[int];
  }

  //Adding, Multiplying, Subtracting, Dividing the generated number to created a random generated numbers.
  const BitBucket = Math.floor(randomAdd() + randomSubtract());
  const GitHub = Math.floor((randomAdd() * randomSubtract()) / numbers.length);
  const GitLab = Math.floor(randomAdd() / randomSubtract()) + numbers.length;
  const StackOverflow = Math.floor(
    (randomAdd() % randomSubtract()) * 8 + numbers.length
  );
  const Codeswar = Math.floor(randomAdd() + randomSubtract());

  //Chart Data
  const data = {
    labels: ["BitBucket", "GitHub", "GitLab", "Stack Overflow", "Codeswar"],
    datasets: [
      {
        label: "# of Votes",
        data: [BitBucket, GitHub, GitLab, StackOverflow, Codeswar],
        backgroundColor: [
          "#2684ff",
          "#24292f",
          "#e2452c",
          "#e99653",
          "#f1867e",
        ],
        borderWidth: 1,
      },
    ],
  };

  const option = {
    borderColor: "#ffF",
    hoverBackgroundColor: "#ff9400",
    hoverBorderJoinStyle: "miter",
  };

  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

  return (
    <div className="polarArea">
      <PolarArea data={data} options={option} />
    </div>
  );
}

export default PolarAreaChart;
