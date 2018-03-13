import React, { Component } from 'react';
import { browserHistory } from "react-router";
 
class Home extends Component {

  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
  	 browserHistory.push("/Tic Tac Toe");
  }

  render() {
    
    return (
      <div className = "header">
      <h2><b> <u>Tic-Tac-Toe </u></b></h2> 
      <input type="submit" className="btn btn-primary" id="b" value="Play!" onClick={this.handleClick} />
      </div>
    );
  }
}


export default Home;