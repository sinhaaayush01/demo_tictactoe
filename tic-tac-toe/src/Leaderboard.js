import React, { Component } from 'react';
import { browserHistory } from "react-router";
class Leaderboard extends Component{
	displaydata(){
        var his = JSON.parse(localStorage.getItem("leaderboard1"));
        let a="";
        for(let i=0;i<his.length;i++)
        {
            a+="Player:"+his[i].player_name+"  "+"Wins:"+his[i].sc+"\n";
        }
        console.log(a);
        return a;
    }
    goto(){
    	browserHistory.push('Tic Tac Toe');
    }
    render(){
    	return(
    		<div>
    		<h3>Leaderboard</h3>
    		<button className='pull-left btn btn-primary' onClick={this.goto.bind(this)}>Back to game</button>
    		<p>{this.displaydata()}</p>
    		</div>
    		);
    }
}
export default Leaderboard;