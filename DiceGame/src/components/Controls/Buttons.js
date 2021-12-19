import React from 'react'

class Button extends React.Component {
    render() {
        return (
            <button onClick={() => this.props.rollHandler()}  className="Button">
                {this.props.Text}
            </button>
        )
    }
}

export default Button;