import { useState } from "react";

export default function useWeather() {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    function fetchWeather(url) {
        setError(null);
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    setError(null);
                    response.json().then((data) => {
                        setData(data);
                    });
                } else {
                    setData(null);
                    if (response.status === 400) {
                        setError("You need to write the name of the city");
                    } else if (response.status === 404) {
                        setError("This city doesn't exist");
                    } else if (response.status === 401) {
                        setError("Your key doesnt work");
                    }
                }
            })
            .catch((e) => {
                console.log(e);
                setData(null);
                setError("Unknown error");
            });
    }
    return {
        error,
        data,
        fetchWeather,
    };
}
