import React, { Component } from 'react';
class Scoreboard extends Component {
    render() {
        return (
            <div>
            <h3>Score Board</h3>
            <table className="scoreboard">
                <tr>
                    <td>
                        {this.props.v}
                    </td>
                    <td width="30">
                    </td>
                    <td>
                        {this.props.v1}
                    </td>
                </tr>
                <tr>
                    <td className="score X">
                        {this.props.score.X}
                    </td>
                    <td>
                    </td>
                    <td className="score O">
                        {this.props.score.O}
                    </td>
                </tr>
            </table>
            </div>
        )
    }
}
export default Scoreboard;
