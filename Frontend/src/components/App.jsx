import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import Header from "../components/Header";
import FlightMap from "../components/FlightMap";
import "../assets/styles/global/main.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>

        <div className="main">
          <div className="flex-container">

            <div>
              <FlightMap/>
            </div>

          </div>
        </div>
        
      </div>
    );
  }
}

export default App;