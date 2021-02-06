import { useState, useEffect, useCallback } from 'react';
import Chart from 'react-apexcharts';

const ForecastChart= ({forecastInfo}) => {

  const minDate = forecastInfo.daily[0].dt;
  const maxDate = forecastInfo.daily[forecastInfo.daily.length - 1].dt;

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
      markers: {
        size: [6, 6, 6]
      },
      theme: {
        palette: 'palette4' // upto palette10
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
      tooltip: {
        custom: function({series, seriesIndex, dataPointIndex, w}) {
          let maxTemp = series[1][dataPointIndex];
          let averageTemp = series[0][dataPointIndex];
          let minTemp = series[2][dataPointIndex];
          let description = w.config.series[0].data[dataPointIndex].description;
          let urlIconModal = w.config.series[0].data[dataPointIndex].urlIcon;

          return (
            '<div class="card center" style="padding: 20px;">' +
            '<img src ="' + urlIconModal + '" alt = "icon"/>' +
              '<h6 class="center">' + description.toUpperCase() + '</h6><hr/>'+
              '<ul>' +
                '<li class="maxTemp"> <span><strong>Max temp: </strong>' + maxTemp + '&deg;C</span> </li>' +
                '<li class="averageTemp"> <span><strong>Average temp: </strong>'  + averageTemp + '&deg;C</span></li>' +
                '<li class="minTemp"> <span><strong>Min temp: </strong>' + minTemp + '&deg;C</span></li>' +
              '</ul>' +    
            '</div>'
          )
        }
      },
      xaxis: {
        type:  'datetime',
        min: new Date(minDate * 1000).toLocaleDateString('en-US'),
        max: new Date(maxDate * 1000).toLocaleDateString('en-US'),
      }
    },
  });

  const parseData = useCallback(() => {
    let averageTemp = [];
    let maxTemp = [];
    let minTemp = [];
    let data = [];

    forecastInfo.daily.forEach(element => {
      let date = new Date(element.dt * 1000);
      let sumTemps = (element.temp.eve + element.temp.day + element.temp.night + element.temp.morn) - (4 * 273.15);

      averageTemp.push(
        {
          x: date.toLocaleDateString('en-US').toString(),
          y: (sumTemps / 4).toFixed(2),
          description: element.weather[0].description,
          urlIcon: `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
        },
      );
      maxTemp.push(
        {
          x: date.toLocaleDateString('en-US').toString(),
          y: (element.temp.max - 273.15).toFixed(2),
          description: element.weather[0].description,
          urlIcon: `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
        },
      );
      minTemp.push(
        {
          x: date.toLocaleDateString('en-US').toString(),
          y: (element.temp.min - 273.15).toFixed(2),
          description: element.weather[0].description,
          urlIcon: `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
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
  },[forecastInfo, chartOptions]);

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

  useEffect(() =>{
    parseData();
  }, [parseData]);

  return (
    <Chart
      options= {chartOptions.options}
      series= {chartOptions.series}
    />
  );
}
export default ForecastChart;