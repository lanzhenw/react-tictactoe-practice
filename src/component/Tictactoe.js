import React, {useState} from 'react'
import '../App.css'


export default function tictactoe() {
    return (
        <div>
            <Board />
        </div>
    )
}

// square component
    // value (props)s
    // onclick function (props)
function Square(props) {
    return <button className='square' onClick={props.onClick}>{props.value}</button>
}

// board component
function Board() {
// state
        // board state (state)
        // turn state (state)
    const [boardSquare, setboardSquare] = useState([null,null,null,null,null,null,null,null,null])
    // there is a bug here: the first square's props value is an array of 9, while the rest are all null.
    // debugger
    const [xIsNext, setXIsNext] = useState(true)

    // handleClick
    const handleClick = index => {
        // copy of our board state
        const squares = [...boardSquare];
        // if the index of the board is filled, return
        if (squares[index]) return 
            // mutate that copy, and add x or o
            squares[index] = xIsNext ? "X" : 'O'
            // set the state of the board
            setboardSquare(squares)
            // set the state of the turn
            setXIsNext(!xIsNext)
    }

            // create our board
                // create a render square function
                // takes in an index and returns a square with the value and function
                const renderSquare = (index) => {
                    return <Square value = {boardSquare[index]} onClick = { ()  => {
                        handleClick(index)    
                        console.log('index', index);
                        console.log('boardSquare[index]', boardSquare[index]);
                             }
                        } />
                }

                // initialize status
                let status
                const winner = calculateWinner(boardSquare)
                status = winner ? `Winner is : ${winner}` : 
                                            `Next Palyer: ${xIsNext? 'X':'O'}`
                // render the board
                return (
                    <div >
                        <div className='status'>{status}</div>
                        <div className = 'board-row'>
                            {renderSquare(0)}
                            {renderSquare(1)}
                            {renderSquare(2)}
                        </div>
                        <div className = 'board-row'>
                            {renderSquare(3)}
                            {renderSquare(4)}
                            {renderSquare(5)}
                        </div>
                        <div className = 'board-row'>
                            {renderSquare(6)}
                            {renderSquare(7)}
                            {renderSquare(8)}
                        </div>
                    </div>
                )

                // function that calculate the winner
                function calculateWinner(squaresArr) {
                    const winningLines = [
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [2,4,6]
                    ]

                    // loop through this set and check if values in our squares array fulfill the requirment
                        // if yes, return the winner
                        // else, return nothign
                    for (let i = 0; i<winningLines.length; i++) {
                        const [a, b, c] = winningLines[i];
                        if (squaresArr[a] && squaresArr[a] === squaresArr[b] && squaresArr[b] === squaresArr[c])
                        return squaresArr[a];
                    }
                    return null;
                }
        
        
    }    

    
    