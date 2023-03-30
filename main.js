import './App.css'

export default function App() {
  async function Weather() {
    const thing = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=2f97d199c272c3b377c099c2235830a5")
    var data = await thing.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
  }
  return (
    <>
    <h1 className="city"> city</h1>
      <h1 className="temp"> temp</h1>
    
    <button onClick={Weather}>update</button>
    </>
    
  )
}
