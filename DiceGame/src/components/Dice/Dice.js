import React from 'react'
import Die from './Die/Die'

class Dice extends React.Component {

    render() {
        return (
            <div className="Dice">
                <Die Value={this.props.roll1}/>
                <Die Value={this.props.roll2}/>
                <h3>Current Roll: {this.props.currentRoll}</h3>
                <button onClick={this.props.rollHandler}>Roll Dice</button>
                <button onClick={this.props.holdHandler}>Hold</button>
            </div>
        )
    }
}

export default Dice