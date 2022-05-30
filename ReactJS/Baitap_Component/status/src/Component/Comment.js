import React from 'react'

class Comment extends React.Component {


    constructor(props) {
        super(props);
        // this.addCommnet = this.addCommnet.bind(this)
        this.state = {
            comment: null
        }
    }

    addCommnet = () => {
        console.log(this.props)
        if (this.props.clickPostComment) {
            this.props.clickPostComment({
                id: 3,
                cmtContent: this.state.comment
            })
        }
    }
    render() {
        return (
            <div>
                <div className="card-footer">
                    <div>
                        <div className="field">
                            <div className="control">
                                <textarea
                                    className="form-control"
                                    name="comment"
                                    placeholder="Add a comment"
                                    value={this.state.comment?.CmtContent}
                                    onChange={(e) => this.setState({
                                        comment: e.target.value
                                    })}

                                ></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button className="btn btn-info" onClick={this.addCommnet}>Comment</button>
                            </div>
                            <div>
                                {this.props.contentCmt && this.props.contentCmt.map(x => {
                                    return (
                                        <div key={x.id}>{x.cmtContent}</div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Comment