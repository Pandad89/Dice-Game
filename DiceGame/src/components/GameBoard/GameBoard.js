import React from 'react'
import Dice from '../Dice/Dice';
import Player from '../Player/Player';

class GameBoard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            playerScore1: 0,
            playerScore2: 0,
            diceValue1: 0,
            diceValue2: 0,
            currentRollValue: 0,
            activePlayer: true,
        }
    }
        rollHandler = () => {
            const diceRoll1 = Math.floor((Math.random() *6) + 1);
            const diceRoll2 = Math.floor((Math.random() *6) + 1);
            const diceRollTotal = diceRoll1 + diceRoll2;
            const isPlayer1 = this.state.activePlayer;
            this.setState({
                diceValue1: diceRoll1,
                diceValue2: diceRoll2,
                currentRollValue: this.state.currentRollValue + diceRollTotal,
            })
            if (diceRollTotal === 12 && isPlayer1 === true) {
                this.setState({
                    currentRollValue: 0,
                    playerScore1: this.state.playerScore1 + 12,
                    activePlayer: false,
                })

            }
            if (diceRollTotal === 12 && isPlayer1 === false) {
                this.setState({
                    currentRollValue: 0,
                    playerScore1: this.state.playerScore2 + 12,
                    activePlayer: true,
                })

            }
        }
        holdHandler = () => {
            const totalScore1 = this.state.playerScore1 + this.state.currentRollValue;
            const totalScore2 = this.state.playerScore2 + this.state.currentRollValue;
            if(this.state.activePlayer === true){
                this.setState({
                    diceValue1: 0,
                    diceValue2: 0,
                    playerScore1: totalScore1,
                    currentRollValue: 0,
                    activePlayer: false,
                })
            }
            if(this.state.activePlayer  === false){
                console.log()
                this.setState({
                    diceValue1: 0,
                    diceValue2: 0,
                    playerScore2: totalScore2,
                    currentRollValue: 0,
                    activePlayer: true,
                })
            }
        }
        newGame = () => {
            this.setState({
                playerScore1: 0,
                playerScore2: 0,
                diceValue1: 0,
                diceValue2: 0,
                currentRollValue: 0,
                activePlayer: true,
            })
        }

    render() {
        return (
            <div className='GameBoard'>
                <Player  active={this.state.activePlayer} className="playerLeft" playerName="Player 1" totalScore={this.state.playerScore1} />
                <Dice holdHandler={this.holdHandler} rollHandler={this.rollHandler} newGame={this.newGame} roll1={this.state.diceValue1} roll2={this.state.diceValue2} currentRoll={this.state.currentRollValue}/>
                <Player active={!this.state.activePlayer} className="playerRight" playerName="Player 2" totalScore={this.state.playerScore2}/>
            </div>
        )
    }
}

export default GameBoard;