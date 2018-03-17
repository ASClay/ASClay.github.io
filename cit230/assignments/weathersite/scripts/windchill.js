	function doInputOutput(){
				var tempF = parseFloat(document.getElementById("temperature").value);
				var speed = parseFloat(document.getElementById("windspeed").value);
				 
				document.getElementById("Chill").innerHTML = windChill(tempF, speed).toPrecision(3);
			}
				function windChill(tempF, speed){
					return 35.74 + .6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
				}
			
doInputOutput();