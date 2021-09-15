import "./App.css";
import CityDropdown from './Components/Header/CitySelect'
import WeatherCard from './Components/WeatherCard/Card'
import { WeatherProvider } from './context/WeatherContext'

function App() {
    return (
        <WeatherProvider>
            <div className="App">
                <div>
                    <h1 className="title">
                        TÜRKİYE <br /> HAVA DURUMU <br /> 12 GÜNLÜK TAHMİNİ{" "}
                    </h1>{" "}
                    <CityDropdown />
                    <WeatherCard />
                </div>{" "}
            </div>{" "}
        </WeatherProvider>
    );
}

export default App;
