import React from 'react'
import Button from './Buttons';

class Controls extends React.Component {

    render() {
        return (
            <div className="Controls">
                <Button Value="Roll Dice"/>
                <Button Value="Hold"/>
                <Button Value="New Game"/>
            </div>
        )
    }
}

// export default Controls;