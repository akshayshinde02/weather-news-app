function GetInfo() {

    var newName = document.getElementById("city");

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=3258698786a73127a55fe09feb6ab73b')
// https://api.openweathermap.org/data/2.5/forecast?q=london&appid=3258698786a73127a55fe09feb6ab73b
.then(response => response.json())
.then(data => {

    temp6.innerHTML =  Number(data.list[4].main.temp - 273.15).toFixed(1)+ "°";
    temp7.innerHTML =  Number(data.list[4].main.temp - 273.15).toFixed(1)+ "°";
    temp8.innerHTML =  Number(data.list[4].main.temp - 273.15).toFixed(1)+ "°";
    temp9.innerHTML =  Number(data.list[4].main.temp - 273.15).toFixed(1)+ "°";
    temp10.innerHTML =  Number(data.list[4].main.temp - 273.15).toFixed(1)+ "°";

    
    temp11.innerHTML =  Number(data.list[0].main.temp_min - 273.15).toFixed(1)+ "°";
    temp12.innerHTML =  Number(data.list[1].main.temp_min - 273.15).toFixed(1)+ "°";
    temp13.innerHTML =  Number(data.list[2].main.temp_min - 273.15).toFixed(1)+ "°";
    temp14.innerHTML =  Number(data.list[3].main.temp_min - 273.15).toFixed(1)+ "°";
    temp15.innerHTML =  Number(data.list[4].main.temp_min - 273.15).toFixed(1)+ "°";

    temp21.innerHTML =  Number(data.list[0].main.temp_max - 273.15).toFixed(1)+ "°";
    temp22.innerHTML =  Number(data.list[1].main.temp_max - 273.15).toFixed(1)+ "°";
    temp23.innerHTML =  Number(data.list[2].main.temp_max - 273.15).toFixed(1)+ "°";
    temp24.innerHTML =  Number(data.list[3].main.temp_max - 273.15).toFixed(1)+ "°";
    temp25.innerHTML =  Number(data.list[4].main.temp_max - 273.15).toFixed(1)+ "°";

    temp31.innerHTML =  Number(data.list[0].main.humidity);
    temp32.innerHTML =  Number(data.list[1].main.humidity);
    temp33.innerHTML =  Number(data.list[2].main.humidity);
    temp34.innerHTML =  Number(data.list[3].main.humidity);
    temp35.innerHTML =  Number(data.list[4].main.humidity);

    temp41.innerHTML =  Number(data.list[0].wind.speed).toFixed(2);
    temp42.innerHTML =  Number(data.list[1].wind.speed).toFixed(2);
    temp43.innerHTML =  Number(data.list[2].wind.speed).toFixed(2);
    temp44.innerHTML =  Number(data.list[3].wind.speed).toFixed(2);
    temp45.innerHTML =  Number(data.list[4].wind.speed).toFixed(2);

    
})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}
