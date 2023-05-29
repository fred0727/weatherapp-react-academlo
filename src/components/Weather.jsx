import React, { useState } from "react";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temp";

const icons = {
  "01d": "./images/icons/clearsky-day.svg",
  "02d": "./images/icons/fewclouds-day.svg",
  "03d": "./images/icons/scatteredclouds-day.svg",
  "04d": "./images/icons/brokenclouds-day.svg",
  "09d": "./images/icons/showerrain-day.svg",
  "10d": "./images/icons/rain-day.svg",
  "11d": "./images/icons/thunderstrom-day.svg",
  "13d": "./images/icons/snow-day.svg",
  "50d": "./images/icons/mist-day.svg",
  "01n": "./images/icons/clearsky-night.svg",
  "02n": "./images/icons/fewclouds-night.svg",
  "03n": "./images/icons/scatteredclouds-night.svg",
  "04n": "./images/icons/brokenclouds-night.svg",
  "09n": "./images/icons/showerrain-night.svg",
  "10n": "./images/icons/rain-night.svg",
  "11n": "./images/icons/thunderstrom-night.svg",
  "13n": "./images/icons/snow-night.svg",
  "50n": "./images/icons/mist-night.svg",
};

const Weather = ({ weatherInfo }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const icon = weatherInfo?.weather[0].icon;

  const handleChangeTemp = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <section className="p-5 flex justify-center items-center flex-col gap-5 mt-16 text-text-light dark:text-white">
      <div className="bg-[url('../public/images/rectangle.svg')] dark:bg-[url('../public/images/rectanglenight.svg')] bg-cover bg-center bg-local grid grid-cols-2 px-4 w-[300px] h-[205px] sm:w-[400px] sm:h-[275px]">
        <section className="flex flex-col justify-end w-[150px] sm:w-auto sm:mt-5">
          <h2 className="text-5xl font-light mb-2 sm:text-[4.2rem] sm:mb-5">
            {isCelsius ? (
              <span>
                {kelvinToCelsius(weatherInfo?.main.temp)}{" "}
                <span className="text-4xl sm:text-[2.4rem]">ºC</span>
              </span>
            ) : (
              <span>
                {" "}
                {kelvinToFahrenheit(weatherInfo?.main.temp)}
                <span className="text-4xl sm:text-[2.4rem]"> ºF</span>
              </span>
            )}
          </h2>
          <span className="text-[10px] px-1 sm:text-[0.8rem]">
            Wind {weatherInfo?.wind.speed}m/s
          </span>
          <span className="text-[10px] px-1 sm:text-[0.8rem]">
            Humidity {weatherInfo?.main.humidity}%
          </span>
          <span className="text-[10px] px-1 sm:text-[0.8rem]">
            Pressure {weatherInfo?.main.pressure}p
          </span>
        </section>
        <section className="flex justify-end">
          <img src={icons[icon]} alt="" className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]" />
        </section>
        <section className="flex items-end h-[40px]">
          <h3 className="text-md font-bold px-1 sm:text-lg">
            {weatherInfo?.name}, {weatherInfo?.sys.country}
          </h3>
        </section>
        <section className="font-bold text-xs sm:text-base flex flex-col justify-end items-end h-[40px]">
          <span>{weatherInfo?.weather[0].description}</span>
        </section>
      </div>
      <button
        onClick={handleChangeTemp}
        className="bg-button-light text-white px-5 py-1 sm:py-2 sm:px-7 shadow-md shadow-slate-800/30 rounded-lg mt-10 dark:bg-button-dark"
      >
        Change F / C
      </button>
    </section>
  );
};

export default Weather;
