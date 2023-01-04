var weather = {
    getWeather: function (city) {
       fetch ('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=d51a7d7a338fdaa0f3c38e1ad0d03117&units=imperial') 
       .then((response) => {
           if (response.ok) {
             return response.json();
           } else {
             throw new Error('NETWORK RESPONSE ERROR');
           }
         })
         .then(data => {
           console.log(data);
           this.displayWeather(data)
         })
         .catch((error) => console.error('FETCH ERROR:', error));
       
},
    displayWeather: function(data) {
       var locationCity = data.city.name
       var currentDate = data.list[0].dt_txt
       var locationCountry = data.city.country 
       var temp = data.list[0].main.temp;
       var conditions = data.list[1].weather[0].description;
       var minTemp = data.list[0].main.temp_min;
       var maxTemp = data.list[0].main.temp_max;
       var windSpeed = data.list[3].wind.speed;
       var icon = data.list[1].weather[0].icon
       console.log(conditions);
       document.querySelector('.date1').innerText = 'Date: ' + currentDate;
       document.querySelector('.location1').innerText = locationCity + ', ' + locationCountry;
       document.querySelector('.tempature1').innerText = temp + '°F'; 
       document.querySelector('.weatherConditions1').innerText = conditions;
       document.querySelector('.minTemp1').innerText = minTemp + '°F';
       document.querySelector('.maxTemp1').innerText = maxTemp + '°F';
       document.querySelector('.windSpeed1').innerText = windSpeed + 'mph';
       document.querySelector('img').src = 'http://openweathermap.org/img/wn/' + icon + "@2x.png";
       document.querySelector('div.hide').classList.remove('hide')

    },
    search: function() {
        // var search = document.querySelector('.search');
        this.getWeather(document.querySelector('input').value);
        console.log('working')
    }
}

document.querySelector('.searchButton').addEventListener('click', function () {
  weather.search()
})