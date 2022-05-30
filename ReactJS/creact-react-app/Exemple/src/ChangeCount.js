import React from 'react'
import CountNumber from './CountNumber.js'

class ChangeCount extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.changeCount = this.changeCount.bind(this)
    }

    changeCount(vlue) {
        console.log('vlue', vlue)

        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <CountNumber clickHandle={this.changeCount} count={this.state.count} ></CountNumber>
            </div>
        )
    }
}
export default ChangeCount