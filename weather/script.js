const buton=document.querySelector(".btn");
const input=document.querySelector(".search-bar");

const cityName=document.querySelector(".city");
const cityTemp=document.querySelector(".temp");
const image=document.querySelector(".icon");
const dis=document.querySelector(".description");
const hum=document.querySelector(".humidity");
const sp=document.querySelector(".wind");



async function getdata(name){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=892905debc4b4fbaa82173136233003&q=${name}&aqi=yes`);
    return promise.json();
}

buton.addEventListener("click",async()=>{
    const value=input.value;
    const result=await getdata(value);
    cityName.innerText=`${result.location.name}, ${result.location.region} -${result.location.country}`;
    cityTemp.innerText=`${result.current.temp_c}°C `;
    // image.innerHTML=`<img src=${result.current.condition.icon}alt="" class="icon" />`
    dis.innerText=`${result.current.condition.text}`;
    hum.innerText=`Humidity : ${result.current.humidity}% `;
    sp.innerText=`Wind-Speed : ${result.current.wind_kph}km/h`;
})