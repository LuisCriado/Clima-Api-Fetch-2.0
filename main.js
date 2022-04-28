const input = document.querySelector('input');
const button = document.querySelector('button');
const ciudadContainer = document.querySelector('.ciudad-container');
let ubicaccion = document.getElementById("ubicaccion");
let temperaturaValor =  document.getElementById("temperatura-valor");
let temperaturaDescripcion =  document.getElementById("temperatura-descripcion");
let vientoVelocidad =  document.getElementById("viento-velocidad");
let iconoAnimado =document.getElementById("icono-animado");


button.addEventListener('click', (e) => {
    e.preventDefault()
    traerCiudar(input.value)
});
    

const traerCiudar = (ciudad) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&units=metric&appid=d967a4c52a1e50d5115e5dd32bece1c3`)
    .then((res) => res.json())
    .then((data) => {
        let temp = Math.round(data.main.temp);
        temperaturaValor.textContent = `${temp} °C`;
        console.log(data.weather[0].description);
        let desc = data.weather[0].description
        temperaturaDescripcion.textContent = desc.toUpperCase();

        
        ubicaccion.textContent = data.name;

        let velocidad = data.wind.speed;

        vientoVelocidad.textContent = `${velocidad} km/h`;

        switch (data.weather[0].main) {
            case 'Clear':
                iconoAnimado.src = 'animated/day.svg'
                
                break;
            case 'Clouds':
                iconoAnimado.src = 'animated/cloudy.svg'

                break;
            case 'Rain':
                iconoAnimado.src = 'animated/rain.svg'
                break;
            case 'Snow':
                iconoAnimado.src = 'animated/snow.svg'
                break;
            case 'Thunderstorm':
                iconoAnimado.src = 'animated/thunder.svg'
                break;
            case 'Drizzle':
                iconoAnimado.src = 'animated/drizzle.svg'
                break;

        
            default:
                break;
        }

        

        
    })
    .catch(error => {
        console.log(error);
    })
}





    
    
