import React from 'react'
import Comment from './Comment'

class DataComent extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            commentt: [{
                id: "",
                cmtContent: ""
            }]
        })
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(value) {
        console.log('value', value)
        this.setState((prevState, prop) => ({
            commentt: [
                ...prevState.commentt,
                value
            ]
        }))
    }
    render() {
        return (
            <>
                <Comment clickPostComment={this.handleClick} data={1} contentCmt={this.state.commentt} />
            </>
        )
    }

}
export default DataComent;