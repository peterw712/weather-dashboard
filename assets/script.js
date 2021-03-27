fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=Toronto&appid=4688cb83327d28a4576f040e25dbb668'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });