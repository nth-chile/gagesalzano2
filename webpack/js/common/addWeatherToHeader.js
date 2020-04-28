export default function addWeatherToHeader() {
  const appid = '74735b702c4617a2e6cabc145c497c33'
  const URL = `http://api.openweathermap.org/data/2.5/weather?id=5110302&appid=${appid}&units=imperial`
  $.get(URL, res => {
    if (res.cod !== 200 || !res.weather || !res.weather.length || !res.main) {
      console.log('Could not get weather.')
      return null
    }

    const temp = Math.round(res.main.temp)
    const { id, description } = res.weather[0]

    const color = codeToColor(id)
    const desc = description.toLowerCase()
    const str = `${temp}° and ${desc}`

    const elt = document.querySelector('#weather')
    elt.innerHTML = `
      <span class="weather__dot" style="background-color: ${color}"></span>
      <span>${str}</span>
    `
  })
}

function codeToColor(code) {
  switch (true) {
    case (code < 300): return 'rgb(152, 105, 213)'; // Thunderstorm
    case (code < 500): return 'rgb(61, 126, 195)'; // Drizzle
    case (code < 600): return 'rgb(22, 70, 123)'; // Rain
    case (code < 700): return 'rgb(208, 231, 241)'; // Snow
    case (code < 800): return 'rgb(217, 223, 229)'; // Atmosphere
    case (code === 800): return 'rgb(142, 195, 248)'; // Clear
    default: return 'rgb(255, 255, 255)'; // Clouds
  }
}

