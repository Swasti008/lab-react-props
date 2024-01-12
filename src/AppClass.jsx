import { Component } from "react";
import "./App.css"
import Data from "./components/DataComponent"


export default class AppClass extends Component {
  // code here
  render() {
    let dataContainer = Data();
    return <div className="fourimages">
      <h1>Kalvium gallary (AppClass.jsx)</h1>
      {dataContainer.map((element) => (
        <img src={element.img} alt={element.id} className="eachElephant" />
      ))}
    </div>
  }
}
