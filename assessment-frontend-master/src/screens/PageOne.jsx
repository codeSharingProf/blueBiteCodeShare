import Image from "../components/Image";
import {useEffect, useState} from "react";
import WeatherComponent from "../components/WeatherComponent";
import Button from "../components/Button";


const PageOne = () => {
    const page = window.location.pathname; // went with pathnames instead of :ids because didn't want to create if statements in app.tsx
    const [pageInfo, setPageInfo] = useState(null);
    const [isHidden, setHidden] = useState(false);

    useEffect(() => {
        async function fetchPageInfo() {
            const responsePage = await fetch(`http://localhost:3030/page${page}`);// .env in real project
            const dataPage = await responsePage.json();
            if (!dataPage.error) { // making sure such id exists

                const lat = dataPage.data.components[1].options.lat;
                const lon = dataPage.data.components[1].options.lon;
                const responseWeather = await fetch(`http://localhost:3030/integration/weather?lat=${lat}&lon=${lon}`); // .env in a real project
                const dataWeather = await responseWeather.json();
                return {dataPage, dataWeather};
            }
            throw new Error(dataPage.error); // not found


        }

        fetchPageInfo().then(data => {

            setPageInfo(data);

        }).catch(err => {


            //depending on the error - setting state with the response, not fount for example,
            setPageInfo(false); // in case of network error =  expecting an error with details from the server
        })

    }, [page])

    function handleClick(value) {
        setHidden(value);
    }

    return (
        <div>

            {pageInfo === false && <h1>Error network | not found | etc</h1>}
            {pageInfo &&
                <>
                    <Button setHidden={handleClick} isHidden={isHidden}></Button>
                    {!isHidden && <Image
                        id={pageInfo?.dataPage?.data.components[0].id}
                        alt={pageInfo?.dataPage?.data.components[0].options.alt}
                        src={pageInfo?.dataPage?.data.components[0].options.src}/>}

                    <WeatherComponent
                        conditionName={pageInfo.dataWeather.data.conditionName}
                        location={pageInfo.dataWeather.data.location}
                        temperature={pageInfo.dataWeather.data.temperature}
                        unit={pageInfo.dataWeather.data.unit}
                        upcoming={pageInfo.dataWeather.data.upcomming}
                    />
                </>

            }
        </div>
    )
}
export default PageOne;
