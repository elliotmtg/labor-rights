import React, { Component } from 'react';

class Verifier extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    handleID(event){
        this.props.handleID(event.target.value)
    }


    render(){
        const web3Context = this.context.web3
        console.log("Inside Verifier", web3Context)
        return (
            <label>
            {this.props.stakeHolderName}'s Soveriegn ID:
            <input type="text" value={this.props.stakeHolderID} onChange={this.handleID.bind(this)}/>
            <span role="img" alt="X mark" id="x-mark">&#10006;</span>
            <span role="img" alt="check mark" id="check-mark">&#10004;</span>
          </label>

        );
    }
}
export default Verifier;