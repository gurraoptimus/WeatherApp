const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const Weatherbox = document.querySelector('.Weather-box');
const Weatherdetails = document.querySelector('.Weather-details');

search.addEventListener("click", ()=>{
    const APIKey = "";
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;
    
    fetch ("https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={APIKey}").then(response => response.json()).then(json=>{
        const image=document.querySelector('.Weather-box img');
        const temperature=document.querySelector('.Weather-box .temperature');
        const description=document.querySelector('.Weather-box .description');
        const humidity=document.querySelector('.Weather-details .humidity span');
        const wind=document.querySelector('.Weather-details .wind span');

        switch (json.Weather[1].main) {
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
        };
    });
});