function showlocationDetails(event) {
    event.preventDefault();

    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    const apiKey = 'YOUR_API_KEY'; //YOUR_API_KEY
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl)  // 
        .then(response => response.json())
        .then(data => {
            const locationInfo = document.getElementById('locationInfo');
            locationInfo.innerHTML = `<h2>Location at ${data.coord.lat} and ${data.coord.lon}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>  
                                <p>Weather: ${data.weather[0].description}</p>`;
        })

        .catch(error => {
            console.error('Error fetching location:', error);
            const locationInfo = document.getElementById('locationInfo');
            locationInfo.innerHTML = `<p>Failed to fetch location. Please try again.</p>`;
        });
}

document.getElementById('Location').addEventListener('submit', showlocationDetails);