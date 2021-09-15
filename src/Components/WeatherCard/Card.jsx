import { useWeather } from '../../context/WeatherContext'
import styles from "./WeatherCard.module.css"
import { dayname as dayName } from '../../Lib/dayName'
let day = new Date();
const dateNow = new Date()

function Card() {
    const { ctiyWeatherData } = useWeather();
    console.log("vity", ctiyWeatherData)
    return (
        <div className={styles.container}>
            {
                ctiyWeatherData.map((item, key) => {
                    return <div className={styles.weathersCard} key={key}>
                        <div>
                            <h2 className={styles.daytitle}>{dayName[day.getDay()]}</h2>
                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather png" />
                            <div className={styles.weathersTemp}>
                                <div>
                                    <span>Sabah</span>
                                    <span className={styles.maxmin}>{(item.temp.max - 273.15).toFixed(1)}°</span>
                                </div>
                                <div>
                                    <span>Akşam</span>
                                    <span className={styles.maxmin}>{(item.temp.min - 273.15).toFixed(1)}°</span>
                                </div>
                            </div>
                            {(() => { day.setDate(day.getDate() + 1) })()}
                        </div>
                    </div>
                })
            }
            {(() => { day.setDate(dateNow.getDate()) })()}
        </div>
    )
}
export default Card