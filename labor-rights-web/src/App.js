import React, { Component } from 'react';
import logo from './logo.svg';
import Verifier from './Verifier.js'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      cropCondition: "100",
      dateTime: new Date(),
      pieceSize: "TBD (set by farm owner)",
      wageRate: "TBD (set by farm owner)",
      checkerSovID: "0xfoo123",
      workerSovID: "0xbar321"
    }
  }

  setCropCondition(event){
    this.setState({cropCondition: event.target.value});
  }

  setCheckerSovID(id){
    this.setState({checkerSovID: id});
  }

  setWorkerSovID(id){
    this.setState({workerSovID: id});
  }

  handleSubmit(){
    console.log("Blockchain here we come")
  }

  fakeHandleSubmit(){
    console.log("Blockchain here we come")
  }

  render() {
    return (
      <div className="App">
        <div className="form-container">
          <header className="header-container">
            <div className="header-container">
              <img src={logo} className="App-logo" alt="logo" />
              <h2 className="header-title"> Right Wage </h2>
            </div>
            <h2 className="header-title"> Admin Portal </h2>
          </header>
        <form>
            <div className="pair-display">
            <label>
              Piece Size:
              <input placeholder={this.state.pieceSize} readOnly/>
            </label>
            <label>
              Wage Rate:
              <input placeholder={this.state.wageRate} readOnly/>
            </label>
            </div>
            <label>
              Crop Condition:
              <select type="text" value={this.state.cropCondition} onChange={this.setCropCondition.bind(this)}>
                <option value="100">Excellent</option>
                <option value="80">Good</option>
                <option value="50">Poor</option>
              </select>
            </label>
            <label>
              Date and Time:
              <input type="text" readOnly style={{width: "500px"}} placeholder={this.state.dateTime}/>
            </label>
    
            <div className="pair-display">
              <Verifier
                stakeHolderName="Checker"
                stakeHolderID={this.state.checkerSovID}
                handleID={this.setCheckerSovID.bind(this)}
              />
              <Verifier
                stakeHolderName="Worker"
                stakeHolderID={this.state.workerSovID}
                handleID={this.setWorkerSovID.bind(this)}
              />
            </div>
            <div id="fake-submit" onClick={this.fakeHandleSubmit.bind(this)}>Submit</div>
            {/* <input type="submit" value="Submit"/> */}
          </form>
        </div>
      </div>
    );
  }
}

export default App;
