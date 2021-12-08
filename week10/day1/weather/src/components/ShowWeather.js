
import React , {useState , useEffect} from 'react';
import { getWeatherData} from '../components/ApiWeather'


function ShowWeather (props){

    const {infoValue} = props;
    const [city , setCity]= useState('tel aviv')
    const [weatherData , setWeather]= useState(null)

    useEffect(()=>{
        getData()
      
      }, [infoValue])


    const getData = async ()=>{
        if(infoValue.length <= 0){
            const dataWeather = await getWeatherData(city)
            setWeather(dataWeather)
            console.log('11111',dataWeather);
            
        }else{
            const dataWeather = await getWeatherData(infoValue)
            console.log('222222',dataWeather);
            setWeather(dataWeather)
        }
        
    }
     
    return(
        <>
        <div>
        <h1>{weatherData.name} , {weatherData.sys.country}  </h1>
         {weatherData !==null ?(
            <img  src={`https://api.openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt='icon' />
         
         ):(<div></div>)} 
         <h2>{weatherData.weather[0].description}</h2>
         <h3>{weatherData.main.temp.toFixed(1)}&#8451;</h3>
       </div>
    
        </>
    )


}

export default ShowWeather