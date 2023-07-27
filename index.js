document.querySelector("#neptune").onclick = function() {
	set_planet_description("neptune", "102.41", "6,254.00", "24,764.00", "11.27", "60,189.00", "16.11", "5.45", "14");
}

document.querySelector("#uranus").onclick = function() {
	set_planet_description("uranus", "86.81", "6,833.00", "25,559.00", "9.01", "30,685.4", "17.24", "6.79", "27");
}

document.querySelector("#saturn").onclick = function() {
	set_planet_description("saturn", "568.32", "82,713.00", "60,268.00", "11.19", "10,759.22", "10.66", "9.67", "83");
}

document.querySelector("#jupiter").onclick = function() {
	set_planet_description("jupiter", "1,898.13", "143,128.00", "71,492.00", "25.92", "4,332.589.00", "9.92", "13.06", "92");
}

document.querySelector("#mars").onclick = function() {
	set_planet_description("mars", "0.64", "16.31", "3396.20", "3.73", "686.98", "24.62", "24.08", "2");
}

document.querySelector("#earth").onclick = function() {
	set_planet_description("earth", "5.97", "108.32", "6378.13", "9.82", "365.26", "23.93", "29.78", "1");
}

document.querySelector("#venus").onclick = function() {
	set_planet_description("venus", "4.87", "92.84", "6051.80", "8.87", "224.70", "5832.60", "35.02", "0");
}

document.querySelector("#mercury").onclick = function() {
	set_planet_description("mercury", "0.33", "6.08", "2440.50", "3.70", "87.97", "1407.60", "47.36", "0");
}

document.querySelector("#sun").onclick = function() {
	set_planet_description("sun", "1,988,500.00", "1,412,000.00", "695,700.00", "274.00", "undefined", "609.12", "undefined", "undefined");
}

function set_planet_description(planet_name, mass, volume, radius, gravity, orbit_period, rotation_period, orbital_velocity, natural_satellites) {
	
	document.querySelector("#planet_name").innerText = planet_name;
	document.querySelector("#mass").innerText = "Mass: " + mass + " 10^24kg";
	document.querySelector("#volume").innerText = "Volume: " + volume + " km^3";
	document.querySelector("#radius").innerText = "Radius: " + radius + " km";
	document.querySelector("#gravity").innerText = "Gravity: " + gravity + " m/s^2";
	document.querySelector("#orbit_period").innerText = "Orbit Period: " + orbit_period + " days";
	document.querySelector("#rotation_period").innerText = "Rotation Period: " + rotation_period + " hours";
	document.querySelector("#orbital_velocity").innerText = "Orbital Velocity: " + orbital_velocity + " km/s";
	document.querySelector("#natural_satellites").innerText = "Number of Natural Satellites: " + natural_satellites;	
}
