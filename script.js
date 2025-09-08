const form = document.getElementById('weatherForm');
const result = document.getElementById('weatherResult');

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'a857a01a93ffb807ba0a65968ea03cdc';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

    try {
        const res = await fetch(url);
        if(!res.ok) throw new Error('Kota tidak ditemukan');
        const data = await res.json();
        result.innerHTML = `
            <h2 class='text-xl font-bold'>${data.name}</h2>
            <p>${data.weather[0].description}</p>
            <p>🌡️ ${data.main.temp}°C</p>
        `;
    } catch (err){
        result.innerHTML = `<p class='text-red-500'>⚠️ ${err.message}</p>`;
    }
});