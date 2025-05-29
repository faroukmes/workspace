import { useState } from "react";
import useWeather from "./hooks/useWeather";
const getBackgroundColor = (weather) => {
    switch (weather) {
        case "Clear":
            return "from-orange-300 to-yellow-300";
        case "Clouds":
            return "from-gray-300 to-blue-300";
        case "Rain":
            return "from-blue-300 to-indigo-500";
        case "Snow":
            return "from-white to-blue-200";
        case "Thunderstorm":
            return "from-gray-700 to-black";
        default:
            return "from-gray-300 to-blue-300";
    }
};
const getIcon = (weather) => {
    switch (weather) {
        case "Clear":
            return "icon-[wi--day-sunny]";
        case "Clouds":
            return "icon-[wi--cloudy]";
        case "Rain":
            return "icon-[wi--rain]";
        case "Snow":
            return "icon-[wi--snow]";
        case "Thunderstorm":
            return "icon-[wi--thunderstorm]";
        default:
            return "icon-[bx--search]";
    }
};

export default function WeatherCard() {
    const [cityToSearch, setCityToSearch] = useState("");
    const { data, error, fetchWeather } = useWeather();
    return (
        <div className="flex flex-col gap-4 w-full max-w-md">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=${
                        import.meta.env.VITE_API_KEY
                    }&units=metric`;
                    fetchWeather(url);
                }}
                className="w-full flex gap-2"
            >
                <input
                    type="text"
                    value={cityToSearch}
                    onChange={(e) => {
                        setCityToSearch(e.target.value);
                    }}
                    className="w-full bg-white rounded-2xl focus:outline-1 outline-offset-2 px-4 py-1 focus:outline-cyan-400"
                />
                <button
                    type="submit"
                    className="flex shrink-0 bg-white rounded-full w-12 h-12 justify-center items-center"
                >
                    <span className="icon-[bx--search] w-6 h-6"></span>
                </button>
            </form>
            <p className="text-red-500 text-center">{error}</p>
            <div
                className={`rounded-xl shadow-xl w-full py-4 px-8 bg-gradient-to-br min-h-96 flex flex-col justify-center items-center gap-4 ${getBackgroundColor(
                    data ? data.weather[0].main : ""
                )}`}
            >
                <span
                    className={`${getIcon(
                        data ? data.weather[0].main : ""
                    )} w-18 h-18 text-white`}
                ></span>
                <h3 className="text-white font-bold text-2xl">
                    {data ? `${data.name}, ${data.sys.country}` : null}
                </h3>
                <p className="text-white">
                    {data ? `${data.weather[0].description}` : null}
                </p>
                <p className="text-white font-bold text-6xl">
                    {data ? data.main.temp : null}
                </p>
                <div className="w-full grid grid-cols-2 mt-4 text-white">
                    <div className="flex gap-2 text-lg">
                        <span className="icon-[wi--humidity] w-6 h-6"></span>
                        <p>{data ? data.main.humidity : null} %</p>
                    </div>
                    <div className="flex gap-2 text-lg">
                        <span className="icon-[wi--strong-wind] w-6 h-6"></span>
                        <p> {data ? "" : null} km/s</p>
                    </div>
                    <div className="flex gap-2 text-lg">
                        <span className="icon-[wi--barometer] w-6 h-6"></span>
                        <p>{data ? "" : null} hPa</p>
                    </div>
                    <div className="flex gap-2 text-lg">
                        <span className="icon-[wi--cloudy] w-6 h-6"></span>
                        <p>{data ? "" : null} %</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
