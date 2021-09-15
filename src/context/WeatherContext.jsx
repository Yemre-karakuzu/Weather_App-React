import { createContext, useContext, useState, useEffect } from 'react'
import { getWeather } from '../Lib/service'

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState("İzmir")
    const [apiDay, setApiDay] = useState("7")
    const [ctiyWeatherData, setCtiyWeatherData] = useState([])

    useEffect(() => {
        (async () => {
            const weatherData = await getWeather(city, apiDay)
            console.log(weatherData)
            setCtiyWeatherData(weatherData.list)
        })()
    }, [city, apiDay])

    const values = {
        city,
        setCity,
        apiDay,
        setApiDay,
        ctiyWeatherData
    };

    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    );
};

export const useWeather = () => useContext(WeatherContext);
