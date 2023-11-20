const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const Weatherbox = document.querySelector('.Weather-box');
const Weatherdetails = document.querySelector('.Weather-details');

search.addEventListener("click", ()=>{
    const APIKey = "";
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={APIKey}`).then(response=> response.json()).then(json=>{
        const image=document.querySelector()
    });
});