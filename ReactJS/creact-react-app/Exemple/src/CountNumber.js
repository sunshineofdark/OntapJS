import React from 'react'

class CountNumber extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.clickHandle("ksahdkshdksajhd");
    }
    render() {
        return (
            <div>

                <button onClick={this.handleClick}> Click </button>
                <div>{this.props.count}</div>
            </div>
        );
    }
}

export default CountNumber