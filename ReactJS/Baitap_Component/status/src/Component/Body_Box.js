import React from 'react'

class Body_Box extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            ImageUrl: 'https://timeoutvietnam.com/files/2014/11/04/dai-lo-hoa-anh-dao-tuyet-dep-o-bonn-duc-2.jpg',
            content: "Tôi rất thích cảm giác một mình lượn vòng trên các con đường góc phố, ngắm nhìn dòng người hối hả đi qua..."
        })
    }

    render() {
        return (
            <div>
                <div className="card-body">
                    <div className='content'>{this.state.content}</div>
                    <img src={this.state.ImageUrl}></img>
            
                </div>

            </div>
        );
    }
}

export default Body_Box