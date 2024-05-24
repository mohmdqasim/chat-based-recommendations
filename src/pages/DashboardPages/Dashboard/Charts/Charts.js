import React from "react";
import Charts from "react-apexcharts";
import { dataSeries } from "./DateSeries";
import Dropdown from "react-bootstrap/Dropdown";
import './Charts.scss'
export default function Chart() {

  var ts2 = 1484418600000;
  var dates = [];
  for (var i = 0; i < 120; i++) {
    ts2 = ts2 + 86400000;
    var innerArr = [ts2, dataSeries[1][i].value];
    dates.push(innerArr);
  }
  const state = {
    series: [
      {
        name: "",
        data: dates
      }
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 250,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: "zoom"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        colors: ['#4169e10f'],
        width: 5
      },
      // colors: ["#1D57EE"],
      markers: {
        size: 0
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              color: "#4169e129" // Start color
            },
            {
              offset: 100,
              color: "#4169e10f" // Middle color
            }
          ]
        }
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            const formattedValue = (val / 1000000).toFixed(0);
    return `${formattedValue}K`;
          }
        },
      },
      xaxis: {
        type: "datetime"
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          }
        }
      }
    }
  };
  return (
    <React.Fragment>
      <div id="chart">
      <div className="card">
      <div className="dropdowns">
       <div className="sale">
        <h4>Sale</h4>
        <p><img src="/images/arrowL.svg" alt="arrowL" /> 2022 <img src="/images/arrowL.svg" alt="arrowL" /></p>
       </div>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <div className="date">
                  <p>7 Days</p>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="">10 Days</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
      <Charts
          options={state.options}
          series={state.series}
          type="area"
          height={250}
        
        />
        <div className="months">
          <p>This Month</p>
          <p>Last Month</p>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}
