const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e471e9547fmshecf102988c16502p1a1b74jsn4defbf5b19a1',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather =(city)=>{
    cityName.innerHTML=city
    console.log(cityName)
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {


        console.log(response)

        temp.innerHTML = response.temp
        temp1.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed1.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunrise1.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}
 submit.addEventListener("click",(e)=>{
    e.preventDefault()      // reloading not happens
    getWeather(city.value)
 })