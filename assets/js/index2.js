let countryinfo = document.querySelector(".countryDetailes .container");
let backbtn = document.querySelector(".btn-back")
let namecount = JSON.parse(localStorage.getItem("countryName"))
console.log(namecount)
getCountrydetails(namecount)
function getCountrydetails(name) {
     console.log(name)
     fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
     .then(res=>res.json())
     .then((data)=>{
          data.forEach(country => {
               let countryDiv
               countryDiv += `
               <div class="countryInfos">
               <div class="country-image">
                   <img src="${country.flags.png}" alt="${country.name.common}">
               </div>
               <div class="country-info">
                   <div class="countryName">${country.name.common}</div>
                   <div class="country-details">
                       <div>
                           <div>Native Name: <span class="nativeName">Belgie</span></div>
                           <div>Population: <span class="population">122268436373</span></div>
                           <div>Region: <span class="region">Europe</span></div>
                           <div>Sub Region: <span class="subRegion">Western Europe</span></div>
                       </div>
                       <div>
                           <div>Capital: <span class="nativeName">Brusels</span></div>
                           <div>Currencies: <span class="currencies">Euro</span></div>
                           <div>Languages: bla, bla, bla</div>
                       </div>
                   </div>
                   <div class="borders">
                       <div>
                           Border Countries:
                       </div>
                       <div class="borders-btns">
                           <button class="btn">France</button>
                           <button class="btn">Germany</button>
                           <button class="btn">Spain</button>
                       </div>
                   </div>
               </div>
           </div>
            `; 
            countryinfo.innerHTML=countryDiv
          });

          
     })
}
