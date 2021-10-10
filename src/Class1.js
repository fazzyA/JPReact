import './App.css' 
const App = () =>{
let total = 25;
let b = "students"
let arr = [1,2,3,4,5]
let obj = { name:"faiza"}
let cities = ["Karachi","Lahore", "Isl"]
  return (

    <div className="App">
      <h1>React First Class</h1>
      <h3>{`No of ${b} : ${total}`}</h3>
      <p> { 10+3 }</p>
      <p> { obj.name }</p>
      <ul>
        {cities.map((city)=>(
          <li>{city}</li>
        ))}

      </ul>
    </div>
  )
}
export default App