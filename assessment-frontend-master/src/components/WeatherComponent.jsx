import Cloudy from "../icons/cloudy.svg"
import Rain from "../icons/rain.svg"


const WeatherComponent = ({temperature, unit, location, conditionName, upcoming}) => {


    return <div className="weatherComponent">
        <div>
            <span>
                {/* requires an extra component */}
                {conditionName === "Cloudy" && <img src={Cloudy} alt={Cloudy}/>}
                {conditionName === "Rain" && <img src={Rain} alt={Rain}/>}

            </span>
            <div>


                <span>{temperature}{unit}</span>

                <div>
                    {conditionName}

                </div>
            </div>

        </div>
        <span className="location">{location}</span>
        <div className="upcomingDiv">
            {upcoming.map((i, index) => {
                return <span className="weatherUpc" key={index}>
                    <span>
                        {/* requires an extra component */}
                        {i.conditionName === "Cloudy" && <img src={Cloudy} alt={Cloudy}/>}
                        {i.conditionName === "Rain" && <img src={Rain} alt={Rain}/>}

                    </span>

                    <i>{i.day}</i>
                </span>
            })}
        </div>
    </div>
}
export default WeatherComponent;
