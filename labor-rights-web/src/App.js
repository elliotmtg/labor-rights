import React, { Component } from 'react';
import Verifier from './Verifier.js';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      cropCondition: "100",
      dateTime: new Date(),
      pieceSize: "25",
      wageRate: "1",
      checkerSovID: "",
      workerSovID: "",
      checkerDecision: "",
      workerDecision: "",
      validated: "unvalidated",
      fireAway: ""
    }
  }

  componentDidMount(){
  }

  setCropCondition(event){
    this.setState({cropCondition: event.target.value});
  }

  handleID(who, id){
    if(who==="Worker"){
      this.setState({workerSovID: id}, ()=>{
      })
    }
    if(who==="Checker"){
      this.setState({checkerSovID: id}, ()=>{
      })
    }
  }

  handleAgreeDisagree(who, decision){
    if(who==="Worker"){
      this.setState({workerDecision: decision}, ()=>{
        console.log(who + " says: I " + this.state.workerDecision)
        this.validateDecisions();
      })
    }
    if(who==="Checker"){
      this.setState({checkerDecision: decision}, ()=>{
        console.log(who + " says: I " + this.state.checkerDecision)
        this.validateDecisions();
      })
    }
  }

  validateDecisions(){
    if(this.state.checkerDecision !== "" && this.state.workerDecision !== ""){
      this.setState({validated: "validated"}, ()=>{
        console.log("Validated")
      })
    }
    else{
      console.log("Awaiting validation")
    }
  }

  validateID(who){
    if(who==="Worker" && this.state.workerSovID !== ""){
      return "validated";
    }
    else if(who==="Checker" && this.state.checkerSovID !== ""){
      return "validated";
    }
    else{
      return "unvalidated";
    }
  }

  handleSubmit(){
    //
  }

  fakeHandleSubmit(){
    if(this.state.validated==="validated"){
      this.setState({fireAway: "BLOCKCHAIN ENGAGED: ALL SYSTEMS GO"})
    }
  }

  render() {
    const web3context = this.context.web3;
    console.log(web3context);
    console.log("web3.eth: " + window.web3.eth.getBalance("0x30c70f95847fecea2ee3a454ce4a0e5310a6e231", (err, wei)=>{
      if(err){
        console.log(err)
      }
      else{
        console.log("this is the wei " + wei);
      }
    }));
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
                validated={
                  this.validateID("Checker")
                }
                handleID={this.handleID.bind(this)}
                handleAgreeDisagree={this.handleAgreeDisagree.bind(this)}
              />
              <Verifier
                stakeHolderName="Worker"
                validated={
                  this.validateID("Worker")
                }
                handleID={this.handleID.bind(this)}
                handleAgreeDisagree={this.handleAgreeDisagree.bind(this)}
              />
            </div>
            <div className={this.state.validated} id="fake-submit" onClick={this.fakeHandleSubmit.bind(this)}>Submit</div>
            {/* <input type="submit" value="Submit"/> */}
          </form>
          <p id="foo">{this.state.fireAway}</p>
        </div>
      </div>
    );
  }
}
App.contextTypes = {
  web3: PropTypes.object
};
export default App;
