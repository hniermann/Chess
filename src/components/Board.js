import '../styles/chess.css';
import Pawn from './Pawn.js';

//800 by 800
const LETTERS = ['a','b','c','d','e','f','g','h'];

function createPawns() {
    var pawns = [];
    for(let i = 0; i < 8; i++){
        pawns.push(
            <div>
                <div className={LETTERS[i]+'2'}>
                    <Pawn/>
                </div>
                <div className={LETTERS[i]+'7'}>
                    <Pawn/>
                </div>
            </div>
        )
    }
    return pawns;
}

export default function Board() {
    return (
        <div>
            <div className="Board">
                <img src= {require('../images/Board.png')} />
            </div>
           {createPawns()}
        </div>
    );
}