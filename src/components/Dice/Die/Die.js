import React from 'react'

class Die extends React.Component {
    render() {
        return (
            <div className="Die">
                <h2>
                    {this.props.Value}
                </h2>
            </div>
        )
    }
}
export default Die;