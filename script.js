const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const Weatherbox = document.querySelector('.Weather-box');
const Weatherdetails = document.querySelector('.Weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener("click", ()=>{
    const APIKey = "";
    const city = document.querySelector('.search-box input').value;

    if (city =='')
        return;
    
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`),then(response => response.json()),then(json=>{
        
    if(json.cod=="404"){
            container.style.height="400px";
            Weatherbox.classList.remove("active")
            Weatherdetails.classList.remove("active")
            error404.classList.add("active")
            return;
        }
        container.style.height="555px";
        Weatherbox.classList.add("active")
        Weatherdetails.classList.add("active")
        error404.classList.remove("active")

        const image = document.querySelector('.Weather-box img');
        const temperature = document.querySelector('.Weather-box .temperature');
        const description = document.querySelector('.Weather-box .description');
        const humidity = document.querySelector('.Weather-details .humidity span');
        const wind = document.querySelector('.Weather-details .wind span');

        switch (json.Weather[0].main) {
            case 'Clear':
                image.src="images/clear.png";
                break;
        
            case 'Rain':
                image.src="images/rain.png";
                break;

            case 'Snow':
                image.src="images/snow.png";
                break;

            case 'Clouds':
                image.src="images/Clouds.png";
                break;

           case 'Mist':
                image.src="images/mist.png";
                break;

            case 'Haze':
                image.src="images/mist.png";
                break;

            default:
                image.src="images/Cloud.png";
        }
        temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML=`${json.Weather[0].description}`;
        humidity.innerHTML=`${json.main.humidity}%`;
        wind.innerHTML=`${json.wind.speed}Km/h`;
    });
});