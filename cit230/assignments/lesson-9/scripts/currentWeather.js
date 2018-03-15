//The current weather string, e.g., Partly Cloudy, from conditions.
//The current temperature in Fahrenheit from conditions.
//The current wind speed in miles per hour from conditions.
//The image icon representing the current weather from conditions.
//The text description forecast for the most current period in Fahrenheit, e.g., Partly cloudy. Lows overnight in the upper 70s.


'use strict';
jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/c9e984e1026221f7/forecast/conditions/q/MN/Franklin.json",
  dataType : "jsonp",
  success : function(parsed_json) {
    var weather = parsed_json["weather"];
    var temp_f = parsed_json['conditions']['current_observation']['temp_f'];
    var wind_mph = parsed_json['conditions']['current_observation']['wind_mph'];
    var icon = parsed_json['conditions']['current_observation']['icon'];
    var forecast = parsed_json['conditions']['current_observation']['forecast'];
        document.getElementById('weather').innerHTML = weather;
        document.getElementById("temp").innerHTML = temp_f;
        document.getElementById("wind").innerHTML = wind_mph;
        document.getElementById("icon").innerHTML = icon;
        document.getElementById("forecast").innerHTML = forcast;
  }
  });
});
