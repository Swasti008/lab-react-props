import { Component } from "react";
import "./App.css"


export default class AppClass extends Component {
  // code here
  render() {
    return <div className="fourimages">
      <h1>Kalvium gallary (AppClass.jsx)</h1>
      {this.props.imgSrc.map((element) => (
        <img src={element.img} key={element.id} alt={element.id} className="eachElephant" />
      ))}
    </div>
  }
}
