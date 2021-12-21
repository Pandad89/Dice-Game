import React from 'react'

class Player extends React.Component {
    render() {
        return (
            <div className="Player">
                <h1>
                    {this.props.playerName}
                </h1>
                <h3>
                    Total Score: {this.props.totalScore}
                </h3>
            </div>
        )
    }
}

export default Player;