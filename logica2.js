function convertirTemperatura()
{
let gradosCelsius = parseInt(document.getElementById("TemperaturaCelcius").value);

if (!isNaN(gradosCelsius)) {
    let gradosKelvin = gradosCelsius + 273.15;
    let gradosFahrenheit = ((gradosCelsius * (9 / 5)) + 32);

    let mostrarTems = `La temperatura en kelvin es: ${gradosKelvin} y en Fahrenheit ${gradosFahrenheit}`;

    document.getElementById("resultado").textContent = mostrarTems;
}else{  
    alert("Simbolo invalido");
}
}



