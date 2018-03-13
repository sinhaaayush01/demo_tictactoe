import React, { Component } from 'react';
class Board extends Component {
    render() {
        var dummy_array = Array.apply(null, Array(this.props.grid_size));
        return (
            <div className="board">
                <table>
                    {
                      dummy_array.map((value, row_index) => {
                        return (
                            <tr>
                                {
                                  dummy_array.map((value, column_index) => {
                                    return (
                                        <td className={this.props.data[row_index + '' + column_index]} onClick={() => {
                                            this.props.mark(row_index, column_index)
                                        }}>
                                            {this.props.data[row_index + '' + column_index]}
                                        </td>
                                    )
                                  })
                                }
                            </tr>
                        )
                      })
                    }
                </table>
            </div>
        )
    }
}
export default Board;
