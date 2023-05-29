import "./App.css";
import { BsSearch } from "react-icons/bs";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import Loader from "./components/Loader";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [bgImg, setBgImg] = useState(null);
  const [message, setMessage] = useState(null);
  const API_KEY = "60e56c016314f1968796b9c1c429ee4c";

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    axios
      .get(URL)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.search.value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    setWeatherInfo(null);

    axios
      .get(URL)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => {
        setMessage("City not found");
        setTimeout(() => {
          setMessage("");
          navigator.geolocation.getCurrentPosition(success);
        }, 3000);
      });
  };

  const handleToggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (weatherInfo) {
      setBgImg(weatherInfo?.weather[0].icon);
    }
  }, [weatherInfo]);

  return (
    <main
      className={`min-h-screen w-full font-principal-font bg${bgImg} bg-cover bg-center bg-local`}
    >
      {weatherInfo && (
        <div>
          <header className="grid grid-cols-2 grid-rows-2 pt-5 px-5 gap-4 sm:flex sm:justify-between sm:pt-10 sm:px-10 items-center">
            <h3 className="text-white sm:text-3xl">Weather app</h3>
            <span className="sm:hidden w-full flex justify-end items-center">
              {isDark ? (
                <MdToggleOn
                  className="cursor-pointer text-secondary-dark text-4xl"
                  onClick={handleToggleTheme}
                />
              ) : (
                <MdToggleOff
                  className="cursor-pointer text-skyb-light text-4xl"
                  onClick={handleToggleTheme}
                />
              )}
            </span>
            <form
              onSubmit={handleSubmit}
              className="col-span-2 w-full flex items-center border-cyan-400 rounded-lg bg-secondary-light text-white shadow-white shadow-inner px-5 py-1 dark:bg-secondary-dark dark:shadow-none sm:w-[350px] sm:py-2 lg:w-[550px]"
            >
              <button type="submit">
                <BsSearch className="text-white w-6 px-1 cursor-pointer" />
              </button>
              <input
                id="search"
                type="text"
                placeholder="Busca una ciudad"
                className="w-full bg-transparent text-gray-200 placeholder:text-gray-200 outline-none px-3 text-sm"
              />
            </form>
            <span className="hidden sm:flex w-full justify-end items-center sm:w-auto">
              {isDark ? (
                <MdToggleOn
                  className="cursor-pointer text-secondary-dark text-5xl"
                  onClick={handleToggleTheme}
                />
              ) : (
                <MdToggleOff
                  className="cursor-pointer text-skyb-light text-5xl"
                  onClick={handleToggleTheme}
                />
              )}
            </span>
          </header>
          <Weather weatherInfo={weatherInfo} />
        </div>
      )}
      {!weatherInfo && <Loader message={message} />}
    </main>
  );
}

export default App;
