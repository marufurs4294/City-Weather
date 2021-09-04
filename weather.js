const API_Key = `c0c48772abaeccb2a37543b8658c7289`;

const searchTemperature = () => {
    const cityName = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))


}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
     setInnerText("city", temperature.name)
    console.log(temperature);
     setInnerText("temp", temperature.main.temp)
     setInnerText("condition", temperature.weather[0].main)
    // Set Weather Icon

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const icon = document.getElementById('weather-icon');
    icon.setAttribute('src',url);

}