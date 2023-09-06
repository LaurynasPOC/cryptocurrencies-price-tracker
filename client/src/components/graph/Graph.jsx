import React, { useState, useEffect } from "react";
import axios from "axios";
import { SectionWrapper, Container } from "../wrappers";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { Loader, LoaderContainer } from "../Loader";
import { Button, H3 } from "./styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const Graph = () => {
  const [data, setData] = useState([]);
  const { symbol } = useParams();
  const dataRageOptions = ["1d", "7d", "1m", "3m", "1y"];
  const [prevOption, setPrevOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState("1d");

  const handleCandlesData = async (symbol, timeframe, values) => {
    setData([]);
    await axios
      .get(`http://localhost:4000/data/${symbol}/USDT/${timeframe}`)
      .then((resp) => setData(resp.data.slice(values)))
      .catch((err) =>
        console.error(err, "error while getting cryptocurrency graph data")
      );
  };
  useEffect(() => {
    handleCandlesData(symbol, "5m", -288);
  }, [symbol]);

  const chartData = {
    labels: data.map(() => ""),
    datasets: [
      {
        label: `${symbol} Price`,
        data: data.map((d) => d[1]),
        borderColor: "rgba(53, 162, 235, 1)",
        fill: true,
        pointRadius: 0,
        pointHitRadius: 0,
      },
    ],
  };

  const handleDataRange = (option) => {
    if (option === prevOption) return;
    setSelectedOption(option);
    setPrevOption(option);
    switch (option) {
      case "1d":
        handleCandlesData(symbol, "5m", -288);
        break;
      case "7d":
        handleCandlesData(symbol, "30m", -336);
        break;
      case "1m":
        handleCandlesData(symbol, "6h", -124);
        break;
      case "3m":
        handleCandlesData(symbol, "12h", -186);
        break;
      case "1y":
        handleCandlesData(symbol, "1d", -365);
        break;
      default:
        break;
    }
    setData([]);
  };

  return (
    <SectionWrapper>
      <Container>
        <H3>{symbol} Price</H3>
        {data.length > 0 ? (
          <Line data={chartData} />
        ) : (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
        <div>
          {dataRageOptions.map((option) => (
            <Button
              key={option}
              isActive={selectedOption === option}
              onClick={() => handleDataRange(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Graph;
