import React from 'react'



class InformationUser extends React.Component {

    constructor(props) {
        super(props)
        this.state = ({
            nameUser: 'Thanh Hưng',
        })
    }
    render() {
        return (
            <div className="card-header">
                <div className='row'>
                    <div className="row g-1">
                        <div className="col-4">
                            <div className="">
                                <img className='avatar' src='https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/tmuihk/2022_05_12/avt-stills1-8041.jpg' width="65px" height="65px"></img>
                                <a href="" className='nameUser'>{this.state.nameUser}</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default InformationUser