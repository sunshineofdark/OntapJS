import React from 'react'

class LifeCycle extends React.Component {

    constructor(props) {
        super(props)
        console.log("construtor")
        this.state = {
            color: 'red'
        }
    }
    shouldComponentUpdate() {
        return false
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        return { color: state.color };
    }
    componentDidUpdate(prevProp, prevState) {
        if (prevState && prevState.color === this.state.color) {
            alert('Trùng màu')
        }
        console.log("componentDidUpdate")
    }
    componentDidMount() {

        console.log("componentDidMount")
    }
    handleClick = () => {
        this.setState({
            color: "black"
        })
    }

    render() {
        console.log("render")
        return (
            <>
                <div> Đây là màu {this.state.color}</div>
                <button onClick={this.handleClick}>Change</button>
            </>
        )
    }

}

export default LifeCycle