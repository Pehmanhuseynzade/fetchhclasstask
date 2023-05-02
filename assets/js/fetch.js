let country = document.querySelector(".country");
let countriesContainer = document.querySelector(".countries .container");

function getCountryInfo() {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((country,i) => {
        countriesContainer.innerHTML += `
          <div class="country">
          <a class="country-image" onclick=moreDetails(${i}) >
              <img src="${country.flags.png}" class="country-img" alt="">
          </a>
          <div class="country-info">
              <div><span class="country-name">${country.name.common}</span></div>
              <div>Population: <span class="country-population">${country.population}</span></div>
              <div>Region: <span class="country-region">${country.region}</span></div>
              <div>Capital: <span class="country-capital">${country.capital}</span></div>
          </div>
          </div>
       `;
      });
    });
}
getCountryInfo();

function moreDetails(index){
     fetch("https://restcountries.com/v3.1/all")
     .then(res=>res.json())
     .then(data=>{
          console.log(data[index].name.common)
          localStorage.setItem("countryName",JSON.stringify(data[index].name.common))
          window.location = "./index2.html"
     })
}
