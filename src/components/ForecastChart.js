import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const ForecastChart= ({forecastInfo}) => {
  
  const minDate = forecastInfo.daily[0].dt;
  const maxDate = forecastInfo.daily[forecastInfo.daily.length - 1].dt;

  const parseData = () => {
    let averageTemp = [];
    let maxTemp = [];
    let minTemp = [];
    let data = [];

    forecastInfo.daily.forEach(element => {
      let date = new Date(element.dt * 1000)
      averageTemp.push(
        {
          x: date.toLocaleDateString('en-US').toString(),
          y: (element.temp.eve - 273.15).toFixed(2)
        },
      );
      maxTemp.push(
        {
          x: date.toLocaleDateString('en-US').toString(),
          y: (element.temp.max - 273.15).toFixed(2)
        },
      );
      minTemp.push(
        {
          x: date.toLocaleDateString('en-US').toString(),
          y: (element.temp.min - 273.15).toFixed(2)
        },
      );
    });

    averageTemp = removeDuplicates(averageTemp).slice(0,5);
    maxTemp = removeDuplicates(maxTemp).slice(0,5);
    minTemp = removeDuplicates(minTemp).slice(0,5);

    data.push(
      {name: "Average Temp", data: averageTemp},
      {name: "Max Temp", data: maxTemp},
      {name: "Min Temp", data: minTemp}
    );
    
    setchartOptions({...chartOptions, series: data});
  };

  function removeDuplicates(tempData) {
    var result = [];
    var lookupObject = {};

    for (let i in tempData) {
      if (lookupObject[tempData[i]['x']] === undefined) {
        result.push(tempData[i]);
      }
      lookupObject[tempData[i]['x']] = tempData[i];
    }
    return result;
  }

  useEffect(() => {
    parseData();
  }, [forecastInfo])
  

  const [chartOptions, setchartOptions]= useState({
    series: [],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Forecast for the next 5 days',
        align: 'left'
      },
      xaxis: {
        type:  'datetime',
        min: new Date(minDate * 1000).toLocaleDateString('en-US'),
        max: new Date(maxDate * 1000).toLocaleDateString('en-US'),
      }
    },
  });

  return (
    <Chart
      options= {chartOptions.options}
      series= {chartOptions.series}
    />
  );
}
export default ForecastChart;