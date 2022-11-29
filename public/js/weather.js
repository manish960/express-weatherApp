const city = document.getElementById("city-input");
const checkBtn = document.getElementById("search-click");


// const location = document.querySelector('.sfw-normal')



const getWeather = async (event) => {
    event.preventDefault();

    if(city.value===''){
        let card = document.getElementById("card");
        card.innerHTML= ``

   alert('please fill weather input field')
    }else{
       try{
        // let Radio1 = document.getElementById("inlineRadio1");
        let units = ''
        var radio = document.getElementsByName('tempRadio');
        for(let i of radio){
            console.log('ss',i.value)
            if(i.checked){
                
              units = i.value
            }
        }
        // console.log('radio',radio[''])

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=${units}&appid=d6728c790fd8e915eb7fffa6c3de829c`
          );
          const data = await response.json();
        
          console.log('data', data);
          let location = document.getElementById("show-city");
          let temp = document.getElementById("show-temp");
          let feels = document.getElementById("show-feel");
          let max = document.getElementById("max");
          let min = document.getElementById("min");
          let weather = document.getElementById("weather-des");
          location.innerHTML= `${data.name},${data.sys.country}`
          temp.innerHTML= `${data.main.temp}°C`
          feels.innerHTML= `${data.main.feels_like}°C`
          max.innerHTML= `${data.main.temp_max}°C`
          min.innerHTML= `${data.main.temp_min}°C`
          weather.innerHTML= `${data.weather[0].main}`


       }catch{
        alert('something went wrong')

       }
    }
  
};

checkBtn.addEventListener("click",getWeather);

addEventListener("load", getWeather);
