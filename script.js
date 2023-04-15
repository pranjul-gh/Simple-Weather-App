const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")


// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getWeather = async (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    // console.log(data)
    return showWeather(data)
}

const showWeather = (data)=>{
    console.log(data)
    if(data.cod==="404"){
        weather.innerHTML = `<h3>${data.message}</h3>`
        return
    }
    weather.innerHTML = `
    <div>
        <img src="src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"" alt="">
    </div>
    <div>
        <h2> ${data.main.temp} ℃</h2>
        <h4>${data.weather[0].main}</h4>
    </div>
    `
}


form.addEventListener("submit", (event)=>{
    // console.log("search value",search.value)
    getWeather(search.value)
    event.preventDefault()
})