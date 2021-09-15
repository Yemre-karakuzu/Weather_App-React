import { useWeather } from '../../context/WeatherContext'
import styles from './SelectBox.module.css'
import { cities as citys } from '../../Lib/city'
import { selectDay as days } from '../../Lib/day'

function CitySelect() {
    const { city, setCity, apiDay, setApiDay } = useWeather(citys[0], days[6]);
    return (
        <div id="section-container" className={styles.container}>
            <select name="days" id="days-select" className={styles.select} value={apiDay} onChange={(e) => { setApiDay(e.target.value) }}>
                {
                    days.map((item, key) => <option key={key} value={item}>{item}</option>)
                }
            </select>
            <select name="cities" id="city-select" className={styles.select} value={city} onChange={(e) => { setCity(e.target.value) }}>
                {
                    citys.map((item, key) => <option key={key} value={item}>{item}</option>)
                }
            </select>
        </div>
    )
}

export default CitySelect