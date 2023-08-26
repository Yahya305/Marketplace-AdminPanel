import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import { ImUser } from "react-icons/im";
import { BiUpArrowAlt } from "react-icons/bi";
import { AiOutlineDollar } from "react-icons/ai";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LiaCoinsSolid } from "react-icons/lia";
import { IoIosUnlock } from "react-icons/io";
import { FiList } from "react-icons/fi";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { MdConnectedTv } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import "./index.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function index() {
  const [dataPeriod, setDataPeriod] = useState(12);
  const [barWeek, setBarWeek] = useState(0);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const dayGraph = useRef();
  const weekGraph = useRef();
  const monthGraph = useRef();

  const orgData1 = [
    243, 785, 1365, 1409, 5000, 8000, 11000, 17000, 22000, 20000, 25000, 29000,
    34000, 31000, 39000, 42000, 44000,
  ];
  const orgData2 = [
    203, 735, 1165, 1209, 4400, 7000, 9000, 13000, 20000, 15000, 21000, 23000,
    28000, 30000, 35000, 38000, 40000,
  ];

  const orgLabel = [
    "June 21",
    "July 21",
    "Aug 21",
    "Sept 21",
    "Oct 21",
    "Nov 21",
    "Dec 21",
    "Jan 22",
    "Feb 22",
    "March 22",
    "Apr 22",
    "May 22",
  ];
  const labelsBar = ["M", "T", "W", "T", "F", "S", "S"];

  const adjustLabels = (period) => {
    return orgLabel.slice(orgLabel.length - period);
  };
  const adjustData = (period, dataSet) => {
    return dataSet.slice(dataSet.length - period);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Visualizing 2021 - 2022",
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            return "$" + value;
          },
        },
      },
    },
  };
  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Profit ${barWeek === 0 ? "This Week" : "Last Week"}`,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            return "$" + value / 1000 + "K";
          },
        },
      },
    },
  };

  const data = {
    labels: adjustLabels(dataPeriod),
    datasets: [
      {
        label: "Revenue",
        data: adjustData(dataPeriod, orgData1),
        borderColor: "#FFC107",
        backgroundColor: "transparent",
        pointBorderColor: "grey",
      },
      {
        label: "Total Sales",
        data: adjustData(dataPeriod, orgData2),
        borderColor: "grey",
        backgroundColor: "transparent",
        pointBorderColor: "grey",
      },
    ],
  };
  const dataBar = {
    labels: labelsBar,
    datasets: [
      {
        label: "Revenue",
        data:
          barWeek === 0
            ? [1409, 5000, 8000, 11000, 6000, 7000, 4000]
            : [1109, 3000, 5000, 6000, 10000, 8000, 5000],
        backgroundColor: "#FFC107",
      },
      {
        label: "Sales",
        data:
          barWeek === 0
            ? [1109, 3000, 5000, 8000, 5000, 4500, 2500]
            : [1009, 1800, 3500, 4000, 8000, 7000, 3800],
        backgroundColor: "grey",
      },
    ],
  };
  const dataDoughnut = {
    labels: ["Grey", "Orange", "Pastel Orange", "Yellow", "Black"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        // backgroundColor: [
        //   'rgba(255, 99, 132, 0.2)',
        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(255, 206, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        //   'rgba(255, 159, 64, 0.2)',
        // ],
        backgroundColor: ["#A9A9A9", "#eba134", "#FFAD5A", "#FFC107", "grey"],
        borderColor: ["#1a1918", "#f75707", "red", "red", "black"],
        borderWidth: 1,
      },
    ],
  };

  const handleRadio = (e, period) => {
    let arr = [dayGraph.current, weekGraph.current, monthGraph.current];
    let i = arr.indexOf(e.target);
    arr.forEach((element, idx) => {
      if (idx != i) {
        element.classList.remove("active");
      } else {
        element.classList.add("active");
      }
    });
    setDataPeriod(period);
  };

  return (
    <div id="main-dash">
      <Navbar
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
      />
      <div id="dash-content" className="m-3">
        <div id="stat-cards">
          <div className="stat-card">
            <div className="d-flex align-items-center gap-2">
              <ImUser />
              <div>Buyers</div>
            </div>
            <div className="fw-bold fs-5">$3.456K</div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-secondary">total buyers</small>
              <div style={{ color: "#00b300" }} className="d-flex align-items-center">
                0.43%
                <BiUpArrowAlt />
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="d-flex align-items-center gap-2">
              <ImUser />
              <div>Sellers</div>
            </div>
            <div className="fw-bold fs-5">$3.456K</div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-secondary">total sellers</small>
              <div style={{ color: "#00b300" }} className="d-flex align-items-center">
                0.43%
                <BiUpArrowAlt />
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="d-flex align-items-center gap-2">
              <FiList size={25} />
              <div>Listings</div>
            </div>
            <div className="fw-bold fs-5">$3.456K</div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-secondary">total listings</small>
              <div style={{ color: "#00b300" }} className="d-flex align-items-center">
                0.43%
                <BiUpArrowAlt />
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="d-flex align-items-center gap-2">
              <MdConnectedTv size={25} />
              <div>Meetings</div>
            </div>
            <div className="fw-bold fs-5">$3.456K</div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-secondary">meetings arranged</small>
              <div style={{ color: "#00b300" }} className="d-flex align-items-center">
                0.43%
                <BiUpArrowAlt />
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="d-flex align-items-center gap-2">
              <ImUser />
              <div>Exits</div>
            </div>
            <div className="fw-bold fs-5">$3.456K</div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-secondary">total sellers</small>
              <div style={{ color: "#00b300" }} className="d-flex align-items-center">
                0.43%
                <BiUpArrowAlt />
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="d-flex align-items-center gap-2">
              <IoIosUnlock size={25} />
              <div>Unlocks</div>
            </div>
            <div className="fw-bold fs-5">$3.456K</div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-secondary">total listings</small>
              <div style={{ color: "#00b300" }} className="d-flex align-items-center">
                0.43%
                <BiUpArrowAlt />
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="d-flex align-items-center gap-2">
              <LiaCoinsSolid size={25} />
              <div>Total Top-up Credits</div>
            </div>
            <div className="fw-bold fs-5">$3.456K</div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-secondary">meetings arranged</small>
              <div style={{ color: "#00b300" }} className="d-flex align-items-center">
                0.43%
                <BiUpArrowAlt />
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="d-flex align-items-center gap-2">
              <FaHandHoldingDollar size={20} />
              <div>M&A's Worth</div>
            </div>
            <div className="fw-bold fs-5">$3.456K</div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-secondary">meetings arranged</small>
              <div style={{ color: "#00b300" }} className="d-flex align-items-center">
                0.43%
                <BiUpArrowAlt />
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="d-flex align-items-center gap-2">
              <AiOutlineDollar size={20} />
              <div>Earnings</div>
            </div>
            <div className="fw-bold fs-5">$3.456K</div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-secondary">meetings arranged</small>
              <div style={{ color: "#00b300" }} className="d-flex align-items-center">
                0.43%
                <BiUpArrowAlt />
              </div>
            </div>
          </div>
        </div>
        <div id="graph-stats">
          <div className="line-graph">
            <div className="btn-group">
              <button ref={dayGraph} onClick={(e) => handleRadio(e, 2)}>
                1 Month
              </button>
              <button ref={weekGraph} onClick={(e) => handleRadio(e, 6)}>
                6 Months
              </button>
              <button
                ref={monthGraph}
                onClick={(e) => handleRadio(e, 12)}
                className="active"
              >
                12 Months
              </button>
            </div>
            <Line options={options} data={data} />
          </div>
          <div className="vert-bar-graph">
            <DropdownButton
              variant="none"
              id="dropdown-basic-button"
              title={barWeek === 0 ? "This Week" : "Last Week"}
              className="d-flex"
            >
              <Dropdown.Item onClick={() => setBarWeek(0)}>
                This Week
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setBarWeek(1)}>
                Last Week
              </Dropdown.Item>
            </DropdownButton>
            <Bar options={optionsBar} data={dataBar} />
          </div>
          <div className="dash-pie">
            <Doughnut data={dataDoughnut} />
          </div>
          <div className="dash-map">
            <VectorMap
              map={worldMill}
              style={{ width: "100%", height: window.innerWidth<=500?"250px":"400px" }}
              // series={{
              //   regions: [
              //     {
              //       values: { PK: "#4169E1", TR: "#4169E1", CA: "#4169E1" }, // highlight Pakistan, Turkey, and Canada
              //       attribute: "fill",
              //     },
              //   ],
              // }}
            />
          </div>
        </div>
        <div className="dash-fields">
          <h3>Top Channels</h3>
          <div className="fields">
            <div className="fields-item fields-header">Source</div>
            <div className="fields-item fields-header">Visitors</div>
            <div className="fields-item fields-header">Revenues</div>
            <div className="fields-item fields-header">Sales</div>
            <div className="fields-item fields-header">Conversion</div>
            <div className="fields-item fw-semibold">Google</div>
            <div className="fields-item">3.5K</div>
            <div
              className="fields-item fw-semibold"
              style={{ color: "#45ff45" }}
            >
              $5,671
            </div>
            <div className="fields-item">590</div>
            <div className="fields-item">4.8%</div>
            <div className="fields-item fw-semibold">Facebook</div>
            <div className="fields-item">3.5K</div>
            <div
              className="fields-item fw-semibold"
              style={{ color: "#45ff45" }}
            >
              $5,671
            </div>
            <div className="fields-item">590</div>
            <div className="fields-item">4.8%</div>
            <div className="fields-item fw-semibold">Twitter</div>
            <div className="fields-item">3.5K</div>
            <div
              className="fields-item fw-semibold"
              style={{ color: "#45ff45" }}
            >
              $5,671
            </div>
            <div className="fields-item">590</div>
            <div className="fields-item">4.8%</div>
            <div className="fields-item fw-semibold">GitHub</div>
            <div className="fields-item">3.5K</div>
            <div
              className="fields-item fw-semibold"
              style={{ color: "#45ff45" }}
            >
              $5,671
            </div>
            <div className="fields-item">590</div>
            <div className="fields-item">4.8%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
