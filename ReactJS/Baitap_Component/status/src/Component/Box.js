import React from 'react'
import InformationUser from './InformationUser'
import Body_Box from './Body_Box'
import Emotion from './Emotion'
import Comment from './Comment'
import DataComent from './DataComent'
class Box extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className='container'>
                <div className="card">
                    <InformationUser></InformationUser>
                    <Body_Box>

                    </Body_Box>
                    <Emotion></Emotion>
                    <DataComent />
                </div>
            </div>
        )
    }
}

export default Box