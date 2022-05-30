import React from 'react';


class Emotion extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            count: 0
        })
    }

    render() {
        return (
            <div className='row g1'>

                <div className="col-4">
                    <div className="likebuton">
                        <i className="fa fa-thumbs-up"
                            onClick={() => {
                                if (this.state.count === 0) {
                                    this.setState({
                                        count: 1
                                    })
                                } else {
                                    this.setState({
                                        count: 0
                                    })
                                }
                            }}></i>
                        {this.state.count}
                    </div>
                </div>
            </div>

        )
    }
}
export default Emotion