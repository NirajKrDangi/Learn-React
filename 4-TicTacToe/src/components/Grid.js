import { useState } from "react";
import Card from './Card';
import './Grid.css';

function Grid({ noOfCards }) {
    const [board, setBoard] = useState(Array(noOfCards).fill(""))
    
    // console.log(board);
    // console.log(Array(9).fill(''));

    return (
        <div className="grid-wrapper">
            <h1 className="turn-highlight"></h1>
            <div className="grid">
                {board.map((el, idx) => <Card key={idx} />)}
            </div>
        </div>
    )
}

export default Grid