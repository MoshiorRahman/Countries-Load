const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    console.log(countries)
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country)
        const div = document.createElement('div');
        div.classList.add('country')
        const h2 = document.createElement('h2');
        h2.style.color = "indigo"
        h2.innerText = `name:${country.name}`;
        div.appendChild(h2);
        const h3 = document.createElement('h3');
        h3.style.color = "BlueViolet";
        h3.innerText = `Capital:${country.capital}`;
        div.appendChild(h3)
        const h4 = document.createElement('h4');
        h4.style.color = "Crimson";
        h4.innerText = `Language:${country.languages.length}`
        div.appendChild(h4);

        countriesDiv.appendChild(div);
    });
}