const userInput = process.argv.slice(2)

class Weather {
  constructor(name, region, country, temp, time) {
    this.name = name;
    this.region = region;
    this.country = country;
    this.temp = temp;
    this.time = time;
  }
}

const fetchWeather = async () => {
    if (userInput) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=159d9ac7c6ba4ef4903150342250502&q=${userInput}&aqi=yes`);
    const data = await response.json();
    const weather = await new Weather(data.location.name,data.location.region,data.location.country,data.current.temp_c,data.location.localtime)
    return weather
  } catch (error) {
    console.log(error);
  }
} else {
    console.log('Invalid userInput');
}
};
const weatherData = await fetchWeather();
console.log(weatherData);
