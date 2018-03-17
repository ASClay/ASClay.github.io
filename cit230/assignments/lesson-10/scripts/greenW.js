var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.wunderground.com/api/c9e984e1026221f7/conditions/q/TX/Greenville.json', true);

weatherObject.send();

weatherObject.onload = function () {
    var townWeather = JSON.parse(weatherObject.responseText);
    console.log(townWeather);
    document.getElementById('currentObs').innerHTML = townWeather.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = townWeather.current_observation.temp_f;
    document.getElementById('windSpeed').innerHTML = townWeather.current_observation.wind_string;
    document.getElementById('humid').innerHTML = townWeather.current_observation.relative_humidity;
    document.getElementById('w_icon').src = townWeather.current_observation.icon_url;
}



var forecastObject = new XMLHttpRequest();
forecastObject.open('GET', 'https://api.wunderground.com/api/c9e984e1026221f7/forecast/q/TX/Greenville.json', true);

forecastObject.send();

forecastObject.onload = function () {
    var townForecast = JSON.parse(forecastObject.responseText);
    console.log(townForecast);
    document.getElementById('forecast1').innerHTML = townForecast.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('w_icon1').src = townForecast.forecast.txt_forecast.forecastday["0"].icon_url;
    
    document.getElementById('forecast2').innerHTML = townForecast.forecast.txt_forecast.forecastday["1"].fcttext;
    document.getElementById('w_icon2').src = townForecast.forecast.txt_forecast.forecastday["1"].icon_url;
    
    document.getElementById('forecast3').innerHTML = townForecast.forecast.txt_forecast.forecastday["2"].fcttext;
    document.getElementById('w_icon3').src = townForecast.forecast.txt_forecast.forecastday["2"].icon_url;
    
    document.getElementById('forecast4').innerHTML = townForecast.forecast.txt_forecast.forecastday["3"].fcttext;
    document.getElementById('w_icon4').src = townForecast.forecast.txt_forecast.forecastday["3"].icon_url;
    
    document.getElementById('forecast5').innerHTML = townForecast.forecast.txt_forecast.forecastday["4"].fcttext;
    document.getElementById('w_icon5').src = townForecast.forecast.txt_forecast.forecastday["4"].icon_url;
    
    
}