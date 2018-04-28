import React, { Component } from 'react';

class Verifier extends Component{
    constructor(){
        super();
        this.state = {
            xSelection: "not-selected",
            checkSelection: "not-selected",
            selected: "",
            stakeHolderName: "",
            stakeHolderID: "",
            validated: "unvalidated"
        }
    }

    static getDerivedStateFromProps(props, currentState){
        if(props !== currentState){
            return{
                    stakeHolderID: props.stakeHolderID,
                    stakeHolderName: props.stakeHolderName,
                    selected: props.selected,
                    validated: props.validated
                }
            }
        else{
            return null;
        }
    }

    handleID(event){
        this.props.handleID(this.state.stakeHolderName, event.target.value);
    }

    handleAgreeDisagree(event){
       if(event.target.className==="validated check-mark"){
           this.setState({
            checkSelection: "selected-check",
            xSelection: "not-selected",
            selected: "agree"
        }, ()=>{this.props.handleAgreeDisagree(this.state.stakeHolderName, this.state.selected)
        })
       }
       if(event.target.className==="validated x-mark"){
           this.setState({
                xSelection: "selected-x",
                checkSelection: "not-selected",
                selected: "disagree"
         }, ()=>{
            this.props.handleAgreeDisagree(this.state.stakeHolderName, this.state.selected)
         })
       }
    }


    render(){
        return (
            <div className="stakeHolder">
                <label>
                {this.state.stakeHolderName}'s ID:
                <input type="text" value={this.state.stakeHolderID} onChange={this.handleID.bind(this)}/>
                </label>
                <label className="approval">
                    <p onClick={this.handleAgreeDisagree.bind(this)}>
                    <span className={this.state.validated + " x-mark"} role="img" alt="X mark" id={this.state.xSelection}>&#10006;</span>
                    </p>
                    <p onClick={this.handleAgreeDisagree.bind(this)}>
                        <span className={this.state.validated + " check-mark"} role="img" alt="check mark" id={this.state.checkSelection}>&#10004;</span>
                    </p>
                </label>
            </div>
        );
    }
}
export default Verifier;