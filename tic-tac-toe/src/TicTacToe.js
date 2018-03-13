import React, { Component } from 'react';
import Board from './Board.js';
import './index.css';
import { browserHistory } from 'react-router';
import Scoreboard from './Scoreboard.js';
import Leaderboard from './Leaderboard.js';
class TicTacToe extends Component {
    constructor() {
        super();
        this.state = {
            grid_size: 3,
            val1: "",
            val2: "",
            history: []
        };
        this.handle = this.handle.bind(this);
        this.handle1 = this.handle1.bind(this);
        this.empty = this.empty.bind(this);
        this.emptyAll = this.emptyAll.bind(this);
        this.mark = this.mark.bind(this);
        this.onHome = this.onHome.bind(this);
        this.go = this.go.bind(this);
    }
    go() {
        browserHistory.push("/Leaderboard");
    }
    init() {
        this.moves = 0;
        this.setState({
            score: {
                X: 0,
                O: 0
            },
            data: {}
        });
    }
    handle(event) {
        this.setState({ val1: event.target.value });
    }
    handle1(event) {
        this.setState({ val2: event.target.value });
    }
    empty() {
        this.moves = 0;
        this.setState({ data: {} });
    }
    emptyAll() {
        this.move = 0;
        this.setState({
            score: {
                X: 0,
                O: 0
            },
            val1: "",
            val2: "",
            data: {}
        });
    }
    onHome() {
        browserHistory.push("/");

    }
    mark(row_index, col_index) {
        let obj = {};
        if (this.state.data[row_index + '' + col_index]) {
            return;
        }
        this.moves++;
        var current_mark = this.moves % 2 === 1 ?
            'X' :
            'O';
        this.setState({
            data: {
                ...this.state.data,
                [row_index + '' + col_index]: current_mark
            }
        });
        setTimeout(() => {
            if (this.didWin(current_mark)) {
                if (current_mark === 'X') {
                    obj.player_name = this.state.val1;
                    obj.sc = this.state.score.X;
                    this.state.history.push(obj);
                    var his=[];
                    his.push(obj)
                    console.log(his);
                    his = JSON.parse(localStorage.getItem("leaderboard1"));
                    localStorage.setItem("leaderboard1", JSON.stringify(his));
                    console.log(this.state.history);
                    alert("Congratulations " + this.state.val1 + " you beat " + this.state.val2);
                } else {
                    obj.player_name = this.state.val2;
                    obj.sc = this.state.score.O;
                    this.state.history.push(obj);
                    var his=[];
                    his.push(obj);
                    console.log(his);
                    his = JSON.parse(localStorage.getItem("leaderboard1"));
                    localStorage.setItem("leaderboard1", JSON.stringify(his));
                    console.log(this.state.history);
                    alert("Congratulations " + this.state.val2 + " you beat " + this.state.val1);
                }
                this.setState({
                    score: {
                        ...this.state.score,
                        [current_mark]: this.state.score[current_mark] + 1
                    }
                });
                this.empty();
            } else if (this.moves === Math.pow(this.state.grid_size, 2)) {
                alert("It's a draw !");
                this.empty();
            }
        }, 200);
    }
    didWin(mark) {
        var vertical_count = 0,
            horizontal_count = 0,
            right_to_left_count = 0,
            left_to_right_count = 0;
        for (var i = 0; i < this.state.grid_size; i++) {
            vertical_count = 0;
            horizontal_count = 0;
            for (var j = 0; j < this.state.grid_size; j++) {
                if (this.state.data[i + '' + j] === mark) {
                    horizontal_count++;
                }
                if (this.state.data[j + '' + i] === mark) {
                    vertical_count++;
                }

            }
            if (this.state.data[i + '' + i] === mark) {
                left_to_right_count++;
            }
            if (this.state.data[(this.state.grid_size - 1 - i) + '' + i] === mark) {
                right_to_left_count++;
            }
            if (horizontal_count === this.state.grid_size || vertical_count === this.state.grid_size) {
                return true;
            }

        }
        if (left_to_right_count === this.state.grid_size || right_to_left_count === this.state.grid_size) {
            return true;
        }
        return false;
    }
    componentWillMount() {
        this.init();
    }
    render() {
        return ( <
            div className = "tic-tac-toe container-fluid" >
            <
            header className = 'row' >
            <
            h1 > < b > < u > Tic Tac Toe < /u></b > < /h1>   <
            button id = 'btn1'
            className = "pull-left btn-warning"
            onClick = { this.onHome } >
            Home <
            /button> <
            button id = 'btn1'
            className = "pull-right btn-primary"
            onClick = { this.emptyAll } >
            New Game <
            /button> < /
            header > <
            hr / >
            <
            p > Player 1:
            <
            input type = 'text'
            value = { this.state.val1 } onChange = { this.handle }
            /> <
            p > Player 2:
            <
            input type = 'text'
            value = { this.state.val2 } onChange = { this.handle1 }
            /></p >
            <
            /p > <
            hr / >
            <
            Scoreboard score = { this.state.score } v = { this.state.val1 } v1 = { this.state.val2 }
            />  <
            hr / >
            <
            h3 > Game! < /h3>   <
            Board data = { this.state.data } grid_size = { this.state.grid_size } mark = { this.mark }
            /> <
            div >
            <
            button id = 'btn'
            className = 'btn btn-danger pull-left'
            onClick = { this.empty } >
            Reset <
            /button> <
            button id = 'btn'
            className = 'btn btn-primary pull-right'
            onClick = { this.empty } >
            LeaderBoard <
            /button> 

            <
            /div> < /
            div >
        )
    }
}
export default TicTacToe;